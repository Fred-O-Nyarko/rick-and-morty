import React, { useState } from 'react';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div
      onClick={scrollTop}
      style={{ height: 60, display: showScroll ? 'flex' : 'none' }}
      className="fixed w-full bottom-5 items-center h-5 justify-end z-50 cursor-pointer scroll-top hover:opacity-100  opacity-80 transition-opacity duration-500 fade__in"
    >
      <button className="text-6xl -mt-24 mr-8 text-white px-4 w-auto h-10 rounded-full shadow-lg mouse  transition ease-in duration-100 focus:outline-none">
        ⬆️
      </button>
      <style>
        {`
          .fade__in{
            animation: fadeIn 0.3s;
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
          100% {
            opacity: 0.5;
          }
            }
        `}
      </style>
    </div>
  );
};

export default ScrollArrow;
