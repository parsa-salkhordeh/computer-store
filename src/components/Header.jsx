"use client"
import Link from "next/link";
import { useState } from "react"
export default function Header() {
    // استیت برای کنترل باز و بسته شدن منوی همبرگر در موبایل
    const[isopen , setopen]=useState(false);

    // استیت برای کنترل باز و بسته شدن dropdown
    const [isdropOpen, setdropOpen] = useState(false); 
  

         

    return(
        <div className="mt-5 relative flex bg-gray-100 p-5">

            <div className="flex">
                <h1 className="text-lg md:text-2xl font-vazir font-bold">
                    لپتاپ <span className="text-blue-400"> خانه 💻</span>
                </h1>
            </div>
            
            

            {/* لیست آیتم های منو */}
            <ul className={`font-vazir flex flex-col md:flex md:mx-auto text-lg md:text-2xl gap-5
                fixed top-0 right-0 h-full w-2/4 bg-blue-200 z-50 transform transition-transform duration-300
                ${isopen ? "translate-x-0" : "translate-x-full"}
                md:static md:flex-row md:translate-x-0 md:w-auto md:bg-transparent
                
            `}>

                 {/* آیتم خانه */}
                <li className="hover:text-blue-500">
                    <i className="fa-solid fa-house"></i>
                    <Link href="">خونه</Link>
                </li>

                 {/* آیتم محصولات با dropdown */}
                <li className="relative group hover:text-blue-500">
                    <div className="cursor-pointer" onClick={()=>setdropOpen(!isdropOpen)}>
                        <i className="fa-solid fa-microchip"></i>
                        <span>محصولات</span>
                        <i className="fa-solid fa-caret-down text-red-500 ml-1"></i>
                    </div>

                    {/* dropdown  برای دسکتاپ (hover کردن)*/}
                    <ul className="hidden lg:block absolute top-5 left-0 mt-2 w-52 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">

                        <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer hover:text-black">
                            <i className="fas fa-gamepad ml-1"></i>
                            <Link href="/products">گیمینگ</Link>
                        </li>

                        <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer hover:text-black">
                           <i className="fas fa-laptop  ml-1"></i>
                            <Link href="">اداری</Link> 
                        </li>
                    </ul>


                        {/* dropdown (موبایل با (کلیک کردن*/}
                    <ul className={`${isdropOpen ? "block" : "hidden"} lg:hidden bg-blue-100 mt-2 rounded-md`}>
                        <li className="px-4 py-2 hover:bg-blue-200 cursor-pointer">
                            <i className="fas fa-gamepad ml-1"></i>
                            <Link href="/products">گیمینگ</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-blue-200 cursor-pointer">
                            <i className="fas fa-laptop  ml-1"></i>
                            <Link href="">اداری</Link>
                        </li>
                    </ul>
                    
                </li>

                 {/* آیتم ارتباط با ما */}
                <li className="hover:text-blue-500">
                    <i className="fa-solid fa-envelope"></i>
                    <Link href="">ارتباط با ما</Link>
                </li>

                {/* آیتم درباره ما */}
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
