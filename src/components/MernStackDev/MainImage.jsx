import React from "react";
import { motion } from "framer-motion";

const MainImage = () => {
  const mernLogos = [
    "/mongodb.svg",
    "/express.svg",
    "/react.svg",
    "/nodejs.svg",
    "/javascript.svg",
  ];

  return (
    <div>
      <div className="flex justify-center items-center relative">
        <motion.div
          animate={{
            rotate: 360,
            transition: {
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            },
          }}
          className="relative aspect-square h-[400px]"
        >
          {/* mongodb  */}
          <img
            src={mernLogos[0]}
            alt="mongodb"
            className="w-32 absolute top-2 left-1/2 -translate-x-1/2 "
          />

          {/* express  */}
          <img
            src={mernLogos[1]}
            alt="express"
            className="w-20 absolute right-2 top-1/2 -translate-y-1/2 invert"
          />

          {/* react  */}
          <img
            src={mernLogos[2]}
            alt="react"
            className="w-24 absolute bottom-2 left-1/2 -translate-x-1/2"
          />

          {/* nodejs  */}
          <img
            src={mernLogos[3]}
            alt="nodejs"
            className="w-24 absolute left-2 top-1/2 -translate-y-1/2"
          />
        </motion.div>

        {/* javascript  */}
        <img
          src={mernLogos[4]}
          alt="javascript"
          className="w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default MainImage;
