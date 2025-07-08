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

const UnitModel = mongoose.model("units", UnitSchema);
export default UnitModel;
