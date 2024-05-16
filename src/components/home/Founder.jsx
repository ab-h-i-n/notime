import React from "react";
import GradientText from "../common/GradientText";
import { motion } from "framer-motion";
import P from "../common/P";

const Founder = () => {
  return (
    <div className="xl:order-2 xl:absolute xl:right-64 xl:top-[-300%]">
      <div className="grid place-items-center gap-10 lg:flex lg:gap-5 xl:grid">
        {/* image */}
        <motion.div initial={{ opacity : 0 , y : 100}} whileInView={{ opacity : 1 , y : 0 }} transition={{ duration : 0.5 , delay : 0.5 }} >
          <motion.div
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="relative w-52 lg:w-20 xl:w-40 aspect-square grid place-items-center"
          >
            <img
              src="/notime-logo-circle.png"
              alt="notime"
              className="w-[99.005%] relative z-40 "
            />
            <div className="absolute z-10 top-0 rounded-full left-0 w-full aspect-square bg-gradient-to-br from-green-500 to-yellow-500"></div>
          </motion.div>
        </motion.div>
        {/* title */}
        <P className=" text-center text-lg lg:text-start lg:text-sm xl:text-center xl:text-lg w-[90%] text-white">
          Your instructor and founders <br />
          <GradientText className={"text-[120%] font-medium"}>
            Muhammed Rinshad&nbsp;S&nbsp;R{" "}
          </GradientText>{" "}
          and{" "}
          <GradientText className={"text-[120%] font-medium"}>
            Thrisha&nbsp;K
          </GradientText>
        </P>
      </div>
    </div>
  );
};

export default Founder;
