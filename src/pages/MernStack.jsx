import React, { useEffect } from "react";
import HeroSection from "../components/MernStackDev/HeroSection";
import { motion , useScroll , useSpring } from "framer-motion";
import AboutSection from "../components/MernStackDev/AboutSection";

const MernStack = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="min-h-screen py-40 px-5 md:px-10 lg:px-16 xl:px-[20%] text-white">
    {/* scroll progress indicator  */}
    <motion.div style={{ scaleX : scaleX }} className={`w-screen origin-left fixed top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-yellow-500 z-[100]`} ></motion.div>

    {/* hero section  */}
    <HeroSection />

    {/* About MERN Stack  */}
    <AboutSection/>

  </div>;
};

export default MernStack;
