import React from "react";
import Image from "next/image";

export default function Cards() {
  return (
    <main className="grid grid-flow-col gap-x-14  justify-center  bg-white">
      {/* main Card */}
        <div>
             <div className="relative  h-[28rem] w-[22rem]   space-y-10 rounded-2xl bg-white drop-shadow-xl p-6  transition-transform hover:scale-[1.05] duration-300">
          <div className ="flex items-center justify-center ">
            <div className="  absolute -top-5 drop-shadow-xl ">
              <header className=" h-14 w-64 rounded-xl bg-gradient-to-r py-3 from-[#f6770c] to-[#fa5723] text-center text-xl font-medium  text-white">
                <span className="">| &thinsp; Covacine &thinsp; |</span>
              </header>
            </div>
          </div>

          <div className=" mt-4 flex items-center justify-center ">
            <Image
              class="rounded-full"
              height={60}
              width={60}
              src={''}
              alt="Icon image"
            />
          </div>

          <div>
            <p className="text-center  text-gray-900">
              Mentorship, Advisory, Assistance, Resilience and Growth Portal for
              startups is a one-stop platform for facilitation and guidance
              across all sectors, functions, stages, and geographies.
            </p>
          </div>

          <footer className=" mb-10 flex justify-center">
            <button class="flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-normal text-white hover:bg-[#FF7308]">
              <span>Explore</span>
            </button>
          </footer>
        </div>
      </div>
    </main>
  );
};
