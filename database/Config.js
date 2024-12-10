import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoDB_URL = process.env.MONGODB_URL;


const connectDB = async () => {
  try {
    const connection = await mongoose.connect(mongoDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected successfully");
    return connection;
  } catch (error) {
    console.error("MongoDB connection Error:", error.message);
    throw new Error("Failed to connect to MongoDB"); // Throw the error for the caller to handle
  }
};
export default connectDB;
