import { connectMongoDB } from "@/lib/mongodb";
import Userdetails from "@/models/userdetails";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { name,email,mobile,companyIcon,coverPicture,title,companyName,companyEmail,companyDescription,teamMembers,requirement} = await req.json();
    const userdetails = new Userdetails({name,email,mobile,companyIcon,coverPicture,title,companyName,companyEmail,companyDescription, teamMembers, requirement} )
    await userdetails.save()
    return NextResponse.json({userdetails});
  } catch (error) {
    console.log(error);
  }
}