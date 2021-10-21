import { useQuery } from '@apollo/client';
import React from 'react';
import { Character, QueryCharacterArgs } from '@/generated/graphql';
import { GET_CHARACTER } from './services/queries';
import { Image } from '../../elements';
import { useRouter } from 'next/router';

function CharacterProfile() {
  const { query } = useRouter();

  const { data, error, loading } = useQuery<
    { character: Character },
    QueryCharacterArgs
  >(GET_CHARACTER, {
    variables: { id: query.id as string },
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
  });

  const characterDetails = data?.character;
  const maxEpisodesToRender = 9;
  const episodeCount = data?.character.episode.length;
  const [expand, setExpand] = React.useState<boolean>(!maxEpisodesToRender);
  function toggleExpand() {
    setExpand(!expand);
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap overflow-hidden flex-1 justify-center">
          <div className="my-4 px-2 w-full overflow-hidden lg:w-1/3 sticky top-0">
            <div className="backdrop backdrop-filter backdrop-blur-sm  bg-white bg-opacity-10 rounded text-white border border-white shadow-lg flex flex-col">
              <div className="image">
                <Image
                  src={characterDetails?.image ?? '/'}
                  alt={characterDetails?.name}
                  height={3}
                  width={4}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="p-3">
                <div className="font-bold text-lg">
                  {characterDetails?.name}
                </div>
                <div className="font-light mb-3 text-sm text-gray-300">
                  {!loading &&
                    `Present in ${characterDetails?.episode.length} episode${
                      characterDetails?.episode.length > 1 ? 's' : ''
                    }`}
                </div>
                <div className="mb-3">
                  <div className="flex gap-4">
                    <div className="">
                      <span className="text-xs font-normal text-white opacity-80">
                        GENDER
                      </span>{' '}
                      <br />
                      <span className="text-yellow-500 font-bold">
                        {characterDetails?.gender}
                      </span>
                    </div>
                    <div className="">
                      <span className="text-xs font-normal text-white opacity-80">
                        SPECIES{' '}
                      </span>
                      <br />
                      <span className="text-yellow-500 font-bold">
                        {characterDetails?.species}
                      </span>
                    </div>
                    <div className="">
                      <span className="text-xs font-normal text-white opacity-80">
                        STATUS{' '}
                      </span>
                      <br />
                      <span
                        className={`${
                          characterDetails?.status === 'Dead'
                            ? 'text-red-600'
                            : 'text-green-600'
                        } font-bold`}
                      >
                        {characterDetails?.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-xs font-normal text-white opacity-80">
                    {' '}
                    ORIGIN
                  </span>{' '}
                  <br /> Name -
                  <span className="text-green-400 font-bold">
                    {characterDetails?.origin.name}
                  </span>{' '}
                  <br />
                  Dimension -
                  <span className="text-green-400 font-bold">
                    {characterDetails?.origin.dimension}
                  </span>{' '}
                  <br /> No. of residents -
                  <span className="text-green-400 font-bold">
                    {!loading && characterDetails?.origin?.residents.length}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="text-xs font-normal text-white opacity-80">
                    {' '}
                    LOCATION{' '}
                  </span>
                  <br /> Name -
                  <span className="text-green-400 font-bold">
                    {characterDetails?.location.name}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="my-4 px-2 w-full overflow-hidden lg:w-1/2">
            <div className="backdrop backdrop-filter backdrop-blur-sm bg-white bg-opacity-10 rounded text-white border border-white shadow-lg p-3">
              <div className="text-left mb-3 font-bold">
                Episodes featured 🎥
              </div>
              {characterDetails?.episode?.map((ep, idx) =>
                ep && (expand || idx < maxEpisodesToRender) ? (
                  <>
                    <div
                      className="p-2 hover:bg-black hover:bg-opacity-30 hover:cursor-pointer transition-all"
                      key={idx}
                    >
                      <div className="font-bold">{ep.name}</div>
                      <div className="opacity-60 font-medium">
                        {ep.episode} - {ep.air_date}
                      </div>
                    </div>
                    <div className="border-b border-gray-300" />
                  </>
                ) : null,
              )}
              {episodeCount > maxEpisodesToRender && (
                <div
                  className="p-2 hover:bg-black hover:bg-opacity-30 hover:cursor-pointer transition-all"
                  onClick={toggleExpand}
                >
                  <div className="font-bold">{`SHOW ${
                    expand ? 'LESS' : 'MORE'
                  }`}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterProfile;
