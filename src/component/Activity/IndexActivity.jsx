import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopupActivity from "./PopupActivity";
import PicData from "../funtion/PicData";
import BtnLeft from "../../component/Activity/assets/left.svg";
import BtnRight from "../../component/Activity/assets/right.svg";
import Yogalogo from "./assets/yogalogo.png";
import Yoga from "./assets/yoga.svg";
import Run from "./assets/run.svg";
import Thaiboxing from "./assets/thaiboxing.svg";
import Weight from "./assets/weight.svg";
import Aerobics from "./assets/aerobics.svg";

const IndexActivity = ({ act_type }) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userActivity = await axios.get(
          `https://backend-group10.onrender.com/api/activity?_limit=3&_page=${currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!userActivity) {
          return console.log("error");
        }
        // console.log(userActivity.data.data.activity);
        setData(userActivity.data?.data[0].activity);
        setFilter(userActivity.data?.data[0].activity);
      } catch (error) {
        console.log(error);
      }
      if (!token) {
        return navigate("/login");
      }
    };
    fetchData();
  }, [token]);

  //Delete
  const deleteData = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(
        `https://backend-group10.onrender.com/api/activity/delete`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            act_id: id,
          },
        }
      );
      console.log("DELETE", response.status);
      console.log(response);
      if (response.status === 200) {
        toast.success("Delete successfully.");
        setTimeout(() => {
          location.reload();
        }, 3000);
      }
    } catch (err) {
      toast.error("Failed: " + err.message);
    }
  };

  // console.log(PicData);
  // console.log(image);
  // console.log(data);
  //import data
  const [filter, setFilter] = useState([]);
  const filterType = (type) => {
    setFilter(
      data.filter((item) => {
        return item.act_type === type;
      })
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const pageNumbers = Math.ceil(filter.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filter.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="z-0 ">
      <div className="flex flex-col z-0 items-center lg:flex lg:flex-row lg:w-full lg:justify-between px-20">
        <div className="flex items-center z-0">
          <h1 className="text-2xl mr-3 font-medium lg:text-3xl lg:font-medium lg:my-2">
            Activity Card{" "}
          </h1>
          {Array.from({ length: pageNumbers }).map((_, index) => (
            <div key={index} className="">
              <button
                className="btn  mx-2 "
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex items-center text">
          <div className="menu menu-horizontal text-white px-1 z-50">
            <li>
              <details>
                <summary className="text-2xl font-medium text-black lg:text-3xl lg:font-medium lg:my-2">
                  Filter
                </summary>
                <ul className="p-1 bg-[#8278d9]/90">
                  <li>
                    <button onClick={() => setFilter(data)}>All</button>
                  </li>
                  <li>
                    <button onClick={() => filterType("Run")}>Run</button>
                  </li>

                  <li>
                    <button onClick={() => filterType("Yoga")}>Yoga</button>
                  </li>

                  <li>
                    <button onClick={() => filterType("Aerobics")}>
                      Aerobics
                    </button>
                  </li>
                  <li>
                    <button onClick={() => filterType("KitaMuaythai")}>
                      Boxing
                    </button>
                  </li>
                  <li>
                    <button onClick={() => filterType("Training")}>
                      Weight
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </div>
        </div>
        <div className="dropdown dropdown-right  z-50 lg:hidden">
          <label tabIndex={0} className="btn m-1">
            Filter
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] text-white bg-[#8278d9]/90 menu p-2 shadow  rounded-box w-52"
          >
            <li>
              <button onClick={() => setFilter(data)}>All</button>
            </li>
            <li>
              <button onClick={() => filterType("Run")}>Run</button>
            </li>

            <li>
              <button onClick={() => filterType("Yoga")}>Yoga</button>
            </li>

            <li>
              <button onClick={() => filterType("Aerobics")}>Aerobics</button>
            </li>
            <li>
              <button onClick={() => filterType("KitaMuaythai")}>Boxing</button>
            </li>
            <li>
              <button onClick={() => filterType("Training")}>Weight</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
        {currentItems.map((item, index) => {
          //ประกาศโมดูลคู่กับ map เพื่อที่จะmap ข้อมูลเข้าpopup ได้
          const elementId = `my_modal_activity_item_${item.act_id}`;
          const elementId2 = `my_modal_activity_item_2${item.act_id}`;

          let ietem = new Date(item.created_at);
          const formattedDate = ietem.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
          });

          // console.log(setImage);
          return (
            <div
              key={index}
              className="w-[400px] h-[200px] hover:h-[300px] m-4 shadow-xl border border-[#827BD9] relative rounded-2xl flex flex-row  text-ellipsisp overflow-hidden hover:bg-[#827BD9] hover:shadow-[#827bd9] hover:drop-shadow-2xl duration-700
            lg:h-[300px] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${
                  item.act_type === "Run"
                    ? Run
                    : item.act_type === "Yoga"
                    ? Yoga
                    : item.act_type === "Aerobics"
                    ? Aerobics
                    : item.act_type === "KitaMuaythai"
                    ? Thaiboxing
                    : item.act_type === "Training"
                    ? Weight
                    : null
                })`,
              }}
            >
              <dialog id={elementId} className="modal">
                <div className="modal-box">
                  <div className="card">
                    <div className=" mb-1">Activity Type : {act_type}</div>
                    <PopupActivity item={item} />
                  </div>

                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
              <dialog id={elementId2} className="modal">
                <div className="modal-box flex flex-col">
                  <div className="card">
                    <div className=" mb-1">Do u wanna delete {act_type}</div>
                  </div>
                  <button
                    className={` h-10 px-5 max-w-[100px] text-indigo-100 transition-colors duration-150 bg-[#7D5CF5] rounded-lg focus:shadow-outline hover:bg-indigo-800`}
                    onClick={() => deleteData(item.act_id)}
                  >
                    YES
                  </button>
                  <div className="modal-action">
                    <form method="dialog">
                      <button
                        className={` h-10 px-5  text-indigo-100 transition-colors duration-150 bg-[#7D5CF5] rounded-lg focus:shadow-outline hover:bg-indigo-800`}
                      >
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>

              <h1 className="p-3 text-lg text-white">{index + 1}</h1>

              <div className="p-2 mr-3 flex items-center absolute ">
                {item.icon}
              </div>

              <div className="absolute w-full h-full bg-black/60 text-white rounded-xl flex flex-col items-center justify-center ">
                <div className="w-full">
                  <h2 className="uppercase absolute top-10 right-3 z-10  my-4 px-2 py-5 rounded-full bg-[#7D5CF5]">
                    {formattedDate}
                  </h2>
                </div>
                <div className=" mb-1 pr-20">
                  Activity Type :{" "}
                  <span className="text-xl font-medium text-[#b09aff]">
                    {item.act_type}
                  </span>
                </div>
                <div className="mb-1 pr-20">Name : {item.act_name}</div>
                <div className="text-xl mb-1 pr-20 font-medium">
                  {item.duration} mins
                </div>

                <div className="group hidden group-hover:inline-flex lg:inline-flex pr-20">
                  Description : {item.act_desc}
                </div>
                <div className="w-full">
                  <h2 className="uppercase absolute top-1 right-3 underline">
                    Total Cal: {item.cal_burn}
                  </h2>
                </div>
              </div>

              <div className="z-10 w-full flex items-end justify-end gap-3 m-5 ">
                <button
                  className={` h-10 px-5  text-indigo-100 transition-colors duration-150 bg-[#7D5CF5] rounded-lg focus:shadow-outline hover:bg-indigo-800`}
                  onClick={() =>
                    document.getElementById(elementId).showModal(item.act_id)
                  }
                >
                  EDIT
                </button>
                <button
                  className={` h-10 px-5  text-indigo-100 transition-colors duration-150 bg-[#7D5CF5] rounded-lg focus:shadow-outline hover:bg-indigo-800`}
                  onClick={() =>
                    document.getElementById(elementId2).showModal(item.act_id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default IndexActivity;
