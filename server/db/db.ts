import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<typeof mongoose | void> => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB is connected to: ${connection.connection.host}`);
    return connection; 
  } catch (error) {
    console.log(error.message);
  }

};

export default connectDB;
