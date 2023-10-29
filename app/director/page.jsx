"use client"

import { useSession } from "next-auth/react";
import {useRouter} from "next/navigation"
export default function director() {
  const router = useRouter();
  const { data: session } = useSession();
  if(!session){
    router.push("/")
  }
const role=session?.user?.role
 

  if (role==="user") {
   router.push("/dashboard")
  } if (role==="investor"){
    router.push("/indashboard")
  }
 
}


      
  

