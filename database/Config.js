import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoDB_URL = process.env.MONGODB_URL;
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(mongoDB_URL);
    console.log("MongoDB Connected successfully");
    return connection;
  } catch (error) {
    throw new Error({ message: "MongoDB connection Error" });
  }
};
export default connectDB;
