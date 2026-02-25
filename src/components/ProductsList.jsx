import Image from "next/image";
import Link from "next/link";

export default function ProductsList({products}) {

console.log(products)

  return (
    <>
    <h1 className="text-center font-bold mt-5 p-4 bg-gray-100">محصولات لپتاپ خانه🖥️</h1>

    <div className="shadow-lg flex flex-wrap text-center justify-center gap-5 mt-10">
      
     {
        products.map(
          (pr)=>(
            <div key={pr._id} className="bg-gray-100 p-4 rounded-2xl">
              <div className="w-50 h-36 mb-3 relative rounded-2xl">
                <Image
                  src={pr.image}
                  alt={pr.name}
                  fill
                  unoptimized
                  className="object-contain rounded-2xl"
              />
              </div>
              <h2>{pr.name}</h2>
              <h3 className=" text-green-700 my-1">{pr.price} تومان</h3>
              <h4>
                <Link href="" className="text-blue-500">دیدن جزیات</Link>
              </h4>
                <button className="rounded-md mt-2 bg-green-300 px-2 py-1">خرید</button>
              
            </div>
          )
        )
      } 
    </div>
    </>

  )
}
