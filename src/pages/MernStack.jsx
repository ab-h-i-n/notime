import React, { useEffect } from "react";
import HeroSection from "../components/MernStackDev/HeroSection";
import NewEraSection from "../components/MernStackDev/NewEraSection";
import ScrollProgressIndicator from "../components/common/ScrollProgressIndicator";
import FreeTestSection from "../components/MernStackDev/FreeTestSection";
import PossibilitiesSection from "../components/MernStackDev/PossibilitiesSection";
import IceBergSection from "../components/MernStackDev/IceBergSection";

const MernStack = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-hidden py-40 px-5 md:px-10 lg:px-16 xl:px-[20%] text-white grid gap-10 lg:gap-32 place-items-center">
      <ScrollProgressIndicator />

      {/* hero section  */}
      <HeroSection />

      {/* NewEra MERN Stack  */}
      <NewEraSection />

      {/* IceBergSection  */}

      <IceBergSection />

      {/* possibilities  */}
      <PossibilitiesSection />

      {/* Free Test  */}
      <FreeTestSection />
    </div>
  );
};

export default MernStack;
