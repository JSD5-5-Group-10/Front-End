import React from "react";

export const Yoga = () => {
  const data = [
    {
      title: "10 Minutes-Yoga",
      iframe: "https://www.youtube.com/embed/j7rKKpwdXNE?si=DsLX8s3tfq7q8Ump",
      description: "This course is perfect for the absolute complete beginner",
    },
    {
      title: "20 Minutes-Yoga",
      iframe: "https://www.youtube.com/embed/v7AYKMP6rOE?si=uqlecSMudc9V_XJ_",
      description:
        "This course is builded the foundation of your own yoga practice",
    },
    {
      title: "30 Minutes-Yoga",
      iframe: "https://www.youtube.com/embed/AB3Y-4a3ZrU?si=palSLmCo0GLNqHyh",
      description:
        "This course is included foundational elements for a sustainable practice",
    },
    {
      title: "40 Minutes-Yoga",
      iframe: "https://www.youtube.com/embed/OQ6NfFIr2jw?si=xRJ_0-P4VY3-YhKq",
      description: "This course is focused on foundation and flexibility",
    },
    {
      title: "50 Minutes-Yoga",
      iframe: "https://www.youtube.com/embed/fLlFSWgK2y4?si=e5zjR8SGmQJqliQ5",
      description: "This course is helped acknowledge our feelings",
    },
    {
      title: "60 Minutes-Yoga",
      iframe: "https://www.youtube.com/embed/qSG7PsdZG04?si=2YQ-_6WDbVCUPaki",
      description: "This course is for weight loss and total body workout",
    },
  ];

  return (
    <div className="">
      <h1 className="text-3xl md:text-5xl font-medium text-center my-[20px] m-auto">
        Yoga Content
      </h1>
      <div className="place-items-center grid grid-cols-1 gap-5 min-[900px]:grid-cols-2 min-[1215px]:grid-cols-3 md:mx-[10px] md:gap-y-[110px] lg:gap-y-[80px]">
        {data.map((item, index) => (
          <div key={index}>
            <h2 className="text-xl text-center font-medium mb-2">
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
};

// function YogaVideo() {
//   const data = [
//     {
//       title: "10 Minutes-Yoga",
//       iframe: "https://www.youtube.com/embed/j7rKKpwdXNE?si=DsLX8s3tfq7q8Ump",
//       description: "This course is perfect for the absolute complete beginner",
//     },
//     {
//       title: "20 Minutes-Yoga",
//       iframe: "https://www.youtube.com/embed/v7AYKMP6rOE?si=uqlecSMudc9V_XJ_",
//       description:
//         "This course is builded the foundation of your own yoga practice",
//     },
//     {
//       title: "30 Minutes-Yoga",
//       iframe: "https://www.youtube.com/embed/AB3Y-4a3ZrU?si=palSLmCo0GLNqHyh",
//       description:
//         "This course is included foundational elements for a sustainable practice",
//     },
//     {
//       title: "40 Minutes-Yoga",
//       iframe: "https://www.youtube.com/embed/OQ6NfFIr2jw?si=xRJ_0-P4VY3-YhKq",
//       description: "This course is focused on foundation and flexibility",
//     },
//     {
//       title: "50 Minutes-Yoga",
//       iframe: "https://www.youtube.com/embed/fLlFSWgK2y4?si=e5zjR8SGmQJqliQ5",
//       description: "This course is helped acknowledge our feelings",
//     },
//     {
//       title: "60 Minutes-Yoga",
//       iframe: "https://www.youtube.com/embed/qSG7PsdZG04?si=2YQ-_6WDbVCUPaki",
//       description: "This course is for weight loss and total body workout",
//     },
//   ];

//   return (
//     <div className="">
//       <h1 className="text-3xl md:text-5xl font-medium text-center my-[20px] m-auto">
//         Yoga Content
//       </h1>
//       <div className="place-items-center grid grid-cols-1 gap-5 min-[900px]:grid-cols-2 min-[1215px]:grid-cols-3 md:mx-[10px] md:gap-y-[110px] lg:gap-y-[80px]">
//         {data.map((item, index) => (
//           <div>
//             <h2 className="text-xl text-center font-medium mb-2">
//               {item.title}
//             </h2>
//             <div className="relative w-auto h-auto" key={index}>
//               <iframe
//                 src={item.iframe}
//                 allow="fullscreen"
//                 className="rounded-xl object-cover
//                 w-[400px] h-[220px]
//                 md:w-[320px] md:h-[180px]
//                 min-[1000px]:h-[180px]  min-[1000px]:w-[320px]
//                 min-[1215px]:h-[180px]  min-[1215px]:w-[320px]
//                 hover:shadow-md hover:shadow-[#8278D9] hover:scale-105"
//               />
//               <p className="absolute hidden text-justify text-sm italic max-w-[100%] mt-2 md:inline">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default YogaVideo;
