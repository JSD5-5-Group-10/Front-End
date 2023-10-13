import { useEffect, useState } from "react";
import { BiRun } from "react-icons/bi";
import { GrYoga } from "react-icons/gr";
import { GiJumpingRope } from "react-icons/gi";
import Imgyoga from "./assets/yoga.jpg";
import Running from "./assets/running.jpg";
import Arabic from "./assets/Arabic.jpg";
import axios from "axios";

// const test = [
//   {
//     id: 1,
//     type: "Run",
//     name: "อยากผอม",
//     descrition: "ออกกำลังกายกันเถอะ",
//     startdate: "2023-09-01",
//     enddate: "2023-09-03",
//     time: 60,
//     weight: 60,
//     icon: <BiRun size={100} />,
//     img: Running,
//   },
//   {
//     id: 2,
//     type: "Arabic",
//     name: "อยากผอม",
//     descrition: "ออกกำลังกายกันเถอะ",
//     startdate: "2023-09-01",
//     enddate: "2023-09-03",
//     time: 60,
//     weight: 60,
//     icon: <GiJumpingRope size={100} />,
//     img: Arabic,
//   },
//   {
//     id: 3,
//     type: "Yoga",
//     name: "อยากผอม",
//     descrition: "ออกกำลังกายกันเถอะ",
//     startdate: "2023-09-01",
//     enddate: "2023-09-03",
//     time: 60,
//     weight: 60,
//     icon: <GrYoga size={100} />,
//     img: Imgyoga,
//   },
//   {
//     id: 4,
//     type: "Yoga",
//     name: "อยากผอม",
//     descrition: "ออกกำลังกายกันเถอะ",
//     startdate: "2023-09-01",
//     enddate: "2023-09-03",
//     time: 60,
//     weight: 60,
//     icon: <GrYoga size={100} />,
//     img: Imgyoga,
//   },
// ];

const IndexActivity = () => {
  const [data, setData] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    try {
      const userActivity = axios.get(
        "https://back-end-tp-test.onrender.com/api/activity",
        {
          params: {
            id: token,
          },
        }
      );
      if (!userActivity) {
        return console.log("error");
      }
      console.log(userActivity);
      setData(userActivity);
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(data);
  return (
    <div>
      <div className=" lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
        {/* {data.map((item, index) => (
          <div
            key={index}
            className="w-[350px] h-[200px] m-4 shadow-xl border border-[#827BD9] relative rounded-2xl flex flex-row  text-ellipsisp overflow-hidden hover:bg-[#827BD9] hover:h-[400px] hover:shadow-[#827bd9] hover:drop-shadow-2xl duration-700
            lg:h-[400px] lg:hover:scale-105  "
          >
            <div className="p-2 mr-3 flex items-center absolute ">
              {item.icon}
            </div>
            
            <div className="absolute w-full h-full bg-black/60 text-white rounded-xl flex flex-col items-center justify-center ">
              <div className=" mb-1">Activity Type : {item.type}</div>
              <div className="mb-1">Activity Name : {item.name}</div>
              <div className=" mb-1"> Date : {item.startdate} mins.</div>
              <div className="hidden hover:inline-block lg:hover:inline ">
                Description : {item.descrition}
              </div>
              <div className="w-full">
                <h2 className="uppercase absolute bottom-1 right-3 underline">
                  Total Cal: XXX
                </h2>
              </div>
            </div>

            <div
              className=" w-full flex flex-col justify-center items-center bg-white text-black rounded-2xl hover:bg-[#827BD9] hover:text-white bg-[length:400px] duration-200 "
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default IndexActivity;
