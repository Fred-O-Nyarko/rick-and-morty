import React from 'react';
import { Image } from '../elements';
import Link from './Link';
import { routes } from '../../routing/routes';
import { HeartIcon } from '@heroicons/react/solid';
function Header() {
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
      <span className="relative inline-block">
        <HeartIcon className="h-10 w-10 text-white text-opacity-40" />
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          99
        </span>
      </span>
    </nav>
  );
}

export default Header;
