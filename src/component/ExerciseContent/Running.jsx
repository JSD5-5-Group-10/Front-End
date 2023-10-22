import React from 'react'

export const Running = () => {
  return (
    <div><RunningVideo/></div>
  )
}

function RunningVideo () {
  const data = [
    {
      title: "10 Minutes-Improve Running Time",
      iframe:
        "https://www.youtube.com/embed/pd0fh-nIjXM?si=O8BSH-fwyggQgYSk",
      description:
        "This course is a dramatic effect on improving your run times",
    },
    {
      title: "20 Minutes-Improve Running Endurance",
      iframe: "https://www.youtube.com/embed/cC5EoB1VijI?si=drZrqwWbOVOgs6S4",
      description: 
        "This course is neglected other vital muscle groups that are imperative to improving your endurance",
    },
    {
      title: "5 Minutes-Stretching and Recovery",
      iframe: "https://www.youtube.com/embed/Jx5f4nIq1dM?si=zFBF8bjgpKZck4uC",
      description: 
        "This course is relaxed your muscle groups",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-medium text-center my-[20px]">
        Running Content
      </h1>
      <div className="place-items-center grid grid-cols-1 gap-5 md:grid-cols-3 md:mx-[10px] md:gap-y-[110px]">
        {data.map((item, index) => ( 
           <div>
            <h2 className="text-xl text-center font-medium mb-2">{item.title}</h2>
              <div className="relative w-auto h-auto" key={index}>
                <iframe
                src={item.iframe}
                allow="fullscreen"
                className="rounded-xl object-cover w-[300px] h-[169px] md:w-[400px] md:h-[225px] 
                           opacity-70 hover:shadow-md hover:shadow-[#8278D9] hover:opacity-100 hover:scale-105"
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
      
export default RunningVideo;