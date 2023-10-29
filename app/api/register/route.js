import { connectMongoDB } from "@/lib/mongodb";
import data from "@/models/dataOfAllUsers";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req, res) {

  await connectMongoDB();
  const { name, email, password, role } = await req.json();
    if (!name || !email || !password ||!role) {
      return NextResponse.json({message: "filll the all details"}, {status:422})
      //res.status(422).json({ error: "filll the all details" });
      //console.log("bhai nathi present badhi details");
  };

  try {
    const preuser = await data.findOne({ email: email });
    if (preuser) {
      return NextResponse.json({message:"This email is already exist"}, {status:422})
      //res.status(422).json({ error: "This email is already exist" });
  }
  else {
    const hashedPassword = await bcrypt.hash(password, 10);

    const finaluser = new data({
        name, email, password:hashedPassword, role
    });
    
    
    const storedata = await finaluser.save();
    console.log(storedata + "user successfully added");
    return NextResponse.json({message:storedata},{status:201})
   // res.status(201).json(storedata);
}

    
  } catch (error) {
    return NextResponse.json(
       error.message,
      { status: 500 }
    );
  }
}