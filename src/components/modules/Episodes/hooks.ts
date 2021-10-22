import {
  Episodes,
  FilterEpisode,
  QueryEpisodesArgs,
} from '@/generated/graphql';
import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_EPISODES } from './services/queries';

export const useFetchEpisodes = (filters?: FilterEpisode) => {
  const { data, loading, error, fetchMore, networkStatus } = useQuery<
    { episodes: Episodes },
    QueryEpisodesArgs
  >(GET_EPISODES, {
    variables: { filter: { name: filters.name } },
    notifyOnNetworkStatusChange: true,
  });

  const next = data?.episodes?.info?.next;
  const hasNextPage = !!next;
  const isSetVariables = networkStatus === 2;
  const episodes = !isSetVariables ? data?.episodes : undefined;

  const handleLoadMore = React.useCallback(
    () =>
      fetchMore({
        variables: { page: next },
      }),
    [fetchMore, next],
  );

  return {
    episodes,
    loading,
    error,
    handleLoadMore,
    hasNextPage,
  };
};
