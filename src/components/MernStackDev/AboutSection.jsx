import React from "react";
import P from "./P";
import ReactSites from "./ReactSites";
import H1 from "./H1";

const AboutSection = () => {
  return (
      <div className="text-slate-300 grid gap-4 max-w-2xl">
        {/* Heading  */}
        <H1>Enter the new era of React.</H1>
        {/* sub heading  */}

        <P>Here’s a little known fact.</P>
        <P className={"font-semibold"}>
          55% of the websites use MERN Stack and 5% use React.
        </P>
        <P>
          Are these some nameless websites? Who are these companies? Take a
          look.
        </P>

        {/* sites logos  */}
        <div>
          <ReactSites />
        </div>

        <P>Again, it's a little known fact.</P>
        <P className={"font-semibold"}>
          MERN stands for MongoDB, Express.js, React.js, and Node.js. It is a
          popular JavaScript-based full-stack development solution for building
          web applications.
        </P>
      </div>
  );
};

export default AboutSection;
