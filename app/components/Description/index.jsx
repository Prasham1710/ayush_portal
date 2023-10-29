import Image from 'next/image'
import React from 'react'
import {BsFillChatLeftHeartFill} from 'react-icons/bs'


const index = () => {
  return (
    <div className="w-full h-full my-4 bg-[#2d1d61] ">
      <div className="w-full relative h-96">
        <Image
          src="/images/health.jpg"
          fill={true}
          alt=""
          className="object-cover "
        />
        <div className="absolute bottom-5 left-5 p-2 bg-[#8762e0] text-white">
          <h1 className="text-lg">Digital Storytellers</h1>
          <h2 className="text-md">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className="flex gap-24">
        <div className="flex-1 flex flex-col mt-12 gap-[30px] ml-6 text-white">
          <h1 className="font-bold text-4xl">Who Are We?</h1>
          <p className="font-absolute text-lg text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
          <div className='bg-[#8762e0] rounded-lg text-center font-bold pb-10'>
              <h1>CEO</h1>
              <h2>Name</h2>
              </div>
        </div>
        <div className="flex-1 flex flex-col mt-12 gap-[30px] mr-8 text-white">
          <h1 className="font-bold text-4xl">What We Do?</h1>
          <p className="font-absolute text-lg text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <button  className="text-white bg-[#8762e0] hover:animate-pulse p-2 rounded-xl mb-2"  ><a href="/contact" >Contact</a></button>
          <button  className="text-white bg-[#8762e0] p-2 rounded-xl mb-20 flex justify-center gap-4 hover:animate-pulse"  >
              <BsFillChatLeftHeartFill size={20} className="pt-1 "/>
              Show Interest</button>
        </div>
      </div>
    </div>
  );
};

export default index;