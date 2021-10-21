import React from 'react';
import { useRouter } from 'next/dist/client/router';

function Episodes() {
  const router = useRouter();
  return (
    <div className="container mx-auto sm:max-w-none px-4 min-h-screen flex items-center justify-center flex-1">
      Episodes Here
    </div>
  );
}

export default Episodes;
