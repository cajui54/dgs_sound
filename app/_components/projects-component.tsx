"use client";
import React from "react";
import SubtitlesComponent from "./subtiltes-component";
import Image from "next/image";
import { useState } from "react";
import img01 from "@/app/_assets/images/cars/carro01.jpg";
import img02 from "@/app/_assets/images/cars/carro02.jpg";
import img03 from "@/app/_assets/images/cars/carro03.jpg";
import img04 from "@/app/_assets/images/cars/carro04.jpg";
import img05 from "@/app/_assets/images/cars/carro05.jpg";
import img06 from "@/app/_assets/images/cars/carro06.jpg";
import ArticleProject from "./articles-projetcs";

const datas = [img01, img02, img03, img04, img05, img06];
const ProjectComponents = () => {
  const [index, setIndex] = useState<number>(5);
  return (
    <div className="w-95% mx-auto py-6" id="ancorProject">
      <SubtitlesComponent subtitle="Trabalhos realizados" title="Projetos" />

      <div className="w-[98%] sm:w-[550px] py-7 mx-auto">
        <div className="w-full h-[400px] rounded-lg p-1">
          <Image
            src={datas[index]}
            alt="Carro com som automotivo"
            className="w-full h-full rounded-lg"
          />
        </div>

        <div className="px-2 h-24 w-[95%] grid grid-cols-6 gap-1 justify-center items-center rounded-lg mx-auto bg-neutral-900 my-5 ">
          {datas.length > 0 &&
            datas.map((image, index) => (
              <Image
                onClick={() => setIndex(index)}
                key={index}
                src={image}
                alt="carro alto falantes automotivo"
                className="h-20 cursor-pointer rounded-md"
              />
            ))}
        </div>
      </div>
      <ArticleProject />
    </div>
  );
};

export default ProjectComponents;
