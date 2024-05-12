import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="max-w-sm bg-[#0e1116] border-[#252d39] border rounded-lg shadow ">
        <div className="relative cursor-pointer">
            <motion.div initial={{opacity : 0}} whileHover={{ opacity : 1 }} className=" absolute top-0 left-0 w-full h-full backdrop-blur-sm text-white font-medium text-2xl grid place-content-center ">Visit Site</motion.div>
          <img className="rounded-t-lg" src={project.thumbnail} alt="" />
        </div>
        <div className="p-5 flex gap-5">

            {/* developer  */}
            <div>
                <img className="w-16 rounded-md" src={project.developerImage} alt={project.developer} />
            </div>

            {/* title and desc  */}
          <div>
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
                {project.title}
              </h5>
            </a>
            <p className="mb-3 font-medium text-sm text-gray-300">
              By {project.developer} - {project.developerPosition}
            </p>
            <p className="mb-3 font-normal text-sm text-gray-400">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
