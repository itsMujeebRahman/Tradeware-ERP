import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
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
  Description: {
    type: String,
  },
});

const CategoryModel = mongoose.model("categories", CategorySchema);

export default CategoryModel;
