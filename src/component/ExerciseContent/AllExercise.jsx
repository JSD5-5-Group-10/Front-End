import React from "react";
import { Link } from "react-router-dom";

function AllExercise() {
  const data = [
    {
      title: "Yoga",
      imgSrc:
        "https://drive.google.com/uc?id=1ac0TttcdlGiTQJqTa9aSnepGii6xeJXy",
      altText: "yoga img",
      description:
        "Spiritual discipline based on a science, which focuses on mind and body",
      router: "/yogaPage"
    },
    {
      title: "Running",
      imgSrc:
        "https://drive.google.com/uc?id=1fyjE-yDQwA0QOVK6lukz8WDZMN1vwpXx",
      altText: "running img",
      description:
        "Foot racing over a variety of distances and courses, popular sports in nearly all times and places",
      router: "/runningPage"  
    },
    {
      title: "Thai Boxing",
      imgSrc:
        "https://drive.google.com/uc?id=1sUyURiEbC6jvFeVkfiCey8fJ5xhMvLH7",
      altText: "boxing img",
      description: "Combat Sport (martial art) has been developed in Thailand",
      router: "/thaiBoxingPage"
    },
    {
      title: "Weight Training",
      imgSrc:
        "https://drive.google.com/uc?id=1r8mkjX6rfXWrvAYO5jBgBw1N1c8XYnnv",
      altText: "weight img",
      description: "System of physical conditioning using free weights",
      router: "/weightPage"
    },
    {
      title: "Aerobics",
      imgSrc:
        "https://drive.google.com/uc?id=1mAgZEdxYEBU4EOhWFPWG_72zVpRYfO4u",
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
              className="rounded-2xl opacity-70 hover:shadow-md hover:shadow-[#8278D9] hover:opacity-100"
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