import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <main class="grid grid-flow-col gap-x-14 content-center justify-center min-w-full min-h-screen  bg-white">
      {/* main Card */}
      <div>
        <div class="relative  h-[24rem] w-[19rem]  rounded-2xl bg-[#001e4a]  p-4 shadow-2xl shadow-inner  shadow-black transition-transform hover:scale-[1.05] duration-300">

        <div class=" flex items-center justify-center ">
            <Image
              class="rounded-xl"
              height={450}
              width={600}
              src='/startup.jpg'
              alt="startup"
            />
          </div>
          

          <div>
                <div class = ' mt-4 flex justify-center text-base text-white font-semibold'>Start-ups<br/></div> 
            <p class=" mt-2 font-light text-sm text-white">
            Stay on top of all policy and regulatory updates that are important for your next startup move.
            </p>
          </div>

          <footer class="mb-10 flex justify-center ">
            <button class=" shadow- mt-6 flex justify-center items-baseline  gap-2 rounded-3xl border-white bg-[#FE5401] px-2 py-1 text-xl font-light text-white hover:bg-[#FF7308]">
              <span>Start --&gt;</span>
              <i class="fas fa-hand-peace text-xl"></i>
            </button>
            <div class="absolute rounded-2xl inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-black"></div>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default index;
