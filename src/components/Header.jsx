import React, { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import NavMenu from "./NavMenu";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`bg-[#0000004d] fixed top-0 left-0 h-screen w-screen backdrop-blur-md z-50 transition-all ${
          isOpen ? "opacity-1 pointer-events-none" : "opacity-0"
        }`}
      ></div>
      <motion.header
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#0000006b] z-50 backdrop-blur-md fixed top-0 left-0 w-screen flex justify-between items-center py-5 px-10 border-b-[1px] border-[#ffffff22]"
      >
        {/* logo  */}
        <div className="inline-flex items-center gap-4">
          <img src="/notime-logo.svg" alt="logo" className="w-20" />
          <h1 className="text-white font-semibold text-xl">Notime</h1>
        </div>

        {/* hamburger icon  */}

        <div className="md:hidden">
          <HamburgerIcon setActive={setIsOpen} isAcitve={isOpen} />
        </div>

        {/* links  */}
        <NavMenu isOpen={isOpen} />
      </motion.header>
    </>
  );
};

export default Header;
