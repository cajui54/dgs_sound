import React from "react";
import SubtitlesComponent from "./subtiltes-component";
import Image from "next/image";
import imgGameleira from "@/app/_assets/images/gameleiraCity.jpg";
import { FaLocationDot, FaSquareWhatsapp } from "react-icons/fa6";
import { SiOpenstreetmap } from "react-icons/si";
import { FaMapMarked } from "react-icons/fa";
import Link from "next/link";
import { CgMailOpen } from "react-icons/cg";

const ContactsComponent = () => {
  return (
    <div
      id="ancorLocation"
      className="w-[98%] sm:w-[600px] py-9 mx-auto  flex flex-col justify-between"
    >
      <SubtitlesComponent subtitle="Endereço e Contatos" title="Localização" />
      <div className="w-[95%] relative h-[300px] p-1 mx-auto my-7 overflow-hidden">
        <Image
          src={imgGameleira}
          className="rounded-lg brightness-50 w-full h-full"
          alt="Destrito de Gameleira Bahia Brasil"
        />
        <div className="absolute left-14 bottom-5 w-4/5 rounded-sm bg-neutral-950 p-3 flex  justify-center items-center">
          <FaLocationDot className="mr-2 text-2xl text-red-600" />
          <span className="text-lg">
            Distrito de Gameleira - Jaguarari / BA
          </span>
        </div>
      </div>
      <ul className="mx-auto sm:w-[500px]  [&>*]:p-4 [&>*]:bg-neutral-800 [&>*]:my-4 [&>*]:rounded-3xl [&>*]:flex [&>*]:items-center">
        <li>
          <SiOpenstreetmap className="mr-2 text-yellow-500 text-2xl" />
          <span>Rua: Do Campo n° 90</span>
        </li>

        <li>
          <FaMapMarked className="mr-2 text-yellow-500 text-2xl" />
          <span>CPE: 48960-000 Brasil</span>
        </li>

        <li>
          <Link
            href="https://wa.me/557481339077"
            target="_blank"
            className="flex items-center"
          >
            <FaSquareWhatsapp className="text-green-700 mr-6 bg-white text-2xl" />
            <span>(74)8133-9077</span>
          </Link>
        </li>

        <li>
          <CgMailOpen className="mr-5 text-2xl text-yellow-500" />
          <span>email: dgssound01@gmail.com</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactsComponent;
