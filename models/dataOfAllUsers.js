import mongoose, { Schema, models } from "mongoose";

const dataSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type: String,
      required:true
    }
  },
  { timestamps: true }
);

const data = models.data || mongoose.model("data", dataSchema);
export default data;