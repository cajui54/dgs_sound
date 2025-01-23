"use client";
import React from "react";
import logoImg from "@/app/_assets/images/dgslogo.png";
import Image from "next/image";
import { Link } from "react-scroll";

const LinkIcon = () => {
  const handleSetActive = (to: string) => {
    console.log(to);
  };
  return (
    <Link
      to="ancorHome"
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
      activeClass="active"
      onSetActive={handleSetActive}
    >
      <Image
        src={logoImg}
        className="w-[50px] mr-4 animate-pulse"
        alt="Logo da dgs"
      />
    </Link>
  );
};

export default LinkIcon;
