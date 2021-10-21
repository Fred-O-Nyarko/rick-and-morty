import { TrashIcon, PlusIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Character } from '../../../generated/graphql';
import { removeCharacter, addCharacter } from '../../../redux/characterSlice';
import { useAppSelector } from '../../../redux/hooks';
import { routes } from '../../../routing/routes';
import { Image } from '../../elements';
import { isInList } from './utils';

function Favorites() {
  const favoriteCharacters = useAppSelector(
    (state) => state.favoriteCharacters.favoriteCharacters,
  );
  const router = useRouter();
  const dispatch = useDispatch();
  function handleClick(e: any, character: Character) {
    e?.stopPropagation();

    if (isInList(favoriteCharacters, character)) {
      return dispatch(removeCharacter(character));
    }
    dispatch(addCharacter(character));
  }
  return (
    <div className="container  mx-auto w-full md:w-2/3 min-h-screen my-5">
      <div className="flex flex-1 flex-col justify-center items-center ">
        <div className="backdrop backdrop-filter backdrop-blur-sm  bg-white bg-opacity-10 rounded text-white border border-white shadow-lg p-6 mb-4 w-full">
          <div className="text-lg font-bold"> Favorite Characters ❤️</div>
        </div>

        <div className="backdrop backdrop-filter backdrop-blur-sm  bg-white bg-opacity-10 rounded text-white border border-white shadow-lg p-6 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {favoriteCharacters.length > 0 &&
              favoriteCharacters?.map((character, idx) => (
                <div
                  className="group backdrop backdrop-filter backdrop-blur-sm  bg-white bg-opacity-10 rounded text-white border border-white shadow-lg  hover:cursor-pointer hover:bg-opacity-90 hover:bg-black transition-all"
                  key={idx}
                  onClick={() =>
                    router.push(`${routes.characters}/${character.id}`)
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
                        className="hidden group-hover:inline-flex items-center justify-center w-7 h-7 mr-2 bg-transparent transition-colors duration-150  rounded focus:shadow-outline  z-10"
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
              ))}
          </div>
          {!favoriteCharacters.length && (
            <div className="font-bold text-center text-lg">
              oops! no characters here today 😢
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
