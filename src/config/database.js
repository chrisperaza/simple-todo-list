// Import dependencies
import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('Connected successfully to database');
  } catch (error) {
    console.log('Error in database connection');
    console.error(error.message);
    process.exit(1);
  }
};
