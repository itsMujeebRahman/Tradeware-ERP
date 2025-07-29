import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Address1: {
    type: String,
  },
  Address2: {
    type: String,
  },
  InvoiceNo: {
    type: String,
  },
  ReferenceNo: {
    type: String,
  },
  Date: {
    type: Date,
    required: true,
  },
  PaymentMethod: {
    type: String,
    required: true,
  },
  Notes: {
    type: String,
  },

  productDetails: [
    {
      FrontId: {
        type: Number,
        required: true,
      },
      Name: {
        type: String,
        required: true,
      },
      Code: {
        type: String,
        required: true,
      },
      Barcode: {
        type: String,
        required: true,
      },
      SellPrice: {
        type: String,
        required: true,
      },
      Quantity: {
        type: String,
        required: true,
      },
      Tax: {
        type: String,
        required: true,
      },
      SubTotal: {
        type: String,
        required: true,
      },
      NetTotal: {
        type: String,
        required: true,
      },
    },
  ],
});

const PurchaseModel = mongoose.model("Purchase", purchaseSchema);

export default PurchaseModel;
