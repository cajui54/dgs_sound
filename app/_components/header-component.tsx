import React from "react";
import MediaSocialComponent from "./media-social-component";
import ManagerMenu from "./manager-menu";
import LinkIcon from "./link-icon";

const HeaderComponent = () => {
  return (
    <header className="bg-neutral-950 top-0 fixed z-40 pr-4 h-20 w-[100%] flex  justify-between items-center">
      <div className="ml-6 flex">
        <LinkIcon />
        <MediaSocialComponent margin="" />
      </div>
      <ManagerMenu />
    </header>
  );
};

export default HeaderComponent;
