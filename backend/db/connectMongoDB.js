import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB is connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error with connect MD: ${err.message}`);
    process.exit(1);
  }
};
