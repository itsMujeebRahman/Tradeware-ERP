const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/TRADE_WARE");
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Error Connecting to Database");
    process.exit(1);
  }
};

module.exports = connectDB;
