import mongoose from "mongoose";

const UnitSchema = mongoose.Schema({
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
  Symbol: {
    type: String,
    required: true,
  },
});

const UnitModel = mongoose.Model("unit", UnitSchema);
export default UnitModel;
