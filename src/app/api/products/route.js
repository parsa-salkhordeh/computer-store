import { connectedToDb } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        // اتصال به دیتابیس
        await connectedToDb()

        const products = await Product.find({})
        return NextResponse.json(products , {status:200})

    }catch(error){
        return NextResponse.json({ message: "مشکل در دریافت محصولات", error: error.message }, { status: 500 })    
    }
}