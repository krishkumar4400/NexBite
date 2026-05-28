import mongoose from "mongoose";

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB is connected");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}