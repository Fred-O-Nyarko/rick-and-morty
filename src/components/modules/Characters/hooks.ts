import {
  Characters,
  FilterCharacter,
  QueryCharactersArgs,
} from '@/generated/graphql';
import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_CHARACTERS } from './services/queries';

export const useFetchCharacters = (filters?: FilterCharacter) => {
  const { data, loading, error, fetchMore, networkStatus } = useQuery<
    { characters: Characters },
    QueryCharactersArgs
  >(GET_CHARACTERS, {
    variables: { filter: { name: filters.name } },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
  });

  const next = data?.characters?.info?.next;
  const hasNextPage = !!next;
  const isSetVariables = networkStatus === 2;
  const characters = !isSetVariables ? data?.characters : undefined;

  const handleLoadMore = React.useCallback(
    () =>
      fetchMore({
        variables: { page: next },
      }),
    [fetchMore, next],
  );

  return {
    loading,
    characters,
    error,
    hasNextPage,
    next,
    handleLoadMore,
  };
};
