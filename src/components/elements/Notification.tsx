import React, { useState } from 'react';

interface NotificationProps {
  showNotification: boolean;
  message: string;
}
const Notification = ({ showNotification, message }: NotificationProps) => {
  const [flag, setFlag] = useState(showNotification);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      showNotification && setFlag(!flag);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [showNotification]);

  function handleClick() {
    setTimeout(() => {
      setFlag(false);
    }, 300);
  }
  return (
    <div>
      <div
        role="alert"
        className={
          flag
            ? 'cursor-pointer fixed z-50 xl:w-4/12 mx-auto sm:mx-0 sm:w-4/12 md:w-2/5 w-8/12 backdrop backdrop-filter backdrop-blur-sm  bg-white bg-opacity-10 shadow-lg rounded flex sm:flex-row flex-col pr-4 left-0 sm:left-auto dark:bg-gray-800 right-0 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 transition duration-500 ease-in-out translate-show'
            : 'translate-hide'
        }
        onClick={handleClick}
      >
        <div className="sm:px-6 px-4 mt-4 sm:mt-0 flex items-center sm:justify-center sm:border-r  border-gray-300 text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="40"
            height="40"
            fill="currentColor"
          >
            <path
              className="heroicon-ui"
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center pl-4 sm:w-9/12 py-3">
          <p className="text-lg text-white font-semibold pb-1">
            Action Completed
          </p>
          <p className="text-sm text-white text-opacity-80  font-normal pb-2">
            {message}
          </p>
        </div>
      </div>
      <style>
        {`
                .translate-show{
                    transform : translateX(0%);
                }
                .translate-hide{
                    transform : translateX(150%);
                    animation: fadeOut 0.3s;
                    display: none
                }

        
                @keyframes fadeOut {
                  0% {
                     opacity: 1;
                  }
                100% {
                    opacity: 0.2;
                 }
                `}
      </style>
    </div>
  );
};
export default React.memo(Notification);
