import Image from "next/image"
import Link from "next/link"


export default async function Details({params}) {

  let {slug}= await params
  
    const res= await fetch(`http://localhost:3000/api/products/${slug}`)
    let data= await res.json()
    
    return (
      <section>
        <div className="sm:block md:flex gap-20 bg-gray-200 py-6 px-5">
            <div>
                <Image
                  src={data.image}
                  alt="لپتاپ"
                  width={300}
                  height={499}
                  unoptimized
                />
            </div>
            <div>
                <h1 className="mt-14 text-gray-800">{data.name}</h1>
                <p className="mt-4 text-gray-600">{data.description}</p>
                <h2 className="text-green-700 font-bold my-4"> {data.price} تومان</h2>
                <div className="flex gap-4">
                  <h3>{data.cpu}</h3>
                  <h3>{data.ram}</h3>
                </div>

                <div className="mt-8 text-blue-500">
                  <Link href="/">برگشت به صفحه اصلی</Link>
                </div>
            </div>
        </div>
      </section>
    )
}
