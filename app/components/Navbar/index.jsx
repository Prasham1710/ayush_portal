"use client";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import {  AiOutlineSearch,AiOutlineMenu} from 'react-icons/ai';
import {ImProfile} from "react-icons/im"
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto flex justify-between items-center   bg-[#9291db]">
      <div className="flex items-center">
        <div className=" ">
          <div className=" flex"><Image src="/images/logo.png" width={50} height={50} className="mt-1 mx-2 " />
          
          <div className="mt-4 font-extrabold text-2xl text-[#363585]">AAYUSH</div>
          <div className="mt-2 mx-4">
        <Image src="/images/dpiitlogo.png" width={200} height={200} />
        </div>
          </div>
        <div className="ml-14">tagline</div>
        
        </div>
        
        <div className="ml-6 ">
          <button className="ml-6 hover:underline text-[#363585] font-bold">Dashboard</button>
          <button className="ml-12 hover:underline text-[#363585] font-bold">FAQ</button>
          <button className="ml-12 hover:underline text-[#363585] font-bold">Carts</button>
          <button className="ml-12 hover:underline text-[#363585] font-bold">Contacts</button>
        </div>
      </div>
      <div className="bg-[#7370c6] rounded-full flex items-center px-2 w-[100px] sm:w-[250px] ">
        <AiOutlineSearch size={20} color="dark-blue"/>
        <input
          className="bg-transparent p-1 w-full focus:outline-none"
          type="text"
          placeholder="Search "
        />
      </div>
      <div className="relative inline-block text-center">
        <div>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex  justify-center w-full px-2 py-1 text-sm font-medium text-black bg-primary hover:bg-primary-dark border border-transparent rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <div className="inline-flex space-x-3 bg-[#7370c6] p-2 rounded-lg">
              <RxAvatar size={20} color="dark-blue"  />
              <RxHamburgerMenu size={20} color="dark-blue" />
            </div>
          </button>
        </div>
           <div className="">
           {isOpen && (
          <div className="origin-top-right absolute right-0  w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-2">
              <Link
                href="/testing"
                className="flex gap-4 font-bold px-4  text-right text-sm pb-1 text-gray-700 hover:bg-gray-100"
              >
               <ImProfile  size={20} />
               Profile 
              </Link>
              <div class=" border-t border-gray-300 px-2"></div>

              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white font-bold px-4 py-2 mt-3 rounded-lg "
              >
                Log Out
              </button>
            </div>
          </div>
        )}
           </div>
        
      </div>
      
    </div>
    
  );
};

export default Navbar;