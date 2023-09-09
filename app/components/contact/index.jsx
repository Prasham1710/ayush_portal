import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className="bg-[#2d1d61] w-screen h-screen">
      <h1 className="text-[#a58fdf] text-5xl mb-16 text-center pt-6 font-bold">Let us Keep in Touch</h1>
      <div className="flex items-center gap-20 ">
        <div className="flex-1  h-[400px] relative ml-20">
          <Image
            src="/images/contact.png"
            alt=""
            fill={true}
            className="object-contain animate-bounce mt-16"
          />
        </div>
        <form className="flex-1 flex flex-col gap-2 mr-32 ">
          <input type="text" placeholder="name" className="p-3 bg-transparent border-4   border-[#a58fdf] text-[#a58fdf] placeholder-[#a58fdf] font-bold text-xl my-3" />
          <input type="text" placeholder="email" className="p-3 bg-transparent border-4   border-[#a58fdf] text-[#a58fdf] placeholder-[#a58fdf] font-bold text-xl my-3" />
          <textarea
            className="p-3 bg-transparent border-4   border-[#a58fdf] text-[#a58fdf] placeholder-[#a58fdf] font-bold text-xl my-3"
            placeholder="message"
            cols="20"
            rows="5"
          ></textarea>
          <button  className="text-white bg-[#a63fc6] hover:bg-[#af60d6] text-xl px-4 py-2 font-bold rounded-lg my-3" ><a href="#">Send</a></button>
        </form>
      </div>
    </div>
  );
};

export default Contact;