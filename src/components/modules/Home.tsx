import React from 'react';
import { useRouter } from 'next/dist/client/router';

function Home() {
  const router = useRouter();
  const data = [
    {
      image: '/assets/images/episode.jpeg',
      route: '/episodes',
      title: 'Episodes',
    },
    {
      image: '/assets/images/characters.jpeg',
      route: '/characters',
      title: 'Characters',
    },
    {
      image: '/assets/images/location.jpeg',
      route: '/locations',
      title: 'Locations',
    },
  ];
  return (
    <div className="container mx-auto sm:max-w-none px-4 h-full flex items-center justify-center flex-1 md:mt-20 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {data.map((detail, idx) => (
          <div
            className="max-w-full rounded overflow-hidden shadow-lg z-20 max-h-full h-48 md:h-96 relative"
            style={{
              background: `url(${detail.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
            key={idx}
          >
            <div className="h-full w-full absolute bg-black hover:bg-opacity-0 bg-opacity-60 hover:border-4 border-white border-opacity-80 rounded z-1 transition-all"></div>
            <div className="px-6 py-4 h-full flex flex-col justify-center items-center ">
              <div
                className="svg-wrapper hover:cursor-pointer"
                onClick={() => router.push(detail.route)}
              >
                <svg height="40" width="150">
                  <text
                    x="50%"
                    y="50%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    fill="#fff"
                    fontSize="20"
                    className="font-bold drop-shadow"
                  >
                    {detail.title}
                  </text>
                  <rect id="shape" height="40" width="150" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
