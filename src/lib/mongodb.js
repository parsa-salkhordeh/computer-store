import mongoose from "mongoose";

const uri = process.env.MONGODB_URI

if (!uri) throw new Error("دیتابیس با خطا مواجه شد");

let isConnected=false

export async function connectedToDb() {

    if(isConnected){
         console.log("در حال استفاده از اتصال قبلی دیتابیس");

         return; 
    }

    try{
        await mongoose.connect(uri , {dbname: "store"})
        isConnected=true

    }catch(error){
        console.log(error)
        process.exit(1)
    }
}