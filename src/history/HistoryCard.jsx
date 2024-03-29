import React from 'react';

const HistoryCard = ({ historyData }) => {
  console.log(historyData);

  return (
    <div className="grid grid-cols-3 gap-10 p-10">
      {historyData.map((data, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-md shadow-md transform transition-transform hover:scale-105" > 
          <div className='flex justify-between items-center mb-2'>
            <h4 className="font-bold text-lg">{data.Name}</h4>
            {
              data.status ? (<div className='w-[24px] h-[24px] bg-green-500'></div>):(<div className='w-[24px] h-[24px] bg-red-500'></div>)
            }
          </div>
          <div>
            <label className="block flex flex-col">
              <h5 className='font-semibold mb-2'>Hospital</h5>
              <p>{data.hospital_name}</p>
              <p>{data.address}</p>
            </label>
            <label className="block">
              <span className="font-semibold">Doctor:</span> {data.doctor}
            </label>
            <p className="text-sm">Start Date: {data.start_date}</p>
            <p className="text-sm">End Date: {data.end_date}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-green-700 focus:outline-none focus:bg-blue-500">More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryCard;
