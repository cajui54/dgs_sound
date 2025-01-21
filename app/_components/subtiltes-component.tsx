import React from "react";
interface TitlesProps {
  subtitle: string;
  title: string;
}
const SubtiltesComponent = ({ subtitle, title }: TitlesProps) => {
  return (
    <div>
      <h3 className="text-2xl text-green-600">{subtitle}</h3>
      <h2 className="text-5xl -mt-2 text-yellow-400 font-black">
        {title}
        <span className="text-5xl text-neutral-300">.</span>
      </h2>
    </div>
  );
};

export default SubtiltesComponent;
