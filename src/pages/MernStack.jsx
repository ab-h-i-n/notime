import React, { useEffect } from "react";
import HeroSection from "../components/MernStackDev/HeroSection";
import NewEraSection from "../components/MernStackDev/NewEraSection";
import ScrollProgressIndicator from "../components/common/ScrollProgressIndicator";
import FreeTestSection from "../components/MernStackDev/FreeTestSection";
import PossibilitiesSection from "../components/MernStackDev/PossibilitiesSection";
import IceBergSection from "../components/MernStackDev/IceBergSection";
import FrequentlyAskedQuestion from "../components/MernStackDev/FrequentlyAskedQuestion";
import NormalButton from "../components/common/NormalButton";
import { Link } from "react-router-dom";

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

      {/* FrequentlyAskedQuestion  */}
      <FrequentlyAskedQuestion />

      {/* contact us button  */}

      <Link to={'/contact-us'} >
        <NormalButton gradient={'bg-gradient-to-r from-yellow-500 to-yellow-800 white-shadow flex items-center gap-3'}>
          Contact Us
          <img src="/add-call.svg" alt="contact-us" className="w-5" />
          </NormalButton>
      </Link>
    </div>
  );
};

export default MernStack;
