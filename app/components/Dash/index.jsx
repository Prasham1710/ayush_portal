import React from 'react'
import Image from 'next/image'


const index = () => {
  return (
    <div className=' w-full h-screen bg-[#2d1d61] mix-blend-overlay relative'>
      
        <div className='  bg-[#bebdf0]  flex justify-between p-3'>
          <div className='font-extrabold text-2xl text-[#25244d] '>AAYUSH</div>
        <div className=' text-[#25244d]'><button className='hover:text-[#7574ab] mx-2  font-bold '>Login</button>|
          <button className='hover:text-[#7574ab] mx-2 text-[#25244d] font-bold'>Register</button></div>
          
        </div>
        <div className='pt-6 text-center font-extrabold text-5xl text-[#bebdf0]   
'>
  <span className='relative before:absolute before:inset-0 before:bg-[#2d1d61]
before:animate-typewriter'>Aayush -  HealthCare Organisation</span></div>
      <div className='flex gap-60'>
    <div className='mt-28 ml-32 animate-bounce'>

    
    <Image
                    src="/images/health.jpg"
                    alt=""
                    height={600}
                    width={530}
                     />
    </div>
    <div className='flex flex-col gap-4'>
    <div className='bg-[#f46894] w-96 h-40 mt-16 text-center rounded-lg text-[#482232]'>
      <button className='mt-14 bg-[#f2ecf3] p-3 rounded-lg font-semibold hover:bg-[#7fbffa] '>As an User</button>
    </div>
    <div className='bg-[#f46894] w-96 h-40  text-center rounded-lg'>
      <button className='mt-14 bg-[#f2ecf3] p-3 rounded-lg font-semibold hover:bg-[#7fbffa]'>As an Investor</button>
    </div>
    </div>
    
      </div>
      <div className='mx-14 mb-4 text-xl font-bold text-[#c3c2d3]'><span className='relative before:absolute before:inset-0 before:bg-[#2d1d61]
before:animate-typewriter'>Platform that helps you showcase your talent and get mentorship and resources and information in a  collaborative environment .</span>
<h1 className=' relative before:absolute before:inset-0 before:bg-[#2d1d61]
before:animate-typewriter'> Provides you with facilities like Global Networking .</h1>
</div>  
    </div>
  )
}

export default index