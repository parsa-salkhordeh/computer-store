// import Image from "next/image";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeroTopBrand from "@/components/HeroTopBrand";
import TopBrand from "@/components/TopBrand";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <HeroTopBrand/>
      <TopBrand/>
    </div>
  );
}
