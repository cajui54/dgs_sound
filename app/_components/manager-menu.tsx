"use client";
import React, { useState } from "react";
import ButtonBugerMenu from "./button-buger-menu";
import NavbarComponent from "./navbar-component";

export interface ManagerMenu {
  menuManager: boolean;
  setMenuManager: React.Dispatch<React.SetStateAction<boolean>>;
}
const ManagerMenu = () => {
  const [menuManager, setMenuManager] = useState<boolean>(false);
  return (
    <div className="h-16 lg:relative lg:top-0 lg:!right-0 w-[80%] flex justify-end items-center">
      <ButtonBugerMenu
        menuManager={menuManager}
        setMenuManager={setMenuManager}
      />
      <NavbarComponent
        setMenuManager={setMenuManager}
        menuManager={menuManager}
      />
    </div>
  );
};

export default ManagerMenu;
