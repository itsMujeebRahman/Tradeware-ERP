const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    trim: true,
  },
  customerAddress1: {
    type: String,
    required: true,
  },
  customerAddress2: {
    type: String,
  },
  customerAddress3: {
    type: String,
  },
  customerPhone: {
    type: String,
    required: true,
    trim: true,
  },
  customerEmail: {
    type: String,
    trim: true,
  },
  customerTaxNo: {
    type: String,
    trim: true,
  },
});

const CustomerModel = mongoose.model("customers", customerSchema);

module.exports = CustomerModel;
