const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: ".env.development" });
const MONGO_URL = process.env.MONGO_URL;

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(MoNg);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};

module.exports = connectDB;
