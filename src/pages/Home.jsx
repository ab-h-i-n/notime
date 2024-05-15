import React, { useEffect } from "react";
import Header from "../components/header/Header";
import GradientText from "../components/common/GradientText";
import ReviewCard from "../components/home/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { reviews } from "../Reviews";
import "swiper/css";
import { motion } from "framer-motion";
import Button from "../components/home/Button";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen w-screen text-white grid grid-cols-1 px-5 md:px-10 lg:px-12 pt-24 md:pt-32 lg:justify-center lg:grid-cols-2 xl:px-[10%] xl:pt-48">
      {/* left side  */}
      <div className="flex-1 h-min grid gap-6 md:w-[650px] lg:w-[500px] xl:w-[650px] ">
        {/* heading  */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-bold pr-3 text-[3rem] md:text-[4rem] leading-[3.5rem] md:leading-[4rem] xl:leading-[5rem] "
        >
          <GradientText>Master</GradientText> <span>Modern</span> Web
          Development With a <GradientText>Project Based</GradientText> Approach
        </motion.div>

        {/* sub description  */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-slate-400 font-light text-xl xl:text-2xl"
        >
          Your gateway to efficient learning. Flexible, rewarding, and vibrant.
          Join us, unlock potential, seize every moment.
        </motion.div>

        {/* buttons  */}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid gap-6 xl:grid-cols-2 "
        >
          <Link to={"/mern-stack-development"}>
            <Button
              text={"MERN Stack Development"}
              gradient={
                "bg-gradient-to-r from-green-500 to-green-800 white-shadow"
              }
            />
          </Link>
          <Link to={"/student-projects"}>
            <Button
              text={"Student Projects"}
              gradient={
                "bg-gradient-to-r from-yellow-500 to-yellow-800 dark-shadow"
              }
            />
          </Link>
        </motion.div>
      </div>

      {/* right side  */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="h-min w-full my-20 md:my-10 xl:my-0"
      >
        <Swiper
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="mySwiper z-10"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={`review_${index}`}>
              <ReviewCard
                image={review.image}
                name={review.name}
                position={review.position}
                review={review.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* bottom  */}
      
    </section>
  );
};

export default Home;
