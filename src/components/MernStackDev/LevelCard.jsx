import React from "react";
import P from "../common/P";


const LevelCard = ({level}) => {
  return (
    <div className="relative">
      <div className="bg-[#101822] pt-32 pb-16 px-5 rounded-md">
        {/* heading  */}
        <h1 className={"font-bold text-4xl py-5 w-[250px]"}>
          {level?.level_title}
        </h1>
        {/* content  */}
        <div className="grid gap-5">
          {level?.main_contents?.map((main, index) => (
            <div className="grid gap-3">
              <P className="font-semibold text-white">{main?.title}</P>
              <div>
                {main?.content?.map((c, index) => (
                  <P className="pl-5 text-sm py-[.5px]" key={index}>
                    {c}
                  </P>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelCard;
