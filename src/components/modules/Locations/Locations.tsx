import React from 'react';
import { Loading } from '@/components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Locations, QueryEpisodesArgs } from '@/generated/graphql';
import { GET_LOCATIONS } from './services/queries';
import { useQuery } from '@apollo/client';

function LocationsList() {
  const [searchData, setSearchData] = React.useState('');
  const { data, loading, fetchMore, networkStatus, error } = useQuery<
    { locations: Locations },
    QueryEpisodesArgs
  >(GET_LOCATIONS, {
    variables: { filter: { name: searchData } },
    notifyOnNetworkStatusChange: true,
  });

  // TODO: do proper error handling
  if (error) {
    throw error;
  }

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

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchData(e.target.value);
  }

  return (
    <div className="container mx-auto w-full md:w-2/3 my-5">
      <div className="backdrop backdrop-filter backdrop-blur-sm  bg-white bg-opacity-10 rounded text-white shadow p-2 flex mb-5">
        <span className="w-auto flex justify-end items-center text-white text-opacity-40 p-2">
          🔍
        </span>
        <input
          className="w-full p-2 bg-transparent outline-none"
          type="text"
          placeholder="enter location name..."
          onChange={handleSearch}
        />
      </div>
      <InfiniteScroll
        dataLength={locations?.results.length ?? 0}
        next={handleLoadMore}
        hasMore={hasNextPage}
        loader={<Loading />}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {locations?.results.length
            ? locations?.results.map((location, idx) => (
                <div
                  className="group backdrop backdrop-filter backdrop-blur-sm  bg-white bg-opacity-10 rounded text-white border border-white shadow-lg  hover:cursor-pointer hover:bg-opacity-90 hover:bg-black transition-all"
                  key={idx}
                >
                  <div className="relative">
                    <div className="flex justify-between items-center p-3">
                      <p className="tracking-wide text-sm text-shadow  font-bold ">
                        {location.name} <br />
                        <span className="text-xs font-normal text-white text-opacity-70">
                          {location.dimension}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : !loading && (
                <div className="text-center font-bold text-white text-lg w-full col-span-12">
                  No data available 😢
                </div>
              )}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default LocationsList;
