import React from "react";
import P from "./P";
import ReactSites from "./ReactSites";

const AboutSection = () => {
  return (
    <div className="text-slate-300 my-10 grid gap-4">
      {/* Heading  */}
      <h1 className="text-white font-bold text-2xl">
        Enter the new era of React.
      </h1>
      {/* sub heading  */}

      <P>Here’s a little known fact.</P>
      <P className={"font-semibold"}>
        55% of the websites use MERN Stack and 5% use React.
      </P>
      <P>
        Are these some nameless websites? Who are these companies? Take a look.
      </P>

      {/* sites logos  */}
      <div>
        <ReactSites/>
      </div>
    </div>
  );
};

export default AboutSection;
