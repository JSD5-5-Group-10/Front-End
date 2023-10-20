import React from "react";

export const Aerobics = () => {
  return (
    <div>
      <AerobicVideo />
    </div>
  );
};

function AerobicVideo() {
  const data = [
    {
      title: "10 Minutes-Aerobic",
      iframe: "https://www.youtube.com/embed/BCAU80_FTmk?si=_R09qVKnN7tkZPo4",
      description: "This course is 5 exercise within 10 minutes for beginner",
    },
    {
      title: "20 Minutes-Aerobic",
      iframe: "https://www.youtube.com/embed/hXpUos_QUtE?si=9NCj3ksU3KWI4x4n",
      description: "This course is a light and chill exercise for beginner",
    },
    {
      title: "30 Minutes-Aerobic",
      iframe: "https://www.youtube.com/embed/QGO7YLkhDTk?si=XMHfCndslk3IN1Ju",
      description:
        "This course is a burn exercise to reduce cellulite for beginner",
    },
    {
      title: "40 Minutes-Aerobic",
      iframe: "https://www.youtube.com/embed/ufbSNW_qxsM?si=L1O4nX47stP8zCZD",
      description: "This course is an intermediate burn exercise for all level",
    },
    {
      title: "50 Minutes-Aerobic",
      iframe: "https://www.youtube.com/embed/A7MzUGK5PZs?si=NZY_-p632Aw_kkT0",
      description:
        "This course is no repeat exercise and challenge your endurance",
    },
    {
      title: "60 Minutes-Aerobic",
      iframe: "https://www.youtube.com/embed/_xvWe8m6z8M?si=t0oAYDvmAIFR-BnS",
      description:
        "This course is a full routine exercise for all lever within 1 hour",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-medium text-center my-[20px]">
        Aerobic Content
      </h1>
      <div className="place-items-center grid grid-cols-1 gap-5 md:grid-cols-3 md:mx-[10px] md:gap-y-[110px] lg:gap-y-[80px]">
        {data.map((item, index) => (
          <div key={index}>
            <h2 className="text-xl text-center font-medium mb-2">
              {item.title}
            </h2>
            <div className="relative w-auto h-auto" key={index}>
              <iframe
                src={item.iframe}
                allow="fullscreen"
                className="rounded-xl object-cover w-[300px] h-[169px] md:w-[400px] md:h-[225px] 
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

export default AerobicVideo;
