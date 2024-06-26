import React, { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import NavMenu from "./NavMenu";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCycle } from "framer-motion";
const Header = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <div
        className={`lg:hidden bg-[#0000004d] pointer-events-none fixed top-0 left-0 h-screen w-screen backdrop-blur-md z-50 transition-all ${
          isOpen ? "opacity-1 pointer-events-none" : "opacity-0"
        }`}
      ></div>
      <motion.header
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#0000006b] z-50 backdrop-blur-md fixed top-0 left-0 w-screen flex justify-between items-center py-5 px-10 border-b-[1px] border-[#ffffff22] lg:px-72"
      >
        {/* logo  */}
        <Link to={'/'} onClick={()=>{
          if(isOpen){
            toggleOpen()
          }
        }}>
          <div className="inline-flex items-center gap-4">
            <img src="/notime-logo.svg" alt="logo" className="w-20 lg:w-24" />
            <h1 className="text-white font-semibold text-xl lg:text-2xl">
              Notime
            </h1>
          </div>
        </Link>

        {/* hamburger icon  */}

        <div>
          <HamburgerIcon isOpen={isOpen} toggleOpen={toggleOpen} />
        </div>

        {/* links  */}
        <NavMenu isOpen={isOpen} setIsOpen={toggleOpen} />
      </motion.header>
    </>
  );
};

export default Header;
