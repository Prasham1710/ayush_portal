import { connectMongoDB } from "@/lib/mongodb";
import InUser from "@/models/inuser.js";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const inuser = await InUser.findOne({ email }).select("_id");
    console.log("user: ", inuser);
    return NextResponse.json({ inuser });
  } catch (error) {
    console.log(error);
  }
}