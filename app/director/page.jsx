"use client"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react";

export default function director() {
  const { data: session } = useSession();
const role=session?.user?.role
 
  const router = useRouter();
  if (role==="user") {
   router.push("/dashboard")
  } if (role==="investor"){
    router.push("/indashboard")
  }
 
}


      
  

