import React, { useEffect } from "react";
import Banner from "../components/common/Banner";
import ProjectCard from "../components/student-projects/ProjectCard";
import ScrollProgressIndicator from "../components/common/ScrollProgressIndicator";

const StudentProjects = () => {
  const projects = [
    {
      thumbnail: "/project.png",
      title: "Youtube Clone",
      description: "Master MERN stack by building real world projects",
      link: "https://www.youtube.com/watch?v=2Vf1D-rUMwE",
      developer: "John Doe",
      developerImage:
        "https://i.pinimg.com/564x/ae/ba/80/aeba80650b5079d23990985772e71455.jpg",
      developerPosition: "Full Stack Developer",
    },
    {
      thumbnail: "/project.png",
      title: "Youtube Clone",
      description: "Master MERN stack by building real world projects",
      link: "https://www.youtube.com/watch?v=2Vf1D-rUMwE",
      developer: "John Doe",
      developerImage:
        "https://i.pinimg.com/564x/ae/ba/80/aeba80650b5079d23990985772e71455.jpg",
      developerPosition: "Full Stack Developer",
    },
    {
      thumbnail: "/project.png",
      title: "Youtube Clone",
      description: "Master MERN stack by building real world projects",
      link: "https://www.youtube.com/watch?v=2Vf1D-rUMwE",
      developer: "John Doe",
      developerImage:
        "https://i.pinimg.com/564x/ae/ba/80/aeba80650b5079d23990985772e71455.jpg",
      developerPosition: "Full Stack Developer",
    },
    {
      thumbnail: "/project.png",
      title: "Youtube Clone",
      description: "Master MERN stack by building real world projects",
      link: "https://www.youtube.com/watch?v=2Vf1D-rUMwE",
      developer: "John Doe",
      developerImage:
        "https://i.pinimg.com/564x/ae/ba/80/aeba80650b5079d23990985772e71455.jpg",
      developerPosition: "Full Stack Developer",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-40 px-5 md:px-10 lg:px-16 xl:px-[15%]">
      <ScrollProgressIndicator />
      <Banner text="Student Projects" />

      {/* courses  */}

      <div className="grid gap-10 lg:grid-cols-3 mt-20 place-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default StudentProjects;
