const Loading: React.FC = () => {
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="flex flex-col justify-center items-center bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg">
        <h1 className="mb-4 font-semibold text-white text-4xl md:text-6xl animate-pulse">
          Loading...
        </h1>
        <p className="text-gray-300 text-lg">
          Please wait, we&apos;re getting next set of movies ready for you.
        </p>
      </div>
    </div>
  );
};

export default Loading;
