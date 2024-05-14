import React from "react";

const H1 = ({children }) => {
  return (
    <h1 className="text-white font-bold text-2xl md:text-[2rem] lg:text-[3rem] leading-[2rem] xl:leading-[3.5rem]">
      {children}
    </h1>
  );
};

export default H1;
