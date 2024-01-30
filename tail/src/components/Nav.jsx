import React from 'react';

const Navpage = () => {
  return (
    <nav className="flex items-center p-5 bg-blue-500 border-t-4 border-blue-800">
      <div className="items-center mr-5">
        <div className="text-white text-2xl font-bold">KALVIAN</div>
      </div>
      <div className="flex flex-1 items-center justify-between ">
        <div className="text-lg flex flex-wrap">
          <a href=" " className="mr-4 text-white hover:text-gray-300">About us</a>
          <a href=" " className="mr-4 text-white hover:text-gray-300">Contacts</a>
          <a href=" " className="mr-4 text-white hover:text-gray-300">Courses</a>
        </div>
        <div>
          <button href=" " className="text-white border-white border rounded p-1 px-5 hover:bg-gray-800">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navpage;
