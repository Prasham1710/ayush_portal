import { useSession } from "next-auth/react";
import { connectMongoDB } from "@/lib/mongodb";
import Userdetails from "@/models/userdetails";
import { NextResponse } from "next/server";



  

export async function POST(req){

 
  try{
   await connectMongoDB()
   // const { data: session } = useSession();
    //const email= session?.user?.email
    const {email}= await req.json()
    const userdetails= await Userdetails.findOne({email})
    return NextResponse.json({userdetails}, {status:201})
  }catch(error){
    return NextResponse.json("error"+error.message)

  }
}