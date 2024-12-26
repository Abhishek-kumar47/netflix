import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex justify-center items-center p-2 m-2 animate-pulse h-4/6 ">
      <div className="w-3/12 h-40 bg-gray-900 rounded-sm"></div>
      <div className="flex flex-col ml-6 w-9/12">
        <div className="w-3/4 h-6 bg-gray-900 rounded mt-2"></div>
        <div className="w-full h-4 bg-gray-900 rounded mt-2"></div>
        <div className="w-5/6 h-4 bg-gray-900 rounded mt-2"></div>
      </div>
    </div>
  );
};

export default Shimmer;