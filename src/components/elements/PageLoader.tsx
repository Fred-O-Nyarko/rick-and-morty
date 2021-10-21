import React from 'react';
import Image from './Image';

const PageLoader = () => {
  return (
    <div className="grid place-items-center min-h-screen page__loader">
      <div>
        <Image
          width={180}
          height={180}
          objectFit="contain"
          src="/assets/images/logo.png"
          className="animate-pulse"
        />
        <div className="text-white text-opacity-80 font-bold text-center">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
