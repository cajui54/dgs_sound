import Link from "next/link";
import React from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";

const LinkWhats = () => {
  return (
    <div className="w-4/5 text-center  min-h-40 mx-auto">
      <p className="text-2xl ">Para mais informações:</p>
      <Link
        href="https://wa.me/557481339077"
        target="_blank"
        className="flex items-center border hover:scale-105  border-neutral-100 justify-around  bg-green-700 w-60 px-6 py-4 rounded-2xl mx-auto my-4 transition-all"
      >
        <FaSquareWhatsapp className="text-green-700 text-3xl rounded-lg bg-white" />
        <p className="text-neutral-100">What's DGS Sound</p>
      </Link>
    </div>
  );
};

export default LinkWhats;
