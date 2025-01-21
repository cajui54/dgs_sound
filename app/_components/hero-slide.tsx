"use client";
import React, { useState } from "react";
import imgCar01 from "@/app/_assets/images/cars/carro03.jpg";
import imgCar04 from "@/app/_assets/images/cars/carro05.jpg";
import imgCar05 from "@/app/_assets/images/cars/carro06.jpg";
import imgFalante02 from "@/app/_assets/images/alto-falantes/falante01.jpg";
import Image from "next/image";

const images = [
  { path: imgCar01, alt: "Carro com auto falantes automotivos" },
  { path: imgFalante02, alt: "Carro com auto falantes automotivos" },
  { path: imgCar04, alt: "Carro com auto falantes automotivos" },
  { path: imgCar05, alt: "falantes automotivos" },
];

const HeroSlide = () => {
  const [index, setIndex] = useState<number>(0);

  setTimeout(() => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }, 5000);

  return (
    <div className="w-full bg-neutral-950 h-[400px] relative">
      <div className="w-full overflow-hidden absolute z-30 h-[50%] bg-gradient-to-b from-neutral-950 from-30%  to-transparent"></div>
      <div className="h-full relative w-full flex justify-center items-center overflow-hidden">
        <div className="left-0 w-[150px] overflow-hidden absolute z-30 h-full bg-gradient-to-r from-neutral-950 from-5%  to-transparent"></div>
        <Image
          className="h-[98%] w-full lg:h-[500px] block"
          src={images[index].path}
          alt={images[index].alt}
        />
        <div className="right-0 w-[150px] overflow-hidden absolute z-30 h-full bg-gradient-to-l from-neutral-950 from-5%  to-transparent"></div>
      </div>
      <div className="w-full h-[50%] bg-gradient-to-t from-neutral-950 from-30%  to-transparent absolute bottom-0"></div>
    </div>
  );
};

export default HeroSlide;
