"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { ManagerMenu } from "./manager-menu";

const ButtonBugerMenu = ({ menuManager, setMenuManager }: ManagerMenu) => {
  return (
    <div className="lg:hidden [&>*]:cursor-pointer [&>*]:hover:scale-150 w-4/5 text-4xl h-16 flex justify-end items-center">
      {!menuManager ? (
        <GiHamburgerMenu
          className="delayTransition"
          onClick={() => setMenuManager(true)}
        />
      ) : (
        <IoClose
          className="delayTransition"
          onClick={() => setMenuManager(false)}
        />
      )}
    </div>
  );
};

export default ButtonBugerMenu;
