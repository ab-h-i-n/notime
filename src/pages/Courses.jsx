import React from "react";
import Banner from "../components/Banner";
import CourseCard from "../components/courses/CourseCard";

const Courses = () => {
  const courses = [
    {
      title: "MERN Stack Development",
      description: "Master MERN stack by building real world projects",
      image: "https://www.jsmastery.pro/_next/image?url=%2Fassets%2Fblog%2Fimages%2FThumnail.png&w=384&q=75",
    },
    {
        title: "MERN Stack Development",
        description: "Master MERN stack by building real world projects",
        image: "https://www.jsmastery.pro/_next/image?url=%2Fassets%2Fblog%2Fimages%2FThumnail.png&w=384&q=75",
      },
      {
        title: "MERN Stack Development",
        description: "Master MERN stack by building real world projects",
        image: "https://www.jsmastery.pro/_next/image?url=%2Fassets%2Fblog%2Fimages%2FThumnail.png&w=384&q=75",
      },
      {
        title: "MERN Stack Development",
        description: "Master MERN stack by building real world projects",
        image: "https://www.jsmastery.pro/_next/image?url=%2Fassets%2Fblog%2Fimages%2FThumnail.png&w=384&q=75",
      },
  ];

  return (
    <div className="min-h-screen py-40 px-5 md:px-10 lg:px-16 xl:px-[15%]">
      <Banner text="Courses" />

      {/* courses  */}

      <div className="grid gap-10 lg:grid-cols-3 mt-20 place-items-center">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
