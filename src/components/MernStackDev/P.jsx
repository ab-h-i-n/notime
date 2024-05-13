import React from "react";

const P = ({ children, className }) => {
  return <p className={`text-slate-300 md:text-xl lg:leading-[1.7rem] ${className}`}>{children}</p>;
};

export default P;
