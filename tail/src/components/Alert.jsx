import React from "react";

const AlertWindow = () => {
  return (
    <div className="p-7 px-16">
      <button className="text-white p-2 bg-green-500 text-sm font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700">BUTTON ONE</button>

      <div className="bg-yellow-200 border border-yellow-500 rounded-md text-yellow-700 px-6 py-4 my-5">
        <b className="text-lg font-bold text-red-600">Alert!</b>
        <p className="text-gray-800 mt-2">This is awesome!</p>
      </div>
    </div>
  );
};

export default AlertWindow;
