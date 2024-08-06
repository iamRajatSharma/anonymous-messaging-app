import mongoose from "mongoose";


type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {}


async function dbConnect():Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database")
        return;
    }


    try{
        const db = await mongoose.connect(process.env.MONGODB_URL || "");
        console.log(db)
        // db.connection[0].read
        console.log("DB Connected successfully")
    }
    catch(error){
        console.log('DB failed')
    }
}


export default dbConnect;