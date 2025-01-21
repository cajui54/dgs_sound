import React from "react";
import MediaSocialComponent from "./media-social-component";
import ManagerMenu from "./manager-menu";

const HeaderComponent = () => {
  return (
    <header className="bg-neutral-950 top-0 fixed z-40 pr-4 h-20 w-[100%] flex  justify-between items-center">
      <MediaSocialComponent margin="" />
      <ManagerMenu />
    </header>
  );
};

export default HeaderComponent;
