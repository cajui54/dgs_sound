import React from "react";
import GridImagesComponent from "./grid-images";
import ListServiceComponent from "./list-service-component";
import LinkWhats from "./link-whats";
import SubtiltesComponent from "./subtiltes-component";

const AboutComponent = () => {
  return (
    <div className="w-full pt-4 overflow-hidden min-h-[100vh] my-64 sm:w-[800px] mx-auto">
      <SubtiltesComponent subtitle="Sobre à" title="DGS Sound" />
      <GridImagesComponent />

      <div className="w-[90%] mx-auto">
        <h1 className="text-5xl font-extrabold text-yellow-400">DGS Sound</h1>
        <h1 className="text-2xl -mt-2 text-green-800">
          Alto Falantes Automotivos
        </h1>

        <article className="mt-5 pb-4">
          <p className="leading-10 text-2xl tracking-widest">
            -<span className="text-yellow-400 font-black">DGS Sound</span> é uma
            assistência técnica especializada em Alto Falantes Automotivos e
            recondicionados
          </p>
        </article>

        <ListServiceComponent />

        <LinkWhats />
      </div>
    </div>
  );
};

export default AboutComponent;
