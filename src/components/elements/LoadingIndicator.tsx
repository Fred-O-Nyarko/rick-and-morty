const LoadingIndicator = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-white shadow-lg my-6"></div>
      <div className="text-center w-full font-bold text-white mt-2">
        Loading
      </div>
    </div>
  );
};

export default LoadingIndicator;
