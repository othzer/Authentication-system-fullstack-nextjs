import mongoose from "mongoose";
import { env } from "@/helpers/env";

export async function connect(){
    try {
        await mongoose.connect(env.MONGO_URI); //! is in ts, it means i care about the type, nextjs dont worry...not here anymore
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log("Jullay! MongoDB connected successfully");
        })

        connection.on('error', (err)=>{
            console.log("MongoDB connection error, PLease make sure MongoDB is running"+ err);
        })

    } catch (error) {
        console.log("something went wrong");
        console.log(error);
    }
}