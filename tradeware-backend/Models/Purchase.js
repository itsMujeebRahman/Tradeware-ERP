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
    type: String,
    required: true,
  },
  PaymentMethod: {
    type: String,
    required: true,
  },
  Notes: {
    type: String,
  },
  TotalQty: {
    type: Number,
  },
  GrandSubTotal: {
    type: Number,
  },
  TotalTax: {
    type: Number,
  },
  GrandNetTotal: {
    type: Number,
  },
  isCancelled: {
    type: Boolean,
    default: false,
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
        type: Number,
        required: true,
      },
      Quantity: {
        type: Number,
        required: true,
      },
      Tax: {
        type: Number,
        required: true,
      },
      SubTotal: {
        type: Number,
        required: true,
      },
      NetTotal: {
        type: Number,
        required: true,
      },
    },
  ],
});

const PurchaseModel = mongoose.model("Purchase", purchaseSchema);

export default PurchaseModel;
