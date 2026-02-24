import  {BrandImage}  from "@/BrandImage/BrandImage";
import Image from "next/image";

export default function TopBrand() {
  return (
    <div className="flex justify-center gap-10 mt-4 flex-wrap my-20">
        {
            BrandImage.map(
                (item)=>(
                    <div key={item.id} className="hover:bg-blue-300 bg-blue-300 rounded-full p-5 my-5">
                        <Image
                        src={item.image} 
                        alt="laptop"
                        width={100}
                        height={100}
                        className="object-contain mx-auto p-2"/>
                        

                        <h2 className="text-center">{item.title}</h2>
                    </div>
                )
            )
        }
    </div>
  )
}
