import mongoose, {Schema,models} from "mongoose";
const inuserdetailsSchema = new Schema(
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
    "picture": {
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
    "previousInvestments": {
      "type": "string",
      "required": true
    },
  },
  { timestamps: true }
);

const InUserdetails = models.InUserdetails || mongoose.model("InUserdetails", inuserdetailsSchema);
export default InUserdetails;