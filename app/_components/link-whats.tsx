import Link from "next/link";
import React from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";

const LinkWhats = () => {
  return (
    <div className="w-4/5 text-center mx-auto">
      <Link
        href="https://wa.me/557481339077"
        target="_blank"
        className="flex items-center border hover:scale-105  border-neutral-100 justify-center  bg-green-700 w-60 px-6 py-1 rounded-md mx-auto my-4 transition-all"
      >
        <FaSquareWhatsapp className="text-green-700 text-2xl rounded-md bg-white mr-4" />
        <p className="text-neutral-100"> + Informações</p>
      </Link>
    </div>
  );
};

export default LinkWhats;
