import React from 'react'

export const ThaiBoxing = () => {
  return (
    <div><ThaiBoxingVideo /></div>
  )
}

function ThaiBoxingVideo() {
  const data = [
    {
      title: "15 Minutes-Thai Boxing Basic",
      iframe:
        "https://www.youtube.com/embed/lzyG6RPpY9k?si=lbVj5tksbII-p5PX",
      description: 
        "This course is a basic footwork drills for beginner",
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
      <h1 className="text-4xl md:text-5xl font-medium text-center my-[20px]">
        Thai Boxing Content
      </h1>
      <div className="place-items-center grid grid-cols-1 gap-5 md:grid-cols-3 md:mx-[10px] md:gap-y-[110px] lg:gap-y-[80px]">
        {data.map((item, index) => ( 
           <div>
            <h2 className="text-xl text-center font-medium mb-2">{item.title}</h2>
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
  )
}

export default ThaiBoxingVideo;