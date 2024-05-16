import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import NormalButton from "../common/NormalButton";
import { ValidateAndSubmit } from "../../actions/FreeTestForm";

const SheduleTestForm = ({ isOpen, setFormOpen, currentTime }) => {
  const date = new Date().toISOString().split("T")[0];

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

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  useEffect(()=>{
    setForm({...form,time : currentTime , date : date})
  },[currentTime])

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <motion.div
      variants={varients}
      animate={isOpen ? "open" : "closed"}
      className={` overflow-hidden `}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ValidateAndSubmit(form);
        }}
        className="grid gap-5 mt-10 lg:gap-10 py-10"
      >
        {/* name */}
        <input
          className="lg:text-xl focus:outline-none focus:border-white bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
          placeholder="Full Name"
          type="text"
          name="name"
          id="name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        {/* Email */}
        <input
          className="lg:text-xl focus:outline-none focus:border-white bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
          placeholder="Email"
          type="text"
          name="email"
          id="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {/* phone */}
        <input
          className="lg:text-xl focus:outline-none focus:border-white bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
          placeholder="Phone No."
          type="number"
          name="phone"
          id="phone"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        {/* date */}
        <input
          className="lg:text-xl focus:outline-none focus:border-white bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
          type="date"
          name="date"
          id="date"
          min={date}
          defaultValue={date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        {/* time */}

        <input
          className="lg:text-xl focus:outline-none focus:border-white bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
          type="time"
          name="time"
          id="time"
          min={currentTime}
          defaultValue={currentTime}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
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
          <button type="submit">
            <NormalButton
              text={"Submit"}
              gradient={
                "bg-gradient-to-r from-green-500 to-green-800 white-shadow"
              }
            >
              Submit
            </NormalButton>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default SheduleTestForm;
