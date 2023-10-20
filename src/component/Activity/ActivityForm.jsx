import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import aerobics from "../../../public/aerobics.svg";
import run from "../../../public/run.svg";
import thaiboxing from "../../../public/thaiboxing.svg";
import weight from "../../../public/weight.svg";
import yoga from "../../../public/yoga.svg";

const ActivityForm = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [descrition, setDescrition] = useState("");
  const [time, setTime] = useState(0);
  const [weight, setWeight] = useState(0);
  const [kcal, setKcal] = useState(null);
  const [kilogram, setKilogram] = useState(null);
  const cal = `${kcal} kcal`;
  const kilo = `${kilogram} kg`;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [image, setImage] = useState();

  const year = new Date().getFullYear();
  const month = String(new Date().getMonth() + 1).padStart(2, "0");
  const day = String(new Date().getDate()).padStart(2, "0");
  const formattedDateTime = `${day}-${month}-${year}`;

  useEffect(() => {
    type === "Run"
      ? setName("Run") && setImage(run)
      : type === "Yoga"
      ? setName("Yoga") && setImage(yoga)
      : type === "Aerobics"
      ? setName("Aerobics") && setImage(aerobics)
      : type === "KitaMuaythai"
      ? setName("KitaMuaythai") && setImage(thaiboxing)
      : type === "Training"
      ? setName("Weight Training") && setImage(weight)
      : "";
  }, [type]);
  console.log(image);
  const isValidate = () => {
    let proceed = true;
    let errMsg = "Enter your : ";
    if (type === null || type === "") {
      proceed = false;
      errMsg += "Please Select Type ";
    }
    if (name === null || name === "") {
      proceed = false;
      errMsg += "Activity Name ";
    }
    if (descrition === null || descrition === "") {
      proceed = false;
      errMsg += "Descrition ";
    }
    if (time === null || time === 0) {
      proceed = false;
      errMsg += "Time ";
    }
    if (weight === null || weight === 0) {
      proceed = false;
      errMsg += "Weight ";
    }
    if (!proceed) {
      toast.warning(errMsg);
      console.log(errMsg);
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
          {
            act_type: type,
            act_name: name,
            act_desc: descrition,
            duration: parseInt(time),
            cur_weight: parseFloat(weight),
            cal_burn: parseFloat(kcal),
            kg_burn: parseFloat(kilogram),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("POST", response.status);
        console.log(response);
        if (response.status === 200) {
          toast.success("Update successfully.");
        }
        navigate("/");
      } catch (err) {
        toast.error("Failed: " + err.message);
      }
    }
  };

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token]);

  // calculate kcal and kilogram
  const calculateActivity = () => {
    const METs = {
      Run: 9.6,
      Yoga: 2.5,
      Aerobics: 5,
      KitaMuaythai: 6,
      Training: 8,
    };

    if (type in METs) {
      const met = METs[type];
      const kcal = met * 0.0175 * weight * time;
      const cal = kcal / 7700;
      setKcal(kcal.toFixed(2));
      setKilogram(cal.toFixed(2));
    }
  };

  useEffect(() => {
    calculateActivity();
  }, [type, time, weight]);

  return (
    <div className="flex min-h-screen gap-5">
      <div className="flex flex-col items-center m-auto sm:p-10 p-5 rounded-xl shadow-lg border-2">
        <h1 className="my-5 text-center text-4xl font-bold leading-9 tracking-tight text-[#8278d9]">
          Activity Form
        </h1>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={saveData} className="flex">
            <div className="space-y-6">
              {/* activity type */}
              <div className="flex leading-10">
                <label
                  htmlFor="type"
                  className="w-1/2 flex items-center justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500"
                >
                  Activity Type
                </label>
                <select
                  name="type"
                  onChange={(e) => setType(e.target.value)}
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={descrition}
                  onChange={(e) => setDescrition(e.target.value)}
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
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
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
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
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
                  value={kcal === null ? "0" : cal}
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
                  value={kcal === null ? "0" : kilo}
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
      <div className="hidden lg:flex flex-col items-center m-auto sm:p-10 p-5 rounded-xl shadow-lg border-2">
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

          <div className="absolute w-full h-full bg-black/50 text-white rounded-xl flex flex-col items-center justify-center font-bold">
            <div className=" mb-1">Activity Type : {type || "Type"}</div>
            <div className="mb-1">Activity Name : {name || "JSD5"}</div>
            <div className="mb-1">Time : {time || "0"} Minute</div>
            <div className="mb-1">Weight : {weight || "0"} KG</div>
            <div className=" mb-1 break-words ">Date : {formattedDateTime}</div>
            <div className="mb-1 text-center break-all">
              Description : {descrition || "Description"}
            </div>
            <div className="w-full">
              <h2 className="uppercase absolute bottom-1 right-3 underline">
                <span className="text-[#ff6c3b] underline">Total Burn:</span>{" "}
                {kcal || 0} kcal / {kilogram || 0} kg
              </h2>
            </div>
          </div>
          <div
            className="bg-[length:180px] bg-no-repeat bg-center  w-full flex flex-col justify-center items-center bg-white text-black rounded-2xl hover:bg-[#827BD9] hover:text-white duration-200 "
            // style={{
            //   backgroundImage: `url(${image})`,
            // }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default ActivityForm;
