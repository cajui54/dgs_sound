import Image, { StaticImageData } from "next/image";
import React from "react";

const ImageGradient = ({ img }: { img: StaticImageData }) => {
  return (
    <div className="relative w-full h-[300px]">
      <div className="z-10 w-full h-52 absolute top-0 bg-gradient-to-b from-neutral-950 from-40% to-transparent"></div>
      <div className="h-full overflow-hidden">
        <div className="z-0 w-[100px] h-full absolute left-0 bg-gradient-to-r from-neutral-950 from-40% to-transparent"></div>
        <Image src={img} alt="alto falantes" className="h-[400px]" />
        <div className="z-0 w-[100px] h-full top-0 absolute right-0 bg-gradient-to-l from-neutral-950 from-40% to-transparent"></div>
      </div>
      <div className="z-10 w-full h-52 absolute bottom-0 bg-gradient-to-t from-neutral-950 from-10% to-transparent"></div>
    </div>
  );
};

export default ImageGradient;
