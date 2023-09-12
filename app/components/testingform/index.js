"use client"

import React ,{useState, useEffect} from 'react'
import { useSession } from "next-auth/react";
import { BsCloudUpload } from 'react-icons/bs';
import { parse } from 'postcss';
import Link from 'next/link';
import Image from 'next/image';
export default function testingform() {
  const [details, setDetails] = useState([]);
  const [mobile, setmobile] = useState("");
  const [companyIcon, setcompanyIcon] = useState("");
  const [coverPicture, setcoverPicture]= useState("")
  const [companyName, setcompanyName] = useState("");
  const[title, settitle]= useState("");
  const [companyEmail, setcompanyEmail] = useState("");
  const [companyDescription, setcompanyDescription] = useState("");
  const [teamMembers, setteamMembers] = useState("");
  const [requirement, setrequirement] = useState("");

  const { data: session } = useSession();
  const email= session?.user?.email
  
  const getdetails= async()=>{
    try{
      const res= await fetch("api/userdetails",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
          },
          body:JSON.stringify({email:email})
      })
      const parseData = await res.json();
      

      setDetails(parseData)
      setcompanyName(details.userdetails.companyName)
      setcompanyEmail(details.userdetails.companyEmail)
      setmobile(details.userdetails.mobile)
      settitle(details.userdetails.title)
      setcompanyDescription(details.userdetails.companyDescription)
      setteamMembers(details.userdetails.teamMembers)
      setrequirement(details.userdetails.requirement)
      setcompanyIcon(details.userdetails.companyIcon)
      setcoverPicture(details.userdetails.coverPicture)
    }catch(err){
      console.log(err.message)
    }
  }
  




  return (
   
    <div className='mt-10 ml-96'>
      <div className="my-4 text-2xl font-extrabold text-green-800">Registration Form For Users</div>
      <form className="w-full max-w-lg">
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
              placeholder={session?.user?.email}
            />
          </div>
        </div>

          <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-2">
            <div className="block uppercase  text-gray-700 text-xs font-bold mb-2">
              Mobile
            </div>
            <input
              readOnly
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder={mobile}
            />
          </div>
        </div>

       <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-2">
            <div className="block uppercase  text-gray-700 text-xs font-bold mb-2">
              Company Icon
            </div>
            <input
              readOnly
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder={companyIcon}
            />
          </div>
        </div>



<div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-2">
            <div className="block uppercase  text-gray-700 text-xs font-bold mb-2">
              cover picture
            </div>
            <input
              readOnly
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder={coverPicture}
            />
          </div>
        </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Company Title
      </div>
      <input
       readOnly
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder={title} />
      </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Company Email
      </div>
      <input
       readOnly
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder={companyEmail} />
      </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Company Description
      </div>
      <textarea
       readOnly
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            placeholder={companyDescription}
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
       readOnly
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            placeholder={teamMembers}
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
        <input
       readOnly
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder={requirement} />
        
      </div>
    </div>
  </div>
  <div className='my-4'>
     <Link  href = '/rform' className='bg-green-700 py-2 px-14 rounded-3xl'>Edit</Link>
     <Link  href = 'dashboard' className='bg-green-700 py-2 px-14 rounded-3xl'>Go to dashboard</Link>
   </div>
</form>



    </div>
  )
  
}

