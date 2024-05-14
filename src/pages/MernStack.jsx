import React, { useEffect } from "react";
import HeroSection from "../components/MernStackDev/HeroSection";
import AboutSection from "../components/MernStackDev/AboutSection";
import ScrollProgressIndicator from "../components/ScrollProgressIndicator";
import FreeTestSection from "../components/MernStackDev/FreeTestSection";

const MernStack = () => {



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="min-h-screen w-screen overflow-hidden py-40 px-5 md:px-10 lg:px-16 xl:px-[20%] text-white grid gap-10 lg:gap-32 place-items-center">
    <ScrollProgressIndicator/>

    {/* hero section  */}
    <HeroSection />

    {/* About MERN Stack  */}
    <AboutSection/>

    {/* Free Test  */}
    <FreeTestSection/>

  </div>;
};

export default MernStack;
