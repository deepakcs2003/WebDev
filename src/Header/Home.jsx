import React from 'react';
import { HomeData } from '../Home';

const Home = () => {
  const Datas = HomeData;
  return (
    <div className="container mx-auto p-6 grid grid-cols-2 gap-4">
      {
        Datas.map((Data, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-4 flex">
            <img src={Data.image} alt="data image" className="mt-4 rounded-lg " />
            <div className="ml-4">
              <p className="text-lg font-semibold text-blue-600">{Data.title}</p>
              <p className="mt-2 text-gray-700 overflow-hidden" style={{ textOverflow: 'ellipsis' }}>
                {Data.description.length > 60 ? `${Data.description.substring(0, 400)}...` : Data.description}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Home;
