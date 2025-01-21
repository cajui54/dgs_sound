import React from "react";
import HeroSlide from "./hero-slide";
import imgLogo from "@/app/_assets/images/dgslogo.png";
import Image from "next/image";
import MenuComponent from "./menu-component";
import ImageGradient from "./image-gradient";
import img from "@/app/_assets/images/alto-falantes/falante04.jpg";
const HeroComponent = () => {
  return (
    <div className="w-full mx-auto lg:w-[1000px] h-[95vh] mt-6">
      <HeroSlide />
      <div className="bg-neutral-950 w-[250px] h-[250px] mx-auto relative -top-[230px] rounded-full overflow-hidden">
        <Image src={imgLogo} alt="Logo DSG Sound Alto Falantes" />
      </div>
      <MenuComponent />
      <ImageGradient img={img} />
    </div>
  );
};

export default HeroComponent;
