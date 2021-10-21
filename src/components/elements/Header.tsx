import React from 'react';
import { Image } from '../elements';
import Link from './Link';
import { routes } from '../../routing/routes';
import { HeartIcon } from '@heroicons/react/solid';
import { favoriteCharactersCount } from '../../redux/characterSlice';
import { useAppSelector } from '../../redux/hooks';
import { useRouter } from 'next/dist/client/router';

function Header() {
  const count = useAppSelector(favoriteCharactersCount);
  const router = useRouter();
  return (
    <nav className="backdrop backdrop-filter backdrop-blur-sm  bg-white bg-opacity-10  text-white border border-white border-opacity-30 drop-shadow-lg shadow-lg flex items-center justify-between flex-wrap px-6 py-2 w-full">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <Link href={routes.home} className="hover:cursor-pointer">
          <Image
            src="/assets/images/logo.png"
            width={60}
            height={60}
            objectFit="contain"
            layout="intrinsic"
          />
        </Link>
      </div>
      <button
        className="relative bg-transparent border border-white text-white p-2 rounded text-sm font-bold overflow-visible hover:bg-opacity-70 hover:bg-black"
        onClick={() => router.push(routes.favorites)}
      >
        Favorite characters
        <div className="absolute top-0 right-0 -mt-4 -mr-4 px-4 py-1 bg-red-600 rounded-full">
          {count}
        </div>
      </button>
    </nav>
  );
}

export default Header;
