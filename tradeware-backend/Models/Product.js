import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Code: {
    type: String,
    required: true,
    trim: true,
  },
  Barcode: {
    type: String,
    trim: true,
  },
  Category: {
    type: String,
  },
  Unit: {
    type: String,
  },
  Cost: {
    type: Number,
  },
  SellPrice: {
    type: Number,
  },
  MaxSellPrice: {
    type: Number,
  },
  Quantity: {
    type: Number,
  },
  TaxPercentage: {
    type: Number,
  },
  Description: {
    type: String,
  },
});

const ProductModel = mongoose.model("products", ProductSchema);
export default ProductModel;
