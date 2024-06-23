import mongoose from "mongoose";
// import dotenv from "dotenv"
// dotenv.config()

export const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to database ")
        // console.log(connectionInstance)
    } catch (error) {
        console.error(error, "ERRor in DB connection")
        process.exit(1);
    }
}