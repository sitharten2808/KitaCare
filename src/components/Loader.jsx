
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
          🌟
        </div>
      </div>
      <p className="ml-4 text-xl font-bold">Loading KitaCare...</p>
    </div>
  );
};

export default Loader;
