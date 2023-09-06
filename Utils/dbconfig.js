import mongoose from 'mongoose';

let isConnected = false;

export const connect= async()=>{
  mongoose.set('strictQuery', true);
  if(isConnected){
    console.log('MongoDB is already connected')
  }
  try {
    await mongoose.connect(process.env.MONGO_URI,{
      dbName:'ayush',
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
    isConnected=true
  } catch (error) {
    console.log(error)
  }
}