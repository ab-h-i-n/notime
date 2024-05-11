import React from "react";
import Header from "../components/Header";
import GradientText from "../components/GradientText";
import ReviewCard from "../components/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <section className="min-h-screen text-white p-3 pt-32">
      {/* left side  */}
      <div className="grid gap-10">
        {/* heading  */}
        <div className="font-bold text-[3.3rem] leading-[3.5rem] ">
          <GradientText>Master</GradientText> <span>Modern</span> Web
          Development With a <GradientText>Project Based</GradientText> Approach
        </div>

        {/* sub description  */}
        <p className="text-slate-700 font-medium text-xl">
          Your gateway to efficient learning. Flexible, rewarding, and vibrant.
          Join us, unlock potential, seize every moment.
        </p>
      </div>

      {/* right side  */}
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper my-20"
      >
        <SwiperSlide>
          <ReviewCard
            image={"/photo.avif"}
            name={"Luffy"}
            position={"Web Developer"}
            review={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, animi laboriosam nemo accusamus voluptas culpa deleniti nesciunt maiores delectus, assumenda quae et ullam rem incidunt sint iste totam blanditiis accusantium."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard
            image={"/photo.avif"}
            name={"Luffy"}
            position={"Web Developer"}
            review={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, animi laboriosam nemo accusamus voluptas culpa deleniti nesciunt maiores delectus, assumenda quae et ullam rem incidunt sint iste totam blanditiis accusantium."
            }
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Home;
