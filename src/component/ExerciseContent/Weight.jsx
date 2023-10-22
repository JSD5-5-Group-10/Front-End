import React from 'react'

export const Weight = () => {
  return (
    <div><WeightVideo /></div>
  )
}

function WeightVideo() {
  const data = [
    {
      title: "10 Minutes-Dumbell Workout",
      iframe:
        "https://www.youtube.com/embed/2IIDE46VM5I?si=IIMNu0pzYKC0krtP",
      description:
        "This course is no repeat dumbbell workout for beginner",
    },
    {
      title: "20 Minutes-Dumbell Workout",
      iframe: "https://www.youtube.com/embed/UGuDu68ZG5Y?si=JIquMX9gIvE92iVe",
      description: 
        "This course is no repeat dumbbell workout, also going to be hitting 3 squat jumps before getting our rest",
    },
    {
      title: "30 Minutes-Dumbell Workout",
      iframe: "https://www.youtube.com/embed/NZECToqXiyI?si=9caPf86kQfYi77og",
      description: 
        "This course is no repeat 50 exercises full body dumbbell workout",
    },
    {
      title: "40 Minutes-Dumbell Workout",
      iframe: " https://www.youtube.com/embed/q9MTEGfj43E?si=iH9Gj1jaat_BXzSW",
      description: 
        "This course is no repeat dumbbell workout for full body",
    },
    {
      title: "60 Minutes-Dumbell Workout",
      iframe: "https://www.youtube.com/embed/Xg4Jazg2XWc?si=PEcvOuz2bTSusVK8",
      description: 
        "This course is uninterrupted full body dumbbell workout at home",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-medium text-center my-[20px]">
        Weight Training Content
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
      
export default WeightVideo;