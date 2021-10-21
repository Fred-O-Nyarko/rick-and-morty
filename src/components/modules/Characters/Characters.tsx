import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from './services/queries';
import {
  Character,
  Characters,
  QueryCharactersArgs,
} from '../../../generated/graphql';
import { Loading, Image } from '../../elements';
import { routes } from '../../../routing/routes';
import {
  HeartIcon,
  PlusCircleIcon,
  PlusIcon,
  SearchIcon,
  TrashIcon,
} from '@heroicons/react/solid';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addCharacter, removeCharacter } from '../../../redux/characterSlice';
import { isInList } from './utils';

const CharactersList = () => {
  const router = useRouter();

  const { data, loading, error, fetchMore, networkStatus } = useQuery<
    { characters: Characters },
    QueryCharactersArgs
  >(GET_CHARACTERS, { variables: {}, notifyOnNetworkStatusChange: true });

  const next = data?.characters?.info?.next;
  const hasNextPage = !!next;
  const isSetVariables = networkStatus === 2;
  const characters = !isSetVariables ? data?.characters : undefined;

  const dispatch = useAppDispatch();
  const favoriteCharactersList = useAppSelector(
    (state) => state.favoriteCharacters.favoriteCharacters,
  );
  const [clicked, setClicked] = React.useState<boolean>(false);

  const handleLoadMore = React.useCallback(
    () =>
      fetchMore({
        variables: { page: next },
      }),
    [fetchMore, next],
  );

  function handleClick(e: any, character: Character) {
    e?.stopPropagation();
    setClicked(!clicked);

    if (isInList(favoriteCharactersList, character)) {
      return dispatch(removeCharacter(character));
    }
    dispatch(addCharacter(character));
  }
  console.log(favoriteCharactersList);

  return (
    <div className="container mx-auto w-full md:w-2/3 my-5 ">
      <div className="backdrop backdrop-filter backdrop-blur-sm  bg-white bg-opacity-10 rounded text-white shadow p-2 flex mb-5">
        <span className="w-auto flex justify-end items-center text-white text-opacity-40 p-2">
          <i className="material-icons">
            <SearchIcon className="h-5 w-5 text-white text-opacity-40" />
          </i>
        </span>
        <input
          className="w-full p-2 bg-transparent outline-none"
          type="text"
          placeholder="search characters..."
        />
      </div>

      <InfiniteScroll
        dataLength={characters?.results.length ?? 0}
        next={handleLoadMore}
        hasMore={hasNextPage}
        loader={<Loading />}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {characters?.results.map((character, idx) => (
            <div
              className="group backdrop backdrop-filter backdrop-blur-sm  bg-white bg-opacity-10 rounded text-white border border-white shadow-lg  hover:cursor-pointer hover:bg-opacity-90 hover:bg-black transition-all"
              key={idx}
              onClick={() =>
                router.push({
                  pathname: `${routes.characters}/[id]`,
                  query: { id: character.id },
                })
              }
            >
              <div className="relative">
                <Image
                  src={character.image}
                  alt={character.name}
                  height={3}
                  width={4}
                  layout="responsive"
                  objectFit="cover"
                  className="group-hover:opacity-50"
                />
                <div className="flex justify-between items-center p-3">
                  <p className="tracking-wide text-sm text-shadow  font-bold ">
                    {character.name}
                  </p>
                  <button
                    onClick={(e) => handleClick(e, character)}
                    className="hidden group-hover:inline-flex items-center justify-center w-7 h-7 mr-2 bg-transparent transition-colors duration-150 rounded focus:shadow-outline z-10"
                  >
                    {isInList(favoriteCharactersList, character) ? (
                      <>🗑</>
                    ) : (
                      <>❤️</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default CharactersList;
