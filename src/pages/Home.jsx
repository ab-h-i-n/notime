import React from "react";
import Header from "../components/Header";
import GradientText from "../components/GradientText";
import ReviewCard from "../components/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { reviews } from "../Reviews";
import 'swiper/css'

const Home = () => {
  return (
    <section className="min-h-screen w-screen text-white pt-32 xl:pt-48 grid grid-cols-1 lg:grid-cols-2 xl:px-48 ">
      {/* left side  */}
      <div className="flex-1 h-min grid gap-10 lg:w-[500px] xl:w-full px-5 md:px-10 lg:px-12 xl:pl-20">
        {/* heading  */}
        <div className="font-bold text-[3.3rem] lg:text-[4rem] leading-[3.5rem] xl:leading-[5rem] ">
          <GradientText>Master</GradientText> <span>Modern</span> Web
          Development With a <GradientText>Project Based</GradientText> Approach
        </div>

        {/* sub description  */}
        <p className="text-slate-400 font-light text-xl xl:text-2xl">
          Your gateway to efficient learning. Flexible, rewarding, and vibrant.
          Join us, unlock potential, seize every moment.
        </p>
      </div>

      {/* right side  */}
      <div className="h-min w-full my-20 xl:my-0">
        <Swiper
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
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
      </div>
    </section>
  );
};

export default Home;
