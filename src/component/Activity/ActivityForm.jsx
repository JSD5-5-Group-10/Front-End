import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import aerobics from "../../public/aerobics.svg";
import run from "../../public/run.svg";
import thaiboxing from "../../public/thaiboxing.svg";
import weights from "../../public/weight.svg";
import yoga from "../../public/yoga.svg";

const ActivityForm = () => {
  const [addActivity, setAddActivity] = useState({
    act_type: "",
    act_name: "",
    act_desc: "",
    duration: 0,
    cur_weight: 0,
  });
  const [image, setImage] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const month = String(new Date().getMonth() + 1).padStart(2, "0");
  const day = String(new Date().getDate()).padStart(2, "0");
  const formattedDateTime = `${day}-${month}-${year}`;

  const isValidate = () => {
    let proceed = true;
    let errMsg = "Enter your : ";
    if (addActivity.act_type === "") {
      proceed = false;
      errMsg += "Please Select Type ";
    }
    if (addActivity.act_name === "") {
      proceed = false;
      errMsg += "Activity Name ";
    }
    if (addActivity.act_desc === "") {
      proceed = false;
      errMsg += "Descrition ";
    }
    if (addActivity.duration === 0) {
      proceed = false;
      errMsg += "Time ";
    }
    if (addActivity.cur_weight === 0) {
      proceed = false;
      errMsg += "Weight ";
    }
    if (!proceed) {
      toast.warning(errMsg);
    }
    return proceed;
  };

  // post add activity
  const saveData = async (e) => {
    e.preventDefault();
    if (isValidate()) {
      try {
        const response = await axios.post(
          `https://backend-group10.onrender.com/api/activity/add`,
          addActivity,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log("POST", response.status);
        // console.log(response);
        if (response.status === 200) {
          toast.success("Update successfully.");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      } catch (err) {
        toast.error("Failed: " + err.message);
      }
    }
  };

  //If there is no token, return to the Login page.
  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token]);

  const setChange = () => {
    addActivity.act_type === "Run"
      ? setImage(run)
      : addActivity.act_type === "Yoga"
      ? setImage(yoga)
      : addActivity.act_type === "Aerobics"
      ? setImage(aerobics)
      : addActivity.act_type === "KitaMuaythai"
      ? setImage(thaiboxing)
      : addActivity.act_type === "Training"
      ? setImage(weights)
      : null;
  };

  // calculate kcal and kilogram
  const calculateActivity = () => {
    const METs = {
      Run: 9.6,
      Yoga: 2.5,
      Aerobics: 5,
      KitaMuaythai: 6,
      Training: 8,
    };
    if (addActivity.act_type in METs) {
      const met = METs[addActivity.act_type];
      const kcal = met * 0.0175 * addActivity.cur_weight * addActivity.duration;
      const kgburn = kcal / 7700;
      setAddActivity({
        ...addActivity,
        cal_burn: kcal.toFixed(2),
        kg_burn: kgburn.toFixed(2),
      });
    }
    setChange();
  };

  useEffect(() => {
    calculateActivity();
  }, [addActivity.act_type, addActivity.duration, addActivity.cur_weight]);

  return (
    <div className="flex min-h-screen gap-5">
      <div className="flex flex-col items-center m-auto sm:p-10 p-5 rounded-xl shadow-lg border-2">
        <h1 className="my-5 text-center text-4xl font-bold leading-9 tracking-tight text-[#8278d9]">
          Activity Form
        </h1>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={saveData} className="flex max-[370px]:text-[0.7rem] ">
            <div className="space-y-6">
              {/* activity type */}
              <div className="flex leading-10 ">
                <label
                  htmlFor="type"
                  className="w-1/2 flex items-center justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500"
                >
                  Activity Type
                </label>
                <select
                  name="type"
                  value={addActivity.act_type}
                  onChange={(e) =>
                    setAddActivity({ ...addActivity, act_type: e.target.value })
                  }
                  className="appearance-none rounded-r-lg px-2 focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                >
                  <option className="text-[#131c85]" value="">
                    Please Select Activity type
                  </option>
                  <option className="text-[#131c85]" value="Run">
                    Run
                  </option>
                  <option className="text-[#131c85]" value="Yoga">
                    Yoga
                  </option>
                  <option className="text-[#131c85]" value="Aerobics">
                    Aerobics
                  </option>
                  <option className="text-[#131c85]" value="KitaMuaythai">
                    Kita Muaythai
                  </option>
                  <option className="text-[#131c85]" value="Training">
                    Weight Training
                  </option>
                </select>
              </div>
              {/* activity-name */}
              <label className="flex rounded-lg leading-10">
                <span className="w-1/2 px-2 flex items-center justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Activity Name
                </span>
                <input
                  maxLength={25}
                  value={addActivity.act_name}
                  onChange={(e) =>
                    setAddActivity({ ...addActivity, act_name: e.target.value })
                  }
                  type="name"
                  name="detial"
                  className="px-2 rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                  placeholder="Activity Name"
                />
              </label>
              {/* descrition */}
              <label className="flex rounded-lg leading-10">
                <span className="w-1/2 flex items-center justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Description
                </span>
                <input
                  value={addActivity.act_desc}
                  onChange={(e) =>
                    setAddActivity({ ...addActivity, act_desc: e.target.value })
                  }
                  type="text"
                  name="detial"
                  className="px-2 leading-snug rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                  placeholder="Descrition"
                  maxLength="50"
                  rows="2"
                />
              </label>
              {/* duration  */}
              <label className="flex rounded-lg leading-10">
                <span className="w-1/2 flex items-center  justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Duration (Min)
                </span>
                <input
                  value={addActivity.duration}
                  onChange={(e) =>
                    setAddActivity({ ...addActivity, duration: e.target.value })
                  }
                  type="number"
                  name="duration"
                  className="[&::-webkit-inner-spin-button]:appearance-none px-2 placeholder:text-sm rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                  placeholder="Minute"
                />
              </label>
              {/* Weight */}
              <label className="flex rounded-lg leading-10">
                <span className="w-1/2 flex items-center  justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Current weight
                </span>
                <input
                  value={addActivity.cur_weight}
                  onChange={(e) =>
                    setAddActivity({
                      ...addActivity,
                      cur_weight: e.target.value,
                    })
                  }
                  type="number"
                  name="weight"
                  className="[&::-webkit-inner-spin-button]:appearance-none px-2 rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                  placeholder="Kilogram"
                />
              </label>
              {/* Calories Burned  */}
              <label className="flex rounded-lg leading-10">
                <span className="w-1/2 flex items-center justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Calories Burn
                </span>
                <input
                  value={
                    addActivity.cal_burn === null
                      ? "0"
                      : `${addActivity.cal_burn} kcal`
                  }
                  type="text"
                  name="date"
                  className="bg-white px-2 rounded-r-lg placeholder:text-[#131c85] focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                  disabled
                />
              </label>
              {/* kilogram bure */}
              <label className="flex rounded-lg leading-10">
                <span className="w-1/2 flex items-center justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Kilogram Burn
                </span>
                <input
                  value={
                    addActivity.kg_burn === null
                      ? "0"
                      : `${addActivity.kg_burn} kg`
                  }
                  type="text"
                  name="date"
                  className="bg-white px-2 rounded-r-lg placeholder:text-[#131c85] focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                  disabled
                />
              </label>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className=" flex w-1/2 justify-center rounded-full rounded-tl-lg bg-[#8278d9] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  CONFIRM
                </button>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
      {/* display activitycard before submit */}
      <div className="hidden xl:flex flex-col items-center m-auto sm:p-10 p-5 rounded-xl shadow-lg border-2">
        <h1 className="my-5 text-center text-4xl font-bold leading-9 tracking-tight text-[#8278d9]">
          Activity Card
        </h1>
        <div
          className="w-[350px] h-[200px] m-4 shadow-xl border border-[#827BD9] relative rounded-2xl flex flex-row  text-ellipsisp overflow-hidden hover:bg-[#827BD9] hover:h-[400px] hover:shadow-[#827bd9] hover:drop-shadow-2xl duration-700
            lg:h-[400px] lg:hover:scale-105  "
        >
          <div className="p-2 mr-3 flex items-center absolute ">
            {/* {item.icon} */}
          </div>

          <div className="absolute w-full h-full bg-black/40 text-white rounded-xl flex flex-col items-center justify-center font-bold">
            <div className=" mb-1">
              Activity Type : {addActivity.act_type || "Type"}
            </div>
            <div className="mb-1">
              Activity Name : {addActivity.act_name || "JSD5"}
            </div>
            <div className="mb-1">
              Time : {addActivity.duration || "0"} Minute
            </div>
            <div className="mb-1">
              Weight : {addActivity.cur_weight || "0"} KG
            </div>
            <div className=" mb-1 break-words ">Date : {formattedDateTime}</div>
            <div className="mb-1 text-center break-all">
              Description : {addActivity.act_desc || "Description"}
            </div>
            <div className="w-full">
              <h2 className="uppercase absolute bottom-1 right-3 underline">
                <span className="text-[#ff6c3b] underline">Total Burn:</span>{" "}
                {addActivity.cal_burn || 0} kcal / {addActivity.kg_burn || 0} kg
              </h2>
            </div>
          </div>
          <div
            className="bg-[length:300px_300px] bg-no-repeat bg-center  w-full flex flex-col justify-center items-center bg-white text-black rounded-2xl hover:bg-[#827BD9] hover:text-white duration-200 "
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default ActivityForm;
