import React from "react";

export const ThaiBoxing = () => {
  return (
    <div>
      <ThaiBoxingVideo />
    </div>
  );
};

function ThaiBoxingVideo() {
  const data = [
    {
      title: "15 Minutes-Thai Boxing Basic",
      iframe: "https://www.youtube.com/embed/lzyG6RPpY9k?si=lbVj5tksbII-p5PX",
      description: "This course is a basic footwork drills for beginner",
    },
    {
      title: "30 Minutes Thai Boxing (Heat Mode)",
      iframe: "https://www.youtube.com/embed/HgToyguBcpY?si=iZa-NZM4ep6Vw5vD",
      description:
        "This course is a heat mode workout using body weight exercises,explosive plyometrics,fight specific movements",
    },
    {
      title: "30 Minutes Thai Boxing (Hell Mode)",
      iframe: "https://www.youtube.com/embed/np2wWwTS5Ec?si=G0EjhGAVP3Ed6ZeR",
      description:
        "This course is a hell mode workout using body weight exercises,explosive plyometrics,fight specific movements",
    },
    {
      title: "30 Minutes Thai Boxing (Suffering Mode)",
      iframe: "https://www.youtube.com/embed/TTsBl835QLs?si=62nle7rx7iLyen50",
      description:
        "This course is a suffering mode workout using body weight exercises,explosive plyometrics,fight specific movements",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-medium text-center my-[20px] py-5">
        KitaMuaythai Content
      </h1>
      <div className="place-items-center grid grid-cols-1 gap-5 min-[900px]:grid-cols-2 min-[1215px]:grid-cols-3 md:mx-[10px] md:gap-y-[110px] lg:gap-y-[80px]">
        {data.map((item, index) => (
          <div>
            <h2 className="text-md text-center font-medium mb-2">
              {item.title}
            </h2>
            <div className="relative w-auto h-auto" key={index}>
              <iframe
                src={item.iframe}
                allow="fullscreen"
                className="rounded-xl object-cover
                w-[400px] h-[220px]  
                md:w-[320px] md:h-[180px] 
                min-[1000px]:h-[180px]  min-[1000px]:w-[320px]
                min-[1215px]:h-[180px]  min-[1215px]:w-[320px]
                hover:shadow-md hover:shadow-[#8278D9] hover:scale-105"
              />
              <p className="absolute hidden text-justify text-sm italic max-w-[100%] mt-2 md:inline">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThaiBoxingVideo;
