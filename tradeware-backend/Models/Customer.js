import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Address1: {
    type: String,
    required: true,
  },
  Address2: {
    type: String,
  },
  Address3: {
    type: String,
  },
  Phone: {
    type: String,
    required: true,
    trim: true,
  },
  Email: {
    type: String,
    trim: true,
  },
  TaxNo: {
    type: String,
    trim: true,
  },
  Notes: {
    type: String,
  },
});

const CustomerModel = mongoose.model("customers", customerSchema);

export default CustomerModel;
