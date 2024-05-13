import React from "react";
import P from "./P";
import ReactSites from "./ReactSites";

const AboutSection = () => {
  return (
    <div className="text-slate-300 grid gap-4 md:px-20 lg:px-44 xl:px-56">
      {/* Heading  */}
      <h1 className="text-white font-bold text-2xl md:text-[2rem] lg:text-[3rem] leading-[3rem]">
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

      <P>Again, it's a little known fact.</P>
      <P className={'font-semibold'}>MERN stands for MongoDB, Express.js, React.js, and Node.js. It is a popular JavaScript-based full-stack development solution for building web applications.</P>
    </div>
  );
};

export default AboutSection;
