import React from "react";
import { motion } from "framer-motion";

const TickMark = ({ isFormSubmitted }) => {

    const variants = {

        hidden : {
            opacity : 0,
            y : 100
        },
        visible : {
            opacity : 1,
            y : 0,
        }

    }

  return (
    <motion.div variants={variants} initial="hidden" animate={ isFormSubmitted && 'visible' } className="bg-green-600 aspect-square w-[200px] rounded-full grid place-content-center">

        {/* tick svg  */}
        <motion.div variants={variants} initial="hidden" animate={ isFormSubmitted && 'visible' } transition={{ delay : 0.5 }}>
            <img className="w-32" src="/tick-mark.svg" alt="success" />
        </motion.div>
      
    </motion.div>
  );
};

export default TickMark;
