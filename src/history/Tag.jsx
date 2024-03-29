import React from 'react';

const Tag = () => {
  return (
    <div className="flex space-x-2 ml-10">
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
        Ongoing
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
        Completed
      </button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg">
        Date
      </button>
      <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">
        Disease
      </button>
      <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
        All
      </button>
    </div>
  );
};

export default Tag;
