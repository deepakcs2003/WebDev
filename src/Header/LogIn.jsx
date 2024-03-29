import React from 'react';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className='flex flex-row justify-around items-center h-[100vh] bg-green-50 text-white text-2xl'>
      <NavLink to="/login/patient">
        <button className="bg-blue-300 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded text-lg w-[200px]">
          Patient Login
        </button>
      </NavLink>
      <NavLink to="/login/hospital">
        <button className="bg-blue-300 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded text-lg w-[200px]">
          Hospital Login
        </button>
      </NavLink>
      <NavLink to="/login/patient">
        <button className="bg-blue-300 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded text-lg w-[200px]">
          Admin Login
        </button>
      </NavLink>
    </div>
  );
};

export default LogIn;
