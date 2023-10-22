import React from "react";
import { Link } from "react-router-dom";
import Yogaimg from "./assets/yoga960px.jpg";
import Runimg from "./assets/running960px.jpg";
import Boxingimg from "./assets/muaythai960px.jpg";
import Weightimg from "./assets/weight960px.jpg";
import Aerobicimg from "./assets/aerobic960px.jpg";

function AllExercise(){
  const data = [
    {
      title: "Yoga",
      imgSrc: Yogaimg,
      altText: "yoga img",
      description:
        "Spiritual discipline based on a science, which focuses on mind and body",
      router: "/yogaPage"
    },
    {
      title: "Running",
      imgSrc: Runimg,
      altText: "running img",
      description:
        "Foot racing over a variety of distances and courses, popular sports in nearly all times and places",
      router: "/runningPage"  
    },
    {
      title: "Thai Boxing",
      imgSrc: Boxingimg,
      altText: "boxing img",
      description: "Combat Sport (martial art) has been developed in Thailand",
      router: "/thaiBoxingPage"
    },
    {
      title: "Weight Training",
      imgSrc: Weightimg,
      altText: "weight img",
      description: "System of physical conditioning using free weights",
      router: "/weightPage"
    },
    {
      title: "Aerobics",
      imgSrc: Aerobicimg,
      altText: "aerobics img",
      description:
        "Physical exercise of low to high intensity that depends on the aerobic energy-generating process",
      router: "/aerobicsPage"
    },
  ];

  return (
    <div className="">
      <h1 className="text-4xl md:text-5xl font-medium text-center my-[20px]">
        Exercise Content
      </h1>
      <div className="place-items-center grid grid-cols-1 gap-5 md:grid-cols-3 md:mx-[10px] md:gap-y-[110px] lg:gap-y-[80px]">
        {data.map((item, index) => (
          <div className="relative w-[300px] md:w-auto md:h-auto" key={index}>
            <Link to={item.router}>
            <img
              src={item.imgSrc}
              alt={item.altText}
              className="rounded-2xl opacity-70 hover:shadow-md hover:shadow-[#8278D9] hover:opacity-100 hover:scale-105"
            />
            </Link>
            <div className="textContainer">
              <h3 className="absolute text-3xl md:text-5xl text-white font-medium top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2">
                {item.title}
              </h3>
              <p className="absolute hidden md:inline text-base text-center italic max-w-[100%] m-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllExercise;