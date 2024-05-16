import React, { useEffect, useState } from "react";
import GradientText from "../components/common/GradientText";
import ToggleBtn from "../components/common/ToggleBtn";
import { useCycle, motion } from "framer-motion";
import { validateForm } from "../actions/ContactUsForm";


const ContactUs = () => {
  const [isOn, toggleOn] = useCycle(false, true);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const [ form , setForm ] = useState({
    name : "",
    email : "",
    reason : "",
    phone : "",
    message : "",
    communication_method : "Email"
  })

  useEffect(()=>{
    if(isOn){
      setForm({...form, communication_method : "Phone"})
    }else{
      setForm({...form, communication_method : "Email"})
    }
  },[isOn]);


  useEffect(()=>{
    console.log(form);
  },[form])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-auto py-32 px-5 md:py-44 md:px-10 lg:px-16 xl:px-[15%]">
      {/* container  */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid lg:grid-cols-2 overflow-hidden rounded-lg border border-[#1c222e]"
      >
        {/* header  */}
        <div className="lg:order-2 bg-[#11161f] p-10 pb-3 lg:pb-20 lg:pr-20 lg:pt-20 lg:pl-12 text-white flex flex-col lg:justify-between gap-10">
          {/* top  */}
          <div className="text-[2rem] lg:text-[2.5rem] font-light ">
            We'd love to hear <br />{" "}
            <GradientText>
              <span className="font-semibold text-[3rem]">from you!</span>
            </GradientText>
            {/* email  */}
            <p className="opacity-50 text-sm md:text-base">notime@gmail.com</p>
          </div>
          {/* bottom  */}
          <div className="flex text-xs md:text-sm flex-col gap-3">
            <p className="opacity-50">Preferred method of communication</p>
            {/* choices  */}
            <div className="flex items-center gap-3 text-gray-400">
              <motion.p
                layout
                transition={spring}
                className={`${
                  !isOn && "text-green-500 text-[1rem] transition-all"
                }`}
              >
                Email
              </motion.p>
              <ToggleBtn  isActive={isOn} toggleActive={toggleOn} />
              <motion.p
                layout
                transition={spring}
                className={`${
                  isOn && "text-green-500 text-[1rem] transition-all"
                }`}
              >
                Phone
              </motion.p>
            </div>
          </div>
        </div>

        {/* form  */}
        <form onSubmit={(e)=>{
          e.preventDefault();
          validateForm(form);
        }} className="p-10 bg-[#090c11] text-white">
          {/* heading  */}
          <h1 className="lg:text-xl">💚 Hello, Let's get in touch</h1>

          {/* inputs  */}
          <div className="grid gap-5 mt-10 lg:mt-12 lg:gap-10">
            {/* name  */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={(e)=>setForm({...form, name : e.target.value})}
                className="lg:text-xl bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
              />
            </div>
            {/* Email  */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e)=>setForm({...form, email : e.target.value})}
                className="lg:text-xl bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
              />
            </div>
            {/* Reason  */}
            <div>
              <input
                type="text"
                id="reason"
                name="reason"
                placeholder="Reason for contact"
                onChange={(e)=>setForm({...form, reason : e.target.value})}
                className="lg:text-xl bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
              />
            </div>
            {/* phone  */}
            <div>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone No."
                onChange={(e)=>setForm({...form, phone : e.target.value})}
                className="lg:text-xl bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
              />
            </div>

            {/* message  */}
            <div>
              <input
                type="text"
                id="msg"
                name="msg"
                placeholder="Message"
                onChange={(e)=>setForm({...form, message : e.target.value})}
                className="lg:text-xl bg-transparent border-b border-b-[#1c222e] text-white w-full p-2"
              />
            </div>
          </div>

          {/* submit  */}
          <div className="mt-10 lg:mt-20 flex justify-end ">
            <button
              type="submit"
              className="cursor-pointer bg-gradient-to-r from-green-700 to-yellow-600 py-3 px-5 rounded-full font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>

      </motion.div>
    </div>
  );
};

export default ContactUs;
