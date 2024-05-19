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

  return (
    <div className="grid gap-10 md:gap-10 my-10 max-w-2xl">
      {/* heading  */}
      <div className="flex items-center gap-3">
        {/* arrow left  */}
        <img src="/arrow-down.svg" alt="arrow" className="w-12" />
        {/* text  */}
        <H1 className={"text-nowrap"}>See what you'll learn</H1>
        {/* arrow right  */}
        <img src="/arrow-down.svg" alt="arrow" className="w-12" />
      </div>

      {/* levels */}

      <div className="grid gap-10">
        {levels?.map((level, index) => (
          <>
            <LevelCard key={level?.title} level={level} />
          </>
        ))}
      </div>
    </div>
  );
};

export default WhatWillYouLearn;
