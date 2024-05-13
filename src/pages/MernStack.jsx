import React, { useEffect } from "react";
import HeroSection from "../components/MernStackDev/HeroSection";

const MernStack = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="min-h-screen py-40 px-5 md:px-10 lg:px-16 xl:px-[20%] text-white">
    {/* hero section  */}
    <HeroSection />
    

  </div>;
};

export default MernStack;
