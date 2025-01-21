import React from "react";
import SubtiltesComponent from "./subtiltes-component";
import { link } from "fs";
import { FaTools } from "react-icons/fa";
const services = [
  "Centralização de Imãs Drive",
  "Centralização de Twitter",
  "Troca de Cordoalhas",
  "Troca de Protetores",
  "Troca de Cones",
  "Hidratação de Bordas e cones",
  "Troca e Reparos de Driver",
  "Troca e Reparos de Twitter",
  "Acessórios de Alto Falantes em Gerais",
];
const ListServiceComponent = () => {
  return (
    <div className="my-4 mx-auto py-3">
      <SubtiltesComponent subtitle="Conheça nossos" title="Serviços" />
      <ul className="text-xl tracking-wide">
        {services.length > 0 &&
          services.map((service, index) => (
            <li
              key={index}
              className="bg-gray-950 flex items-center mt-4 rounded-full border border-yellow-400 px-5 py-3"
            >
              <FaTools className="text-yellow-400 text-3xl m-2 cursor-pointer" />
              <span>{service}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListServiceComponent;
