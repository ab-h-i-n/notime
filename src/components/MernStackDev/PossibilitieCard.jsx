import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PossibilitieCard = ({ heading, children, arrange }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "start end"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], ["100%", "-60%"]);

  return (
    <motion.div initial={{ opacity : 0 , y : 100 }} whileInView={{ opacity : 1 , y : 0  }} onViewportEnter={{ margin : "-30%" }} onViewportLeave={{ margin : "0%" }} ref={ref} className={`flex items-center ${arrange}`}>
      <div className="w-[300px] p-[0.02rem] grid place-items-center rounded-xl overflow-hidden relative">
        <motion.div style={{ scaleY : scaleY }} transition={{ duration: 0.5 , ease : 'easeInOut' }} className="origin-top absolute w-full h-full bg-gradient-to-br from-yellow-500 to-green-500"></motion.div>
        <div className="p-5 rounded-xl bg-[#090c10] z-49 relative">
          <h1 className="text-lg font-semibold">{heading}</h1>
          <p className="text-xs opacity-50 mt-3">{children}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PossibilitieCard;
