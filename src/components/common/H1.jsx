import React from "react";
import { motion } from "framer-motion";

const H1 = ({ children }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-white font-bold text-2xl md:text-[2rem] lg:text-[3rem] leading-[2rem] xl:leading-[3.5rem]"
    >
      {children}
    </motion.h1>
  );
};

export default H1;
