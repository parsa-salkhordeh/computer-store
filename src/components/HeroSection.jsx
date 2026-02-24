
import Image from "next/image";



export default function HeroSection(){
    return(
        <div className=" relative w-full px-2">
            
            {/* محتوای اصلی */}
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 py-16 px-5">
            
            {/* تصویر لپ‌تاپ */}
            <Image 
                src="/Herosection/HeroImage.png" 
                alt="laptop"
                width={400}
                height={300}
                className="w-full md:w-1/2 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />

                {/* متن */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-5">
                    فروشگاه <span className="text-blue-400">لپتاپ خانه</span>
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed">
                    جایی برای انتخاب بهترین لپتاپ‌های روز دنیا.  
                    انتخابی هوشمندانه با ارسال سریع و پشتیبانی مطمئن.  
                    در اینجا می‌توانید از بین جدیدترین برندها و مدل‌های معتبر جهانی، لپتاپی متناسب با نیاز و بودجه‌تان پیدا کنید.  
                    با <span className="font-bold">لپتاپ خانه</span> تجربه‌ای متفاوت از خرید آنلاین را با قیمت مناسب، ضمانت اصالت کالا و خدمات پس از فروش داشته باشید.  
                    ما در کنار شما هستیم تا با خیال راحت خرید کنید و مطمئن باشید که انتخابتان بهترین خواهد بود.
                    </p>
                </div>

            </div>
        </div>
    )
}