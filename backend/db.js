import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        // Process exited with error
        process.exit(1);
    }
}