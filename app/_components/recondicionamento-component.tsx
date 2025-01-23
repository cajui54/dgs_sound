import React from "react";
import SubtitlesComponent from "./subtiltes-component";
import imgBefore01 from "@/app/_assets/images/recondi/reco_after01.jpg";
import imgAfter01 from "@/app/_assets/images/recondi/reco_before01.jpg";
import imgBefore02 from "@/app/_assets/images/recondi/reco_after02.jpg";
import imgAfter02 from "@/app/_assets/images/recondi/reco_before02.jpg";
import imgBefore03 from "@/app/_assets/images/recondi/reco_after03.jpg";
import imgAfter03 from "@/app/_assets/images/recondi/reco_before03.jpg";
import imgBefore04 from "@/app/_assets/images/recondi/reco_after04.jpg";
import imgAfter04 from "@/app/_assets/images/recondi/reco_before04.jpg";
import Image from "next/image";
import { FaTools } from "react-icons/fa";
import logoDGS from "@/app/_assets/images/dgslogo.png";
import LinkWhats from "./link-whats";

const recondi = [
  {
    imageAfter: imgAfter01,
    imageBefore: imgBefore01,
    alt: "Alto Falante automotivo",
  },
  {
    imageAfter: imgAfter02,
    imageBefore: imgBefore02,
    alt: "Alto Falante automotivo",
  },
  {
    imageAfter: imgAfter04,
    imageBefore: imgBefore04,
    alt: "Alto Falante automotivo",
  },
];
const RecondicionamentoComponent = () => {
  return (
    <div id="ancorRecond" className="w-[95%] mx-auto p-6 ">
      <SubtitlesComponent
        subtitle="Recondicionamentos"
        title="Reparos de Alto Falantes"
      />
      <div className="w-[95%] sm:w-[700px] mx-auto py-5">
        {recondi.length > 0 &&
          recondi.map((falante, index) => (
            <div
              key={index}
              className="w-full mx-auto p-2 h-[500px] gap-2 grid grid-rows-2 sm:grid-cols-2 mt-11 border border-yellow-600 rounded-lg"
            >
              <div className="h-full sm:h-[485px] relative overflow-hidden rounded-lg">
                <h2 className="text-3xl flex justify-center items-center bg-neutral-950 rounded-3xl absolute w-4/5 text-center bottom-2 left-7 font-black text-yellow-500">
                  <FaTools className="mr-3 text-3xl" />
                  Antes
                </h2>

                <Image
                  src={falante.imageAfter}
                  alt={falante.alt}
                  className="h-full block"
                />
              </div>

              <div className="h-full sm:h-[485px] relative overflow-hidden rounded-lg">
                <div className="bg-neutral-950 flex justify-center items-center h-10  absolute w-4/5 rounded-lg bottom-2 left-7">
                  <Image
                    src={logoDGS}
                    alt="logo DGS Sound"
                    className="w-[40px] mr-4 animate-pulse"
                  />
                  <span className="font-black text-3xl text-yellow-500">
                    Depois
                  </span>
                </div>
                <Image
                  src={falante.imageBefore}
                  alt={falante.alt}
                  className="h-full"
                />
              </div>
            </div>
          ))}
      </div>
      <LinkWhats />
    </div>
  );
};

export default RecondicionamentoComponent;
