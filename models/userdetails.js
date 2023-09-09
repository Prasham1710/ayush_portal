import mongoose, { Schema, models } from "mongoose";

const userdetailsSchema = new Schema(
  {
    "name": {
      "type": "string",
      "required": true
    },
    "email": {
      "type": "string",
      "required": true
    },
    "mobile": {
      "type": "string",
      "required": true
    },
    "companyIcon": {
      "type": "string",
      "required": true
    },
    "coverPicture": {
      "type": "string",
      "required": true
    },
    "title": {
      "type": "string",
      "required": true
    },
    "companyName": {
      "type": "string",
      "required": true
    },
    "companyEmail": {
      "type": "string",
      "required": true
    },
    "companyDescription": {
      "type": "string",
      "required": true
    },
    "teamMembers": {
      "type": "string",
      "required": true
    },
    "requirement": {
      "type": "string",
      "required": true
    }
  },
  { timestamps: true }
);

const Userdetails = models.Userdetails || mongoose.model("Userdetails", userdetailsSchema);
export default Userdetails;