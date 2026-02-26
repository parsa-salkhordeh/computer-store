// import Image from "next/image";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeroTopBrand from "@/components/HeroTopBrand";
import ProductsList from "@/components/ProductsList";
import TopBrand from "@/components/TopBrand";

import { connectedToDb } from "@/lib/mongodb";
import Product from "@/models/Product";



export default async function Home() {
  
  await connectedToDb()
  const data=await Product.find()

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

