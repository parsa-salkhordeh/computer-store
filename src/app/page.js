// import Image from "next/image";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeroTopBrand from "@/components/HeroTopBrand";
import ProductsList from "@/components/ProductsList";
import TopBrand from "@/components/TopBrand";



export default async function Home() {
  const res= await fetch("http://localhost:3000/api/products")
  const data=await res.json()
  console.log(data)
  return (
    <div>
      <Header/>
      <HeroSection/>
      <HeroTopBrand/>
      <TopBrand/>
      <ProductsList products={data}/>
    </div>
  );
}
