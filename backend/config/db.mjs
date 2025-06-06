import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connect: ${conn.connection.host}`);
    } catch (error){
        console.log(`error: ${error.error}`);
        process.exit(1);
    }
};