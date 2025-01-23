import React from "react";
import SubtitlesComponent from "./subtiltes-component";
import img01 from "@/app/_assets/images/alto-falantes/falante02.jpg";
import img02 from "@/app/_assets/images/alto-falantes/falante03.jpg";
import img03 from "@/app/_assets/images/alto-falantes/falante07.jpg";
import img04 from "@/app/_assets/images/alto-falantes/falante05.jpg";
import img05 from "@/app/_assets/images/alto-falantes/falante08.jpg";
import img06 from "@/app/_assets/images/alto-falantes/falante12.jpg";
import img07 from "@/app/_assets/images/alto-falantes/falante14.jpg";
import img08 from "@/app/_assets/images/alto-falantes/falante09.jpg";
import Image from "next/image";
import LinkWhats from "./link-whats";
const falantes = [
  {
    image: img01,
    title: "Alto Falantes",
    subtitle: "Automotivo",
    description:
      "Trabalhamos com alto falantes: Médio Grave | Woofer | Subwoofer",
  },

  {
    image: img02,
    title: "Alto Falantes",
    subtitle: "Automotivo",
    description:
      "Trabalhamos com alto falantes: Médio Grave | Woofer | Subwoofer",
  },

  {
    image: img03,
    title: "Alto Falantes",
    subtitle: "Automotivo",
    description:
      "Trabalhamos com alto falantes: Médio Grave | Woofer | Subwoofer",
  },

  {
    image: img04,
    title: "Alto Falantes",
    subtitle: "Automotivo",
    description:
      "Trabalhamos com alto falantes: Médio Grave | Woofer | Subwoofer",
  },

  {
    image: img05,
    title: "Alto Falantes",
    subtitle: "Automotivo",
    description:
      "Trabalhamos com alto falantes: Médio Grave | Woofer | Subwoofer",
  },

  {
    image: img06,
    title: "Alto Falantes",
    subtitle: "Automotivo",
    description:
      "Trabalhamos com alto falantes: Médio Grave | Woofer | Subwoofer",
  },

  {
    image: img07,
    title: "Alto Falantes",
    subtitle: "Automotivo",
    description:
      "Trabalhamos com alto falantes: Médio Grave | Woofer | Subwoofer",
  },

  {
    image: img08,
    title: "Alto Falantes",
    subtitle: "Automotivo",
    description:
      "Trabalhamos com alto falantes: Médio Grave | Woofer | Subwoofer",
  },
];
const AltoFalantesComponents = () => {
  return (
    <div
      id="ancorAltoFalantes"
      className="w-[95%]  overflow-x-hidden mx-auto mt-20"
    >
      <SubtitlesComponent subtitle="Alto Falantes" title="Automotivos" />

      <div className="mt-16 sm:grid  sm:grid-cols-2 lg:grid-cols-4 gap-2 ">
        {falantes.length > 0 &&
          falantes.map((falante, index) => (
            <div
              key={index}
              className="w-[300px] mx-auto h-[450px] bg-neutral-900 rounded-md border border-yellow-600 my-6 transition-all hover:scale-110"
            >
              <div className="w-[95%] h-[200px] mx-auto rounded-md my-3">
                <Image
                  src={falante.image}
                  alt={falante.subtitle}
                  className=" w-full h-full hover:scale-125 rounded-lg"
                />
              </div>

              <div className="w-4/5 mx-auto text-center">
                <h2 className="font-extrabold text-3xl text-yellow-400">
                  {falante.title}
                </h2>
                <h3 className="text-green-800 text-2xl -mt-2">
                  {falante.subtitle}
                </h3>
              </div>

              <p className="w-[95%] h-24 text-center flex justify-center items-center bg-neutral-800 p-2 rounded-lg mx-auto">
                {falante.description}
              </p>
              <LinkWhats />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AltoFalantesComponents;
