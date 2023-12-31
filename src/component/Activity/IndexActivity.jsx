import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopupActivity from "./PopupActivity";
import Yoga from "./assets/yoga.svg";
import Run from "./assets/run.svg";
import Thaiboxing from "./assets/thaiboxing.svg";
import Weight from "./assets/weight.svg";
import Aerobics from "./assets/aerobics.svg";

const IndexActivity = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_API;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userActivity = await axios.get(`${apiKey}/api/activity`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!userActivity) {
          return console.log("error");
        }
        // console.log(userActivity.data.data.activity);
        const data = userActivity.data?.data[0].activity;
        setData(
          data.sort((a, b) => {
            if (a.created_at < b.created_at) return -1;
            if (a.created_at > b.created_at) return -2;
            return 0;
          })
        );
        setFilter(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
      if (!token) {
        return navigate("/login");
      }
    };
    fetchData();
  }, [token]);
  // console.log(Yoga);
  //Delete
  const deleteData = async (id) => {
    // console.log(id);
    try {
      const response = await axios.delete(
        `${apiKey}/api/activity/delete`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            act_id: id,
          },
        }
      );
      // console.log("DELETE", response.status);
      // console.log(response);
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
  const showNextButton = pageNumbers > 0; // ตรวจสอบว่ามีหน้ามากกว่า 5 หรือไม่
  // console.log(currentItems);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="z-0 flex flex-col  justify-center items-center bg-white dark:text-cyan-50 text-black dark:bg-gray-800 ">
      <div className="flex flex-col z-0 items-center lg:flex lg:flex-row lg:w-full lg:justify-between px-20 lg:gap-3">
        <div className="flex flex-row items-center z-0">
          <h1 className="text-2xl mr-3 font-bold lg:text-3xl lg:font-bold lg:my-2">
            Activity Card{" "}
          </h1>
          <div className="flex flex-row items-center font-bold">
            {Array.from({ length: pageNumbers }).map((_, index) => (
              <div key={index} className="flex items-center font-bold">
                {showNextButton && index === 1 ? (
                  <>
                    {currentPage > 1 ? (
                      <button
                        className="btn mx-2 text-white rounded-full border-solid border-2 border-[#4351CC] font-bold text-lg hover:black dark:hover:bg-black dark:bg-gray-700 dark:text-white"
                        onClick={() => paginate(currentPage - 1)}
                      >
                        &lt;
                      </button>
                    ) : null}
                    <div className="text-center text-xl font-medium mx-2">
                      {currentPage}
                    </div>
                    {currentPage < pageNumbers ? (
                      <button
                        className="btn mx-2 text-white rounded-full border-solid border-2 border-[#4351CC] font-bold text-lg hover:black dark:hover:bg-black dark:bg-gray-700 dark:text-white"
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === pageNumbers}
                      >
                        &gt;
                      </button>
                    ) : null}
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex  lg:items-center lg:justify-center">
          <div className="menu menu-horizontal  px-1">
            <li>
              <details>
                <summary className="text-2xl dropdown z-50 font-medium hover:text-white hover:bg-black dark:hover:bg-black dark:text-cyan-50 text-black lg:text-3xl lg:font-medium lg:my-2">
                  Filter
                </summary>
                <ul className="p-1 z-10 bg-black text-white max-w-[100px]">
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
          <label
            tabIndex={0}
            className="btn m-1 text-black border-none mt-3 bg-indigo-200 hover:bg-indigo-600 "
          >
            Filter
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-50 max-w-[100px] text-white bg-black menu p-2 shadow  rounded-box w-52"
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
      <div className="mt-5 -z-10 h-full lg:grid lg:h-full lg:grid-cols-2 lg:gap-x-10 ">
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
              className="w-[350px] h-[200px] hover:h-[300px] m-4 shadow-xl border-none relative rounded-2xl flex flex-row  text-ellipsisp overflow-hidden hover:bg-indigo-500 dark:hover:shadow-indigo-500 hover:shadow-black hover:drop-shadow-2xl duration-700
            lg:h-[300px] lg:mx-auto bg-contain bg-no-repeat bg-center"
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
              <dialog id={elementId} className="modal ">
                <div className="modal-box bg-white dark:text-cyan-50 text-black dark:bg-gray-800">
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn border-none bg-red-500 text-white hover:bg-red-700">
                        Close
                      </button>
                    </form>
                  </div>
                  <div className="card">
                    <PopupActivity item={item} />
                  </div>
                </div>
              </dialog>
              <dialog id={elementId2} className="modal">
                <div className="modal-box flex flex-col">
                  <div className="card">
                    <div className=" mb-1 ">
                      Do u wanna delete{" "}
                      <span className="text-indigo-600">
                        {" "}
                        {index + 1}. {item.act_type}
                      </span>
                    </div>
                  </div>

                  <div className="modal-action">
                    <form method="dialog">
                      <button
                        className={` h-10 px-5 max-w-[100px] mx-3 text-indigo-100 transition-colors duration-150 bg-indigo-600 rounded-lg focus:shadow-outline hover:bg-indigo-800`}
                        onClick={() => deleteData(item.act_id)}
                      >
                        YES
                      </button>
                      <button
                        className={` h-10 px-5 item  transition-colors duration-150  rounded-lg focus:shadow-outline bg-red-500 text-white hover:bg-red-700`}
                      >
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>

              <h1 className="p-3 text-lg text-black dark:text-white">
                {index + 1 + indexOfFirstItem}
              </h1>

              <div className="p-2 mr-3 flex items-center  absolute ">
                {item.icon}
              </div>

              <div className="absolute w-full h-full bg-black/60 text-white rounded-xl flex flex-col items-center justify-center ">
                <div className="w-full">
                  <h2 className="uppercase absolute  right-4 z-10  my-6 px-1 py-2 bottom-12  lg:px-2 lg:py-5 rounded-full bg-indigo-600 lg:bottom-20">
                    {formattedDate}
                  </h2>
                </div>
                <div className=" mb-1 pr-20 mr-15">
                  Activity Type :{" "}
                  <span className="text-xl font-medium text-[#fff] dark:text-[#ff85ea]">
                    {item.act_type}
                  </span>
                </div>
                <div className="mb-1 pr-20 mr-15 break-all text-center">
                  Name : {item.act_name}
                </div>
                <div className="text-xl mb-1 font-medium  pr-20 mr-15">
                  {item.duration} mins
                </div>

                <div className="group hidden group-hover:inline-flex lg:inline-flex pr-20 mr-15 break-all text-center">
                  Description : {item.act_desc}
                </div>
                <div className="w-full">
                  <h2 className="uppercase absolute top-1 right-3 underline">
                    Total Cal: {item.cal_burn}
                  </h2>
                </div>
              </div>

              <div className="z-10 w-full flex items-end justify-end gap-3 m-2 lg:m-5 ">
                <button
                  className={` h-10 px-5  text-indigo-100 transition-colors duration-150 bg-indigo-600 rounded-lg focus:shadow-outline hover:bg-indigo-800`}
                  onClick={() =>
                    document.getElementById(elementId).showModal(item.act_id)
                  }
                >
                  EDIT
                </button>
                <button
                  className={` h-10 px-5  text-indigo-100 transition-colors duration-150 bg-indigo-600 rounded-lg focus:shadow-outline hover:bg-indigo-800`}
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
