import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoDB_URL = process.env.mongoDB_URL;

const connectDB = async () => {
  if (!mongoDB_URL) {
    console.error("MongoDB connection string is missing.");
    throw new Error("MongoDB URL is not defined in .env");
  }

  try {
    const connection = await mongoose.connect(mongoDB_URL);
    console.log("MongoDB Connected successfully");
    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default connectDB;
