import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { Character } from '@/generated/graphql';
import { Loading, Image, Notification } from '../../elements';
import { routes } from '@/routing/routes';

import InfiniteScroll from 'react-infinite-scroll-component';
import {
  addCharacter,
  removeCharacter,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';
import { isInList } from './utils';
import { useFetchCharacters } from './hooks';

interface NotificationProps {
  action: 'add' | 'remove';
  character: Character;
}

const CharactersList = () => {
  const router = useRouter();
  const [searchData, setSearchData] = React.useState('');
  const { characters, loading, error, hasNextPage, handleLoadMore } =
    useFetchCharacters({ name: searchData });

  // TODO: do proper error handling
  if (error) {
    console.log(error);
  }

  const dispatch = useAppDispatch();
  const favoriteCharacters = useAppSelector(
    (state) => state.favoriteCharacters.favoriteCharacters,
  );

  const [notification, setNotification] = React.useState<
    NotificationProps | undefined
  >();

  const [clicked, toggleClicked] = React.useState<boolean>();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchData(e.target.value);
  }

  function handleClick(e: any, character: Character) {
    e?.stopPropagation();
    toggleClicked(!clicked);
    if (isInList(favoriteCharacters, character)) {
      setNotification({
        action: 'remove',
        character: character,
      });
      return dispatch(removeCharacter(character));
    }
    setNotification({
      action: 'add',
      character: character,
    });
    dispatch(addCharacter(character));
  }

  return (
    <>
      <Notification
        showNotification={clicked}
        message={`${notification?.character.name} ${
          notification?.action === 'add' ? 'added to' : 'removed from'
        } favorites`}
      />
      <div className="container mx-auto w-full md:w-2/3 my-5 p-5 md:p-0">
        <div className="backdrop backdrop-filter backdrop-blur-sm  bg-white bg-opacity-10 rounded text-white shadow p-2 flex mb-5">
          <span className="w-auto flex justify-end items-center text-white text-opacity-40 p-2">
            🔍
          </span>
          <input
            className="w-full p-2 bg-transparent outline-none"
            type="text"
            placeholder="enter character name..."
            onChange={handleSearch}
          />
        </div>

        <InfiniteScroll
          dataLength={characters?.results.length ?? 0}
          next={handleLoadMore}
          hasMore={hasNextPage}
          loader={<Loading />}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {characters?.results.length
              ? characters?.results.map((character, idx) => (
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
                          {isInList(favoriteCharacters, character) ? (
                            <>🗑</>
                          ) : (
                            <>❤️</>
                          )}
                        </button>
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
    </>
  );
};

export default CharactersList;
