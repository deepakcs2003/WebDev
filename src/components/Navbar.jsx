import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center fixed top-0 left-0 right-0 bg-blue-500 p-2 text-white z-50'>
        <NavLink to='/' className='ml-[100px]'>
                <p className='text-lg font-bold'>Logo</p>
         </NavLink>
        <div className='flex items-center ml-10'>
            <NavLink to='/' className='mr-4'>
                <p>Home</p>
            </NavLink>
            <NavLink to='/about' className='mr-4'>
                <p>About</p> 
            </NavLink>
            <NavLink to='/suggestion' className='mr-4'>
                <p>Suggestion</p>
            </NavLink>
            <NavLink to='/blog' className='mr-4'>
                <p>Blog</p>
            </NavLink>
            <NavLink to='/personal' className='mr-4'>
                <p>Personal Details</p>
            </NavLink>
        </div>
        <div className='flex items-center'>
            <NavLink to='/history' className='mr-4'>
                <button className='bg-green-500 mr-5 w-60  text-black px-4 py-2 rounded-md hover:bg-green-200 transition duration-300 shadow-md'>
                    History
                </button>
            </NavLink>
            <NavLink to='/login' className='mr-4'>
                <button className='bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200 transition duration-300 shadow-md'>
                    Login
                </button>
            </NavLink>
            <NavLink to='/signin' className='mr-4'>
                <button className='bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200 transition duration-300 shadow-md'>
                    Sign in
                </button>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar
