import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { Loading } from '@/components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useFetchEpisodes } from './hooks';
import LoadingIndicator from '@/components/elements/LoadingIndicator';

function EpisodesList() {
  const [searchData, setSearchData] = React.useState('');
  const { episodes, loading, handleLoadMore, error, hasNextPage } =
    useFetchEpisodes({ name: searchData });

  // TODO: do proper error handling
  if (error) {
    console.log(error);
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchData(e.target.value);
  }

  return (
    <div className="container mx-auto w-full md:w-2/3 my-5 p-4 md:p-0 lg:p-0">
      <div className="backdrop backdrop-filter backdrop-blur-sm  bg-white bg-opacity-10 rounded text-white shadow p-2 flex mb-5">
        <span className="w-auto flex justify-end items-center text-white text-opacity-40 p-2">
          🔍
        </span>
        <input
          className="w-full p-2 bg-transparent outline-none"
          type="text"
          placeholder="enter episode name..."
          onChange={handleSearch}
        />
      </div>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <InfiniteScroll
          dataLength={episodes?.results.length ?? 0}
          next={handleLoadMore}
          hasMore={hasNextPage}
          loader={<Loading />}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {episodes?.results.length
              ? episodes?.results.map((episode, idx) => (
                  <div
                    className="group backdrop backdrop-filter backdrop-blur-sm  bg-white bg-opacity-10 rounded text-white border border-white shadow-lg  hover:cursor-pointer hover:bg-opacity-90 hover:bg-black transition-all"
                    key={idx}
                  >
                    <div className="relative">
                      <div className="flex justify-between items-center p-3">
                        <p className="tracking-wide text-sm text-shadow  font-bold ">
                          {episode.name} <br />
                          <span className="text-xs font-normal text-white text-opacity-70">
                            {episode.air_date}
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
      )}
    </div>
  );
}

export default EpisodesList;
