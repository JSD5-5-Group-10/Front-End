import { useEffect, useState } from "react";
import { BiRun } from "react-icons/bi";
import { GrYoga } from "react-icons/gr";
import { GiJumpingRope } from "react-icons/gi";
import Imgyoga from "./assets/yoga.jpg";
import Running from "./assets/running.jpg";
import Arabic from "./assets/Arabic.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EditActivity from "./EditActivity";

const IndexActivity = ({ act_type }) => {
  const [data, setData] = useState([]);
  const [one, setone] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  
  function openModal(actId) {
    // Use actId in your logic, for example:
    console.log(`Editing item with act_id: ${actId}`);
    // You can also open the modal here if needed.
    document.getElementById('my_modal_1').showModal();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userActivity = await axios.get(
          "https://backend-group10.onrender.com/api/activity",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!userActivity) {
          return console.log("error");
        }
        console.log(userActivity.data.data);
        setData(userActivity.data?.data[0].activity);
      } catch (error) {
        console.log(error);
      }
      if (!token) {
        return navigate("/login");
      }
    };
    fetchData();
  }, [token]);

  console.log(token);
  console.log(data);
  return (
    <div>
      <div className=" lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[350px] h-[200px] m-4 shadow-xl border border-[#827BD9] relative rounded-2xl flex flex-row  text-ellipsisp overflow-hidden hover:bg-[#827BD9] hover:h-[400px] hover:shadow-[#827bd9] hover:drop-shadow-2xl duration-700
            lg:h-[400px] lg:hover:scale-105  "
          >

            <button className="btn z-50" onClick={() => document.getElementById('my_modal_1').showModal(item.act_id)}>EDIT</button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div className="card">
                <div className=" mb-1">Activity Type : {act_type}</div>
                <EditActivity item={item.act_id} />

                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <div className="p-2 mr-3 flex items-center absolute ">
              {item.icon}
            </div>
            <div>

            </div>
            <div className="absolute w-full h-full bg-black/60 text-white rounded-xl flex flex-col items-center justify-center ">
              <div>{item.act_id}</div>
              <div className=" mb-1">Activity Type : {item.act_type}</div>
              <div className="mb-1">Activity Name : {item.act_name}</div>
              <div className=" mb-1"> Date : {item.updated_at} mins.</div>
              <div className="hidden hover:inline-block lg:hover:inline ">
                Description : {item.act_desc}
              </div>
              <div className="w-full">
                <h2 className="uppercase absolute bottom-1 right-3 underline">
                  Total Cal: {item.cal_burn}
                </h2>
              </div>
            </div>

            <div
              className=" w-full flex flex-col justify-center items-center bg-white text-black rounded-2xl hover:bg-[#827BD9] hover:text-white bg-[length:400px] duration-200 "
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexActivity;
