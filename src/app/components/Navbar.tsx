import React from 'react';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {
  return (
     <div className="shadow-md">
    <div className="container mx-auto grid grid-cols-3 items-center p-5">
        {/* Left: Navigation Links */}
    
      <ul className=" hidden md:flex space-x-5 text-white mt-10">
          <li className="hover:text-yellow-400 cursor-pointer">Home
    <span className=''>.</span></li>
          <li className="hover:text-yellow-400 cursor-pointer">Menu</li>
  <li className="hover:text-yellow-400 cursor-pointer">Blog</li>
      <li className="hover:text-yellow-400 cursor-pointer">Pages</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Shop</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>

        {/* Center: Logo */}
        <h1 className= "text-yellow-400 font-bold text-lg md:text-xl lg:text-2xl text-center ">
          Food <span className="text-white">Luck</span>
        </h1>

        {/* Right: Search Input and Bag Icon */}
        <div className="flex justify-center md:justify-end items-center space-x-4 md:mt-14">
         <div className=' relative w-full md:w-[250px]'>
         <input
            type="text"
            color='white'
            placeholder="Search..."
            className=" w-full border-2 border-yellow-400 rounded-full pl-5 pr-10 py-2 md:py-4 bg-black text-white outline-none text-sm"
            />
            <div className='absolute right-5 top-1/2 transform -translate-y-1/2 text-yellow-400'>
            <FaSearch />
            </div>
         </div>
          <button className="text-yellow-400">
            <FaShoppingBag/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
