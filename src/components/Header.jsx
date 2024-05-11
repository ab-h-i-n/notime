import React from "react";
import HamburgerIcon from "./HamburgerIcon";

const Header = () => {
  const navItems = [
    {
      icon: "/home.webp",
      title: "Home",
      link: "/",
    },
    {
      icon: "/about.webp",
      title: "About",
      link: "/about",
    },
  ];

  return (
    <header className="bg-[#0000006b] backdrop-blur-md fixed top-0 left-0 w-screen flex justify-between items-center py-7 px-10 border-b-[1px] border-[#ffffff22]">
      {/* logo  */}
      <div className="inline-flex items-center gap-4">
        <img src="/notime-logo.svg" alt="logo" className="w-20" />
        <h1 className="text-white font-semibold text-xl">Notime</h1>
      </div>

      {/* hamburger icon  */}

      <div className="md:hidden">
        <HamburgerIcon />
      </div>

      {/* links  */}

      {/* <nav>
            <a href="/">Next.js 14 Course</a>
            <a href="/about" className='bg-gradient-to-r from-blue-500 to-red-500 bg-overlay'>Masterclass coaching</a>
        </nav> */}
    </header>
  );
};

export default Header;
