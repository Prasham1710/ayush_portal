import React from 'react'
import Image from 'next/image'


const index = () => {
  return (
    <div className=' w-full h-screen bg-[#A6D0DD] mix-blend-overlay relative'>
      
        <div className='  bg-[#FF6969]  flex justify-between p-3'>
          <div className='font-extrabold text-2xl text-[#14C38E] '>AAYUSH</div>
        <div className=' text-[#FFF9DE]'><button className='hover:text-[#DFFFD8] mx-2  font-bold '>Login</button>|
          <button className='hover:text-[#DFFFD8] mx-2 text-[#FFF9DE] font-bold'>Register</button></div>
          
        </div>
        <div className='pt-8 text-center font-extrabold text-5xl text-[#96C291]   
'>
  <span className='relative before:absolute before:inset-0 before:bg-[#A6D0DD]
before:animate-typewriter'>Aayush -  HealthCare Organisation</span></div>
      <div className='flex gap-40'>
    <div className='mt-28 ml-20 animate-bounce'>

    
    <Image
                    src="/images/health.jpg"
                    alt=""
                    height={600}
                    width={600}
                     />
    </div>
    <div className='flex flex-col gap-4'>
    <div className='bg-[#FFF9DE] w-96 h-40 mt-16 text-center rounded-lg'>
      <button className='mt-14 bg-[#E8A0BF] p-3 rounded-lg font-semibold hover:bg-[#BA90C6]'>AS an User</button>
    </div>
    <div className='bg-[#FFF9DE] w-96 h-40  text-center rounded-lg'>
      <button className='mt-14 bg-[#E8A0BF] p-3 rounded-lg font-semibold hover:bg-[#BA90C6]'>AS an User</button>
    </div>
    </div>
    
      </div>
      <div className='mx-14 my-4 text-xl font-bold text-[#A2C579]'><span className='relative before:absolute before:inset-0 before:bg-[#A6D0DD]
before:animate-typewriter'>Platform that helps you showcase your talent and get mentorship and resources and information in a  collaborative environment .</span>
<h1 className=' relative before:absolute before:inset-0 before:bg-[#A6D0DD]
before:animate-typewriter'> Provides you with facilities like Global Networking .</h1>
</div>  
    </div>
  )
}

export default index