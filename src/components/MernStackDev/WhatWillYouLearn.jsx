import React, { useEffect, useState } from "react";
import H1 from "../common/H1";
import { client } from "../../utils/sanity/client";
import LevelCard from "./LevelCard";

const WhatWillYouLearn = () => {
  const [levels, setLevels] = useState();

  useEffect(() => {
    const fetchLevels = async () => {
      const levels = await client.fetch(`*[_type == "levels"]{
        title,
        icon,
        level_title,
        main_contents[] {
          title,
          content
        }
      }
      `);

      setLevels(levels);
    };

    fetchLevels();
  }, []);

  useEffect(()=>{
    console.log(levels);
  },[levels])


  const gradientsForLevels = [
    'from-green-500 to-yellow-500',
    'from-sky-500 to-violet-500',
    'from-rose-500 to-amber-500',
    'from-blue-500 to-green-500',
  ];

  return (
    <div className="grid gap-10 md:gap-10 my-10 max-w-2xl">
      {/* heading  */}
      <div className="flex items-center gap-3 mb-16">
        {/* arrow left  */}
        <img src="/arrow-down.svg" alt="arrow" className="w-12" />
        {/* text  */}
        <H1 className={"text-nowrap"}>See what you'll learn</H1>
        {/* arrow right  */}
        <img src="/arrow-down.svg" alt="arrow" className="w-12" />
      </div>

      {/* levels */}

      <div className="grid gap-20">
        {levels?.map((level, index) => (
          <>
            <LevelCard key={level?.title} level={level} gradient={gradientsForLevels[index % gradientsForLevels.length]} />
          </>
        ))}
      </div>
    </div>
  );
};

export default WhatWillYouLearn;
