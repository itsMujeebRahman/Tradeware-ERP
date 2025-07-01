const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
    trim: true,
    inputField: String,
    inputLabel: String,
  },
  supplierAddress1: {
    type: String,
    required: true,
    inputField: String,
    inputLabel: String,
  },
  supplierAddress2: {
    type: String,
    inputField: String,
    inputLabel: String,
  },
  supplierAddress3: {
    type: String,
    inputField: String,
    inputLabel: String,
  },
  supplierPhone: {
    type: String,
    required: true,
    trim: true,
    inputField: String,
    inputLabel: String,
  },
  supplierEmail: {
    type: String,
    trim: true,
    inputField: String,
    inputLabel: String,
  },
  supplierTaxNo: {
    type: String,
    trim: true,
    inputField: String,
    inputLabel: String,
  },
  newInputField: {
    inputField: String,
    inputLabel: String,
  },
});

const SupplierModel = mongoose.model("suppliers", supplierSchema);
module.exports = SupplierModel;
