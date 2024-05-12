import React from "react";
import Banner from "../components/Banner";
import VideoCard from "../components/youtube-videos/VideoCard";

const YoutubeVideos = () => {

  const videos = [
    {
      thumbnail : "https://i.ytimg.com/vi/lAFbKzO-fss/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzwrq0jp1Kua9fejZF79Kq1Malbw",
      title : "MERN Stack Development",
      description : "Master MERN stack by building real world projects",
      link : "https://www.youtube.com/watch?v=2Vf1D-rUMwE"
    },
    {
      thumbnail : "https://i.ytimg.com/vi/lAFbKzO-fss/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzwrq0jp1Kua9fejZF79Kq1Malbw",
      title : "MERN Stack Development",
      description : "Master MERN stack by building real world projects",
      link : "https://www.youtube.com/watch?v=2Vf1D-rUMwE"
    },
    {
      thumbnail : "https://i.ytimg.com/vi/lAFbKzO-fss/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzwrq0jp1Kua9fejZF79Kq1Malbw",
      title : "MERN Stack Development",
      description : "Master MERN stack by building real world projects",
      link : "https://www.youtube.com/watch?v=2Vf1D-rUMwE"
    },
    {
      thumbnail : "https://i.ytimg.com/vi/lAFbKzO-fss/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCzwrq0jp1Kua9fejZF79Kq1Malbw",
      title : "MERN Stack Development",
      description : "Master MERN stack by building real world projects",
      link : "https://www.youtube.com/watch?v=2Vf1D-rUMwE"
    },
  ]

  return (
    <>
      <div className="min-h-screen py-40 px-5 md:px-10 lg:px-16 xl:px-[15%]">
        <Banner text="Youtube Videos" />

        {/* courses  */}

        <div className="grid gap-10 lg:grid-cols-3 mt-20 place-items-center">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </>
  );
};

export default YoutubeVideos;
