import React from "react";
import Link from "next/link";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const MediaSocialComponent = ({ margin }: { margin: string }) => {
  return (
    <div
      className={`${margin} w-28 flex justify-center items-center [&>*]:bg-white [&>*]:rounded-sm text-2xl`}
    >
      <Link
        href="https://www.facebook.com/dgssoundaltofalantesautomotivos"
        className="text-blue-700 hover:scale-150 transition-all"
        target="_blank"
      >
        <FaFacebookSquare />
      </Link>
      <Link
        href="https://www.instagram.com/dgs_sound_/"
        className="text-pink-700 mx-2 hover:scale-150 transition-all"
        target="_blank"
      >
        <FaSquareInstagram />
      </Link>
      <Link
        href="https://wa.me/557481339077"
        target="_blank"
        className="text-green-700 hover:scale-150 transition-all"
      >
        <FaSquareWhatsapp />
      </Link>
    </div>
  );
};

export default MediaSocialComponent;
