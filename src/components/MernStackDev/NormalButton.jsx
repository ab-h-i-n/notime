import React from "react";

const NormalButton = ({gradient,children , onClick}) => {
  return (
    <div
    onClick={onClick}
      className={`${gradient} cursor-pointer flex items-center py-3 px-10 text-lg font-semibold rounded-md justify-center w-fit`}
    >
      {children}
    </div>
  );
};

export default NormalButton;
