import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ActivityForm = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [descrition, setDescrition] = useState("");
  const [time, setTime] = useState(0);
  const [weight, setWeight] = useState(0);
  const [kcal, setKcal] = useState(null);
  const [kilogram, setKilogram] = useState(null);
  // const [newData, setNewData] = useState(test);
  const cal = `${kcal} kcal`;
  const kilo = `${kilogram} kg`;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const year = new Date().getFullYear();
  const month = String(new Date().getMonth() + 1).padStart(2, "0");
  const day = String(new Date().getDate()).padStart(2, "0");
  // const hours = String(new Date().getHours()).padStart(2, "0");
  // const minutes = String(new Date().getMinutes()).padStart(2, "0");
  // const seconds = String(new Date().getSeconds()).padStart(2, "0");
  const formattedDateTime = `${day}-${month}-${year}`;

  // const Data = (newData) => {
  //   setNewData((prevItem) => {
  //     return [...prevItem, newData];
  //   });
  // };
  // console.log(newData);

  useEffect(() => {
    type === "Run"
      ? setName("Run")
      : type === "Yoga"
      ? setName("Yoga")
      : type === "Aerobics"
      ? setName("Aerobics")
      : type === "KitaMuaythai"
      ? setName("KitaMuaythai")
      : type === "Training"
      ? setName("Weight Training")
      : "";
  }, [type]);

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
          `https://back-end-tp-test.onrender.com/api/activity/add`,
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

  // const saveData = (e) => {
  //   e.preventDefault();
  //   if (isValidate()) {
  //     const formData = {
  //       type: type,
  //       name: name,
  //       descrition: descrition,
  //       startdate: startdate,
  //       time: parseInt(time),
  //       weight: parseFloat(weight),
  //       kcal: parseFloat(kcal),
  //       kilogram: parseFloat(kilogram),
  //     };
  //     Data(formData);
  //     setType();
  //     setName("");
  //     setDescrition("");
  //     setTime(0);
  //     setStartdate("");
  //     setWeight(0);
  //     setKcal();
  //     setKilogram();
  //   }
  // };

  // calculate kcal and kilogram
  const calculateActivity = () => {
    const METs = {
      Run: 9.6,
      Yoga: 2.5,
      Aerobics: 5,
      Muaythai: 6,
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

          <div className="absolute w-full h-full bg-black/60 text-white rounded-xl flex flex-col items-center justify-center ">
            <div className=" mb-1">Activity Type : {type || "Type"}</div>
            <div className="mb-1">Activity Name : {name || "JSD5"}</div>
            <div className=" mb-1"> Date : {formattedDateTime}</div>
            <div className="mb-1">
              Description : {descrition || "Description"}
            </div>
            <div className="w-full">
              <h2 className="uppercase absolute bottom-1 right-3 underline">
                Total Burn: {kcal || 0} kcal / {kilogram || 0} kg
              </h2>
            </div>
          </div>

          <div
            className=" w-full flex flex-col justify-center items-center bg-white text-black rounded-2xl hover:bg-[#827BD9] hover:text-white bg-[length:400px] duration-200 "
            style={{
              backgroundImage: `url(data:image/png;base64,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)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default ActivityForm;
