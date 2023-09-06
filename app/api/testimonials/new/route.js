import {connect} from '@/Utils/dbconfig'
import testimonials from '@/models/testimonials'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function POST(request){
  try {
    const reqBody = await request.json()
    const {image, description} = reqBody
    const newtestimonials = await testimonials.findOne({ image: image });
    if (newtestimonials) {
     return NextResponse.json({error:"User already exists"}, {status:400})
     
      
  }else {

      const finaltestimonials = new testimonials({
          image, description
      });

      // yaha pe hasing krenge

      const storetestimonialdata = await finaltestimonials.save();
       console.log(storetestimonialdata + "user successfully added");
       return NextResponse.json(storetestimonialdata, {status:201})
     
  }
  } catch (error) {
    return NextResponse.json({ error: error.message},
      {status:400})
  }
}