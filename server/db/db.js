import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    console.log('MONGO_URI', process.env.MONGO_URI);
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB is connected to: ${connection.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
