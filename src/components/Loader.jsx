
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-kitacare-blue animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
          🌟
        </div>
      </div>
    </div>
  );
};

export default Loader;
