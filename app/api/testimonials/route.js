import {connect} from '@/Utils/dbconfig'
import testimonials from '@/models/testimonials'
import { NextRequest, NextResponse } from 'next/server'

connect()


export async function GET(request){
  try{
    const testimonials= await testimonials.find()
    return NextResponse.json(testimonials, {status:201})
  }catch(error){
    return NextResponse.json("error"+error.message)

  }
}