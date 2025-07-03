const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
    trim: true,
  },
  supplierAddress1: {
    type: String,
    required: true,
  },
  supplierAddress2: {
    type: String,
  },
  supplierAddress3: {
    type: String,
  },
  supplierPhone: {
    type: String,
    required: true,
    trim: true,
  },
  supplierEmail: {
    type: String,
    trim: true,
  },
  supplierTaxNo: {
    type: String,
    trim: true,
  },
  supplierNotes: {
    type: String,
  },
});

const SupplierModel = mongoose.model("suppliers", supplierSchema);
module.exports = SupplierModel;
