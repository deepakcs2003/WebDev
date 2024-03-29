import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Patient = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({ ...data, [name]: value }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can perform form submission logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <div className='flex flex-col  mb-6' >
                    <p>Welcome !</p>
                    <p className='font-semibold text-2xl'>Sign in to</p>
                    <p>Swastya</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="userId" className="block text-sm font-semibold mb-2">User ID</label>
                    <input
                        id="userId"
                        type="text"
                        placeholder='Enter your ID'
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-6 relative">
                    <label htmlFor="Password" className="block text-sm font-semibold mb-2">Password</label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                        <input
                            id="Password"
                            type={showPassword ? "text" : "password"}
                            placeholder='Enter your Password'
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            minLength="10"
                            className="w-full px-4 py-2 rounded-lg focus:outline-none"
                        />
                        <button type="button" onClick={togglePasswordVisibility} className="p-2 focus:outline-none">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                </div>
                <NavLink to="/forgot-password" className="text-blue-500 text-sm block mb-4">Forgot Password?</NavLink>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline transition duration-300">
                    Login
                </button>
                <p className="text-sm mt-2 text-center">Don't have an Account? <NavLink to='/signin' className="text-blue-500">Register</NavLink></p>
            </form>
        </div>
    );
};

export default Patient;
