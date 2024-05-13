import React from "react";
import ScrollDownButton from "./ScrollDownButton";
import P from "./P";

const HeroSection = () => {
  return (
    <div className="text-center grid gap-10 place-items-center">
      {/* headings  */}

      <div className="grid gap-5">
        {/* top heading  */}
        <p className="text-[#6cffb3] font-medium tracking-[1px]">
          FOR DEVELOPERS WHO WANT TO STAND OUT AND BECOME IRREPLACEABLE
        </p>

        {/* main heading  */}
        <p className="text-[2rem] leading-[2rem] md:text-[4rem] md:leading-[4rem]  font-bold">
          Become a top 1%{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-700 bg-overlay">
            MERN Stack
          </span>{" "}
          developer in only one course
        </p>
        {/* sub heading  */}
        <p className="font-medium text-slate-300 md:text-[1.3rem] md:px-10 lg:text-[1.7rem]">
          Escape the shallow content & dive deep into the hottest tech of 2024
        </p>
      </div>

      {/* image  */}

      <div>
        <img
          className="w-[400px] lg:w-[550px]"
          src="/mern-stack-development.png"
          alt="mern-stack-development"
        />
      </div>

      {/* uptodate mark  */}

      <div className="flex items-center gap-3 justify-center">
        {/* verifed icon  */}
        <img src="/verfied-icon.svg" alt="verified" className="w-9" />
        <p className="font-semibold text-lg text-slate-300">Up to Date</p>

        {/* Date */}
        <div className="bg-[#0000006d] text-[#5feda4] font-bold p-3 rounded-md w-fit">
          MAY 13, 2024
        </div>
      </div>

      {/* description  */}
      <P className={'md:px-10 lg:px-32 xl:px-[23%]'}>
        Read the page if you want every single piece of information. Or just
        scroll to the main details by clicking the button below.
      </P>

      {/* scroll to details button  */}
      <ScrollDownButton text={"Scroll to the Detail"} to={"#detail"} />
    </div>
  );
};

export default HeroSection;
