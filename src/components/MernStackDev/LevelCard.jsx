import React, { useRef } from "react";
import P from "../common/P";
import GradientText from "../common/GradientText";
import { client } from "../../utils/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import H1 from "../common/H1";
import { motion } from "framer-motion";

const LevelCard = ({ level, gradient }) => {

  const builder = imageUrlBuilder(client);
  const containerRef = useRef();

  return (
    <div ref={containerRef} className="w-full max-w-[600px] bg-[#101822] pt-20 pb-16 px-5 rounded-2xl relative border-[0.5px] border-slate-800">
      
      {/* level indicator  */}
      <motion.div  className="opacity-50 w-min bg-[#070910] flex justify-end text-lg xl:text-xl font-black absolute top-10 right-0 p-2 md:pl-3 md:pr-4 xl:pr-6 text-nowrap rounded-l-xl z-[2]">{level?.title}</motion.div>

      {/* image  */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="absolute h-[200px] aspect-square left-5 xl:left-10 -top-20"
      >
        <img
          src={level?.icon && builder.image(level.icon).url()}
          className="w-full h-auto object-cover"
          alt="icon"
        />
      </motion.div>
      {/* heading  */}
      <H1>
        <div
          className={
            "font-bold text-3xl md:text-4xl py-5 w-[300px] md:w-[350px]"
          }
        >
          {level?.level_title}
        </div>
      </H1>
      {/* content  */}
      <div className="grid gap-5 relative z-10">
        {level?.main_contents?.map((main, index) => (
          <div className="grid gap-3">
            <div className="flex  items-center gap-3">
              <GradientText
                gradient={gradient}
                className={`font-extrabold text-2xl`}
              >
                {index + 1}
              </GradientText>
              <P className="font-semibold text-[#ffffffe9] max-w-[300px]">{main?.title}</P>
            </div>
            <div>
              {main?.content?.map((c, index) => (
                <div className="flex pl-10 text-sm py-[.5px]">
                  <span className="text-slate-400 mr-2 ">#</span>
                  <P key={index}>{c}</P>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelCard;
