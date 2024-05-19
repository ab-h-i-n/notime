import React, { useEffect } from "react";
import P from "../common/P";
import GradientText from "../common/GradientText";
import { client } from "../../utils/sanity/client"
import imageUrlBuilder from '@sanity/image-url'



const LevelCard = ({ level , gradient }) => {
  const builder = imageUrlBuilder(client);

  return (
    <div className="relative">

      {/* image  */}
      <div className="absolute h-[200px] aspect-square left-5 -top-20">
        <img src={level?.icon && builder.image(level.icon).url()} className="w-full h-auto object-cover" alt="icon" />
      </div>

      {/* details  */}
      <div className="bg-[#101822] pt-20 pb-16 px-5 rounded-md ">
        {/* heading  */}
        <h1 className={"font-bold text-4xl py-5 w-[250px]"}>
          {level?.level_title}
        </h1>
        {/* content  */}
        <div className="grid gap-5">
          {level?.main_contents?.map((main, index) => (
            <div className="grid gap-3">
              <div className="flex  items-center gap-3">
                <GradientText gradient={gradient} className={`font-extrabold text-2xl`}>
                  {index + 1}
                </GradientText>
                <P className="font-semibold text-white">{main?.title}</P>
              </div>
              <div>
                {main?.content?.map((c, index) => (
                  <div className="flex pl-10 text-sm py-[.5px]">
                    <span className="text-slate-400 mr-2">#</span>
                    <P key={index}>
                      {c}
                    </P>
                  </div>
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
