import mongoose  from "mongoose";

const connectDb = async () => {
     
   mongoose.connection.on('connected', () => {
    console.log("Connection Established")
   })

    await mongoose.connect(`${process.env.MONGO_URI}/spotify`);

}

export default connectDb;