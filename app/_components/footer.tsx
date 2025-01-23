import React from "react";
import SubtitlesComponent from "./subtiltes-component";
import MediaSocialComponent from "./media-social-component";

const FooterComponent = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full h-32">
      <MediaSocialComponent margin="mx-auto" />
      <SubtitlesComponent
        subtitle="Alto Falantes Automotivos"
        title="DGS Sound"
      />
    </footer>
  );
};

export default FooterComponent;
