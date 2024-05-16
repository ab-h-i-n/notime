import React from "react";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const links = [
    {
      img: "/social/whatsapp.svg",
      link: "https://wa.me/+917012944024",
    },
    {
      img: "/social/youtube.svg",
      link: "https://www.youtube.com/@notimeinstitution6818",
    },
    {
      img: "/social/linkedin.svg",
      link: "https://www.linkedin.com/company/notime-edu/",
    },
    {
      img: "/social/instagram.svg",
      link: "https://www.instagram.com/notime.co.in/",
    }
  ];

  return (
    <div className="flex gap-10 py-10 lg:py-4">
      {links.map((link, index) => (
        <motion.a whileHover={{ scale : 1.2 , y : -20 }} key={`social_link_${index}`} href={link.link}>
          <img src={link.img} alt="social" className="w-8 lg:w-6 xl:w-8" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
