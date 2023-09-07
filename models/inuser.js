import mongoose, { Schema, models } from "mongoose";

const inuserSchema = new Schema(
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
  },
  { timestamps: true }
);

const InUser = models.InUser || mongoose.model("InUser", inuserSchema);
export default InUser;