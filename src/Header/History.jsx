import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Dashboard from '../history/Dashboard';
import HistoryCard from '../history/HistoryCard';
import { HistoryData } from '../History';
import Tag from '../history/Tag';

const History = () => {
  const [search, setSearch] = useState('');
  const [historyData, setHistoryData] = useState(HistoryData);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    // Logic for searching based on search value
    console.log('Searching for:', search);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-orange-200">
      <div className="flex fixed top-[55px] w-full left-0 right-0 p-2 z-50 items-center justify-around mb-4 bg-blue-50">
        <h6 className="text-lg font-semibold">History</h6>
        <div className='flex gap-5'>
          <div className="flex items-center bg-white gap-5 rounded-lg shadow-sm overflow-hidden ml-[100px]">
            <FaSearch className="text-gray-400 m-3" />
            <input
              type="text"
              value={search}
              name="search"
              placeholder="Search"
              className="py-2 px-4 outline-none text-gray-800 flex-1 bg-white w-[400px]"
              onChange={handleChange}
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-[50px]">
        <Tag />
        <HistoryCard historyData={historyData} />
        <Dashboard />
      </div>
    </div>
  );
};

export default History;
