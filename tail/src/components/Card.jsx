import React from 'react';

const Cardpage = () => {
  return (
    <div className="p-5 max-w-md mx-auto rounded-lg shadow-md flex items-center space-x-6 bg-white">
      <div>
        <img className="h-12 w-20" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""/>
      </div>
      <div>
        <div className="text-xl font-bold text-blue-700">Kalvium Store</div>
        <p className="text-gray-600">Explore our latest courses!</p>
      </div>
    </div>
  );
};

export default Cardpage;
