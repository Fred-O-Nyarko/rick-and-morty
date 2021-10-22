import {
  Locations,
  QueryEpisodesArgs,
  FilterLocation,
} from '@/generated/graphql';
import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_LOCATIONS } from './services/queries';

export const useFetchLocations = (filters?: FilterLocation) => {
  const { data, loading, fetchMore, networkStatus, error } = useQuery<
    { locations: Locations },
    QueryEpisodesArgs
  >(GET_LOCATIONS, {
    variables: { filter: { name: filters.name } },
    notifyOnNetworkStatusChange: true,
  });

  const next = data?.locations?.info?.next;
  const hasNextPage = !!next;
  const isSetVariables = networkStatus === 2;
  const locations = !isSetVariables ? data?.locations : undefined;

  const handleLoadMore = React.useCallback(
    () =>
      fetchMore({
        variables: { page: next },
      }),
    [fetchMore, next],
  );

  return {
    locations,
    hasNextPage,

    error,
    loading,
    handleLoadMore,
  };
};
