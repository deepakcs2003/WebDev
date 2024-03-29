import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import './App.css'; // Assuming App.css is your main CSS file where you define global styles

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userId: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const SignInHandler = (event) => {
    const { name, value } = event.target;
    setSignInData((data) => ({ ...data, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signInData); // You can perform form submission logic here
  };

  return (
    <div className='w-full h-[100%] bg-slate-100 pt-10'>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className='mb-6 '>
            <p>Welcome!</p>
            <p className='font-semibold text-2xl'>Sign in to</p>
            <p>Swastya</p>
          </div>
          <div className='flex flex-row gap-[20px]'>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
              <input type="text" placeholder='Enter Name' value={signInData.firstName} name="firstName" onChange={SignInHandler} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
              <input type="text" placeholder='Enter Last Name' value={signInData.lastName} name="lastName" onChange={SignInHandler} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" placeholder='Enter your Email' value={signInData.email} name="email" onChange={SignInHandler} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">User Id</label>
            <input type="text" placeholder='Create UserId' value={signInData.userId} name="userId" onChange={SignInHandler} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder='Create Password' value={signInData.password} name="password" onChange={SignInHandler} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center px-3 bg-gray-300 hover:bg-gray-400 focus:outline-none">
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input type="password" placeholder='Confirm your Password' value={signInData.confirmPassword} name="confirmPassword" onChange={SignInHandler} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Sign In</button>
        </form>
      </div>
    </div>

  );
};

export default SignIn;
