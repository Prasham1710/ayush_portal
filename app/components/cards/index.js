import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <main class="grid grid-flow-col gap-x-14 content-center justify-center min-w-full min-h-screen  bg-white">
      {/* main Card */}
        <div>
             <div class="relative  h-[28rem] w-[22rem]   space-y-10 rounded-2xl bg-white drop-shadow-xl p-6  transition-transform hover:scale-[1.05] duration-300">
          <div class="flex items-center justify-center ">
            <div class="  absolute -top-5 drop-shadow-xl ">
              <header class=" h-14 w-64 rounded-xl bg-gradient-to-r py-3 from-[#f6770c] to-[#fa5723] text-center text-xl font-medium  text-white">
                <span class="">| &thinsp; MAARG Mentorship &thinsp; |</span>
              </header>
            </div>
          </div>

          <div class=" mt-4 flex items-center justify-center ">
            <Image
              class="rounded-full"
              height={60}
              width={60}
              src="/OIP.jpg"
              alt="Icon image"
            />
          </div>

          <div>
            <p class="text-center  text-gray-900">
              Mentorship, Advisory, Assistance, Resilience and Growth Portal for
              startups is a one-stop platform for facilitation and guidance
              across all sectors, functions, stages, and geographies.
            </p>
          </div>

          <footer class=" mb-10 flex justify-center">
            <button class="flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-normal text-white hover:bg-[#FF7308]">
              <span>Start &gt;</span>
              <i class="fas fa-hand-peace text-xl"></i>
            </button>
          </footer>
        </div>
      </div>



      




    </main>
  );
};

export default index;
