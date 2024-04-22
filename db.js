import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

const URI = process.env.MONGOB_URI;

const connectdb = async () =>{

    try{
        await mongoose.connect(URI);
        console.log("connection is successful");
    }catch(error){
            console.log(error)
            console.error("Database connection failed");
            process.exit(0);
    }

};

export default connectdb;