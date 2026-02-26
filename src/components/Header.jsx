"use client"
import Link from "next/link";
import { useState } from "react"
export default function Header() {
    // استیت برای کنترل باز و بسته شدن منوی همبرگر در موبایل
    const[isopen , setopen]=useState(false);

    return(
        <div className="mt-5 relative flex bg-gray-100 p-5">

            <div className="flex">
                <h1 className="text-lg md:text-2xl font-vazir font-bold">
                    لپتاپ <span className="text-blue-400"> خانه 💻</span>
                </h1>
            </div>
            
            

            <ul className={`font-vazir flex flex-col md:flex md:mx-auto text-lg md:text-2xl gap-5
                fixed top-0 right-0 h-full w-2/4 bg-blue-200 z-50 transform transition-transform duration-300
                ${isopen ? "translate-x-0" : "translate-x-full"}
                md:static md:flex-row md:translate-x-0 md:w-auto md:bg-transparent
                
            `}>

                <li className="hover:text-blue-500">
                    <i className="fa-solid fa-house"></i>
                    <Link href="">خونه</Link>
                </li>
                 

                 <li className="hover:text-blue-500">
                    <i className="fa-solid fa-computer"></i>
                    <Link href="">محصولات</Link>
                </li>

                <li className="hover:text-blue-500">
                    <i className="fa-solid fa-envelope"></i>
                    <Link href="">ارتباط با ما</Link>
                </li>

                <li className="hover:text-blue-500">
                    <i className="fa-solid fa-circle-info"></i>
                    <Link href="">درباره ما</Link>
                </li>
            </ul>
            
            {/* برای باز کردن منوی موبایل */}
            <div onClick={()=> setopen(!isopen)} className="p-2 absolute left-10 top-3 md:hidden cursor-pointer text-end">
                <i className={`fa-solid ${isopen ? "fa-xmark" : "fa-bars"} text-3xl`}></i>
            </div>
        </div>
  )
}
