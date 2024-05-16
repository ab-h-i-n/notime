import React from "react";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const links = [
    {
      img: "/social/whatsapp.svg",
      link: "",
    },
    {
      img: "/social/youtube.svg",
      link: "",
    },
    {
      img: "/social/linkedin.svg",
      link: "",
    },
    {
      img: "/social/instagram.svg",
      link: "",
    },
    {
      img: "/social/facebook.svg",
      link: "",
    },
  ];

  return (
    <div className="flex gap-5">
      {links.map((link, index) => (
        <motion.a whileHover={{ scale : 1.2 }} key={`social_link_${index}`} href={link}>
          <img src={link.img} alt="social" className="w-8" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
