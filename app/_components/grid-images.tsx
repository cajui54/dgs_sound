"use client";
import Image from "next/image";
import React, { useState } from "react";
import imgDGS from "@/app/_assets/images/douglaImg.jpg";
import imgLocal01 from "@/app/_assets/images/local/img01.jpg";
import imgLocal02 from "@/app/_assets/images/local/img02.jpg";
import imgLocal03 from "@/app/_assets/images/local/img03.jpg";
import imgLocal04 from "@/app/_assets/images/local/img04.jpg";

const images = [
  { path: imgDGS, info: "Dono da DGS Sound" },
  { path: imgLocal01, info: "Loja de Alto Falantes Automotivos" },
  { path: imgLocal02, info: "Loja de Alto Falantes Automotivos" },
  { path: imgLocal03, info: "Loja de Alto Falantes Automotivos" },
  { path: imgLocal04, info: "Loja de Alto Falantes Automotivos" },
];

const GridImagesComponent = () => {
  const [index, setIndex] = useState<number>(0);
  return (
    <div className="w-[95%] min-h-[550px] mx-auto my-4 ">
      <div className="rounded-2xl w-[99%] h-[400px] sm:h-[500px] lg:w-[500px] overflow-hidden m-auto">
        <Image
          src={images[index].path}
          alt={images[index].info}
          className="w-full h-full"
        />
      </div>
      <div className="w-[95%] sm:w-[500px] h-28 m-auto my-5 p-2 grid grid-cols-5 gap-2">
        {images.length > 0 &&
          images.map((img, index) => (
            <div key={index} onClick={() => setIndex(index)}>
              <Image
                src={img.path}
                alt={img.info}
                className="h-[100px] w-[100px] rounded-lg cursor-pointer"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GridImagesComponent;
