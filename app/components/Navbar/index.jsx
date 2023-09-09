"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import {  AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="mx-auto flex justify-between items-center p-4 ">
        <div className='flex items-center'>
        
        <div className='ml-6 '>
        <button className='ml-6 hover:underline'>Dashboard</button>
        <button className='ml-12 hover:underline'>FAQ</button>
        <button className='ml-12 hover:underline'>Carts</button>
        <button className='ml-12 hover:underline'>Contacts</button>
        </div>
        </div>
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[100px] sm:w-[250px] '>
        <AiOutlineSearch size={20} />
        <input
          className='bg-transparent p-1 w-full focus:outline-none'
          type='text'
          placeholder='Search '
        />
      </div>
      <div className="relative inline-block text-center">
        <div>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex  justify-center w-full px-2 py-1 text-sm font-medium text-black bg-primary hover:bg-primary-dark border border-transparent rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <div className="inline-flex space-x-3 bg-gray-200 p-2 rounded-lg">
              <RxAvatar size={20}/>
              <RxHamburgerMenu size={20}/>
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="origin-top-right absolute right-0  w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
           
            <div className="py-2">
              <a
                href="#"
                className="block px-4 py-1 text-right text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <div class=" border-t border-gray-300 px-2"></div>

              <a
                href="#"
                className="block px-4 py-1 text-right text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </a>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;