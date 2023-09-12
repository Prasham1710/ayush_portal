"use client"

import { useRouter } from "next/navigation"
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Number from "../components/Number"
import Cards from "../components/cards";
import { useSession } from "next-auth/react";
export default function dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const role=session?.user?.role
  if (role==="investor") 
  return (
    <div className="bg-gradient-to-r from-[#25244d] via-[#4f4e9c] via-[#6967c2] to-[#25244d]">
      <div>
        indashbaord
        <Navbar />
      </div>
      <div >
        <Slider />
        <Number />
        <Cards/>
      </div>
      <div>
        <Faq/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
  else{
    router.push("/")
  }
}