import React from 'react'

const Loadingdots = () => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-2 mx-auto">
        <div className="w-4 h-4 rounded-full animate-pulse bg-rose-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-rose-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-rose-600"></div>
      </div>
    </div>
  );
}

export default Loadingdots