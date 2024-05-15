import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import NormalButton from "../common/NormalButton";
import { Datepicker } from "flowbite-react";

const SheduleTestForm = ({ isOpen, setFormOpen, currentTime }) => {

  const varients = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };


  return (
    <motion.div
      variants={varients}
      animate={isOpen ? "open" : "closed"}
      className={` overflow-hidden `}
    >
      <form className="grid gap-5 mt-10 lg:gap-10 py-10">
        {/* name */}
        <input
          className="lg:text-xl focus:outline-none focus:border-white bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
          placeholder="Full Name"
          type="text"
          name="name"
          id="name"
        />

        {/* Email */}
        <input
          className="lg:text-xl focus:outline-none focus:border-white bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
          placeholder="Email"
          type="text"
          name="email"
          id="email"
        />

        {/* phone */}
        <input
          className="lg:text-xl focus:outline-none focus:border-white bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
          placeholder="Phone No."
          type="number"
          name="phone"
          id="phone"
        />

        {/* date */}
        <input
          className="lg:text-xl focus:outline-none focus:border-white bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
          type="date"
          name="date"
          id="date"
          defaultValue={new Date().toISOString().split("T")[0]}
        />

        {/* time */}

        <input
          className="lg:text-xl focus:outline-none focus:border-white bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
          type="time"
          name="time"
          id="time"
          defaultValue={currentTime}
        />

        {/* buttons */}
        <div className="flex items-center gap-5">
          {/* cancel */}
          <NormalButton
            text={"Cancel"}
            gradient={"bg-gradient-to-r from-red-500 to-red-800 dark-shadow"}
            onClick={() => setFormOpen(false)}
          >
            Cancel
          </NormalButton>

          {/* submit */}
          <NormalButton
            text={"Submit"}
            gradient={
              "bg-gradient-to-r from-green-500 to-green-800 white-shadow"
            }
          >
            Submit
          </NormalButton>
        </div>
      </form>
    </motion.div>
  );
};

export default SheduleTestForm;
