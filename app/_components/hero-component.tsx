import React from "react";
import HeroSlide from "./hero-slide";
import imgLogo from "@/app/_assets/images/dgslogo.png";
import Image from "next/image";
import MenuComponent from "./menu-component";

const HeroComponent = () => {
  return (
    <div id="ancorHome" className="w-full mx-auto lg:w-[1000px] mt-6">
      <HeroSlide />
      <div className="bg-neutral-950 w-[250px] h-[250px] mx-auto relative -top-[230px] rounded-full overflow-hidden">
        <Image src={imgLogo} alt="Logo DSG Sound Alto Falantes" />
      </div>
      <MenuComponent />
    </div>
  );
};

export default HeroComponent;
