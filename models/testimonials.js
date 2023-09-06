import mongoose from 'mongoose';


const  TestimonilasSchema = new mongoose.Schema({
  image: {
      type: String,
      required: true,
  },
  description: {
      type: String,
      required: true,
      unique: true,   
  }
  
});

const testimonials = mongoose.models.testimonials || mongoose.model("testimonials", TestimonilasSchema);
module.exports = testimonials;