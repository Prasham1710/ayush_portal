"use client"
import React, {useState,useEffect, Fragment} from "react";
import { useRouter } from "next/navigation"
import { BsCloudUpload } from 'react-icons/bs';
import { useSession } from "next-auth/react";
import Link from 'next/link'




export default function UserDetails() {
  const router = useRouter();
  const { data: session } = useSession();
  const name=session?.user?.name
  const email= session?.user?.email
  const [mobile, setmobile] = useState("");
  const [companyIcon, setcompanyIcon] = useState("");
  const [coverPicture, setcoverPicture]= useState("")
  const [companyName, setcompanyName] = useState("");
  const[title, settitle]= useState("");
  const [companyEmail, setcompanyEmail] = useState("");
  const [companyDescription, setcompanyDescription] = useState("");
  const [teamMembers, setteamMembers] = useState("");
  const [requirement, setrequirement] = useState("");
  

  const handleSubmit = async(e) => {
    e.preventDefault();
     
     try {
         const res = await fetch('api/userdetails/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
        body: JSON.stringify({
          name,email,mobile ,companyIcon ,coverPicture ,companyName,title,companyEmail,companyDescription,teamMembers,requirement
        }),
        }); if (res.ok) {
        const form = e.target;
        form.reset();
        
        }
        else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
    };



  return (
    <div className='mt-10 ml-96'>
      <div className="my-4 text-2xl font-extrabold text-green-800">Registration Form For Users</div>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="block uppercase text-gray-700 text-xs font-bold mb-2">
              Name
            </div>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              readOnly
              placeholder={session?.user?.name}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </div>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              readOnly
              placeholder={session?.user?.email
            }
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Mobile
      </div>
      <input
      onChange={(e) => setmobile(e.target.value)}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Enter Your Company name" />
      </div>
  </div>

        <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        company icon
      </div>
      <input
      onChange={(e) => setcompanyIcon(e.target.value)}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Enter Your Company name" />
      </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        cover picture
      </div>
      <input
      onChange={(e) => setcoverPicture(e.target.value)}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Enter Your Company name" />
      </div>
  </div>



  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Company Name
      </div>
      <input
      onChange={(e) => setcompanyName(e.target.value)}

       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Enter Your Company name" />
      </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Company Title
      </div>
      <input
      onChange={(e) => settitle(e.target.value)}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Enter Your Email-Id" />
      </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Company Email
      </div>
      <input
      onChange={(e) => setcompanyEmail(e.target.value)}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Enter Your Email-Id" />
      </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Company Description
      </div>
      <textarea
      onChange={(e) => setcompanyDescription(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            placeholder="Company Description"
            cols="40"
            rows="4"
          ></textarea>
      </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Team Members
      </div>
      <textarea
      onChange={(e) => setteamMembers(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            placeholder="Team Member Name"
            cols="40"
            rows="4"
          ></textarea>
      </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-2">
    
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Requirement
      </div>
      <div className="relative">
        <select 
        onChange={(e) => setrequirement(e.target.value)}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Incumator</option>
          <option>Accelator</option>
          <option>Government</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <div className='my-4'>
     <button onClick={()=> router.push("/dashboard")} className='bg-green-700 py-2 px-14 rounded-3xl'>Submit</button>
   </div>
</form>



    </div>
  )
}