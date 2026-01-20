import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!); //! is in ts, it means i care about the type, u dont worry
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log("Jullay! MongoDB connected successfully");
        })

        connection.on('error', (err)=>{
            console.log("MongoDB connection error, PLease make sure MongoDB is running"+ err);
        })

        process.exit();

    } catch (error) {
        console.log("something went wrong");
        console.log(error);
    }
}