import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONFIG);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Error Connecting to Database");
    process.exit(1);
  }
};

export default connectDB
