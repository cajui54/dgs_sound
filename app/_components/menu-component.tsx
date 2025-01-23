"use client";
import React from "react";
import imgFalante01 from "@/app/_assets/images/alto-falantes/falante02-removebg.png";
import imgCar01 from "@/app/_assets/images/cars/carro02-removebg.png";
import imgGameleira from "@/app/_assets/images/gameleiraCity.jpg";
import imgCar02 from "@/app/_assets/images/cars/carro03.jpg";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-scroll";

const MenuComponent = () => {
  const handleSetActive = (to: string) => {
    console.log(to);
  };
  return (
    <div className="mx-auto flex justify-between items-center -mt-52 sm:w-[500px] w-[98%] h-40">
      <Link
        to="ancorAbout"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="active"
        onSetActive={handleSetActive}
      >
        <div className="w-[80px] rounded-full h-[80px] flex flex-col justify-center items-center bg-neutral-800 border border-neutral-700">
          <Image
            src={imgCar01}
            alt="falante"
            className="hover:scale-[1.4] transition-all w-16"
          />
        </div>
        <span className="text-sm text-center text-neutral-400">
          Sobre à DGS
        </span>
      </Link>

      <Link
        to="ancorLocation"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="active"
        onSetActive={handleSetActive}
        className="relative"
      >
        <div className="overflow-hidden w-[80px] rounded-full h-[80px] flex flex-col justify-center items-center bg-neutral-800 border border-neutral-700">
          <Image
            src={imgGameleira}
            alt="Destrito de Gameleira"
            className=" rounded-full w-[70px] h-[70px] absolute"
          />
          <FaLocationDot className="rounded-full z-10 text-4xl text-red-600 hover:scale-[1.4] transition-all" />
        </div>
        <span className="text-sm text-center text-neutral-400">
          Localização
        </span>
      </Link>

      <Link
        to="ancorAltoFalantes"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="active"
        onSetActive={handleSetActive}
      >
        <div className="w-[80px] rounded-full h-[80px] flex flex-col justify-center items-center bg-neutral-800 border border-neutral-700">
          <Image
            src={imgFalante01}
            alt="falante"
            className="hover:scale-[1.5] transition-all"
          />
        </div>
        <span className="text-sm text-center text-neutral-400">
          Alto Falantes
        </span>
      </Link>

      <Link
        to="ancorProject"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="active"
        className="relative"
      >
        <div className="overflow-hidden w-[80px] rounded-full h-[80px] flex flex-col justify-center items-center bg-neutral-800 border border-neutral-700">
          <Image
            src={imgCar02}
            alt="Destrito de Gameleira"
            className=" rounded-full w-[70px] h-[70px] absolute"
          />
        </div>
        <span className="px-3 text-sm text-center text-neutral-400">
          Projetos
        </span>
      </Link>
    </div>
  );
};

export default MenuComponent;
