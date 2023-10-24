import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import aerobics from "./assets/aerobiclogo.png";
import run from "./assets/runlogo.png";
import thaiboxing from "./assets/boxinglogo.png";
import yoga from "./assets/yogalogo.png";
import training from "./assets/weightlogo.png";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

export const WeightLossSimulator = () => {
  const [type, setType] = useState("");
  const [lossWeight, setLossWeight] = useState();
  const [weight, setWeight] = useState();
  const [numberOfDays, setNumberOfDays] = useState();
  const [time, setTime] = useState(0);
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, [token]);

  useEffect(() => {
    type === "Run"
      ? setImage(run)
      : type === "Yoga"
      ? setImage(yoga)
      : type === "Aerobics"
      ? setImage(aerobics)
      : type === "KitaMuaythai"
      ? setImage(thaiboxing)
      : type === "Training"
      ? setImage(training)
      : "";

    setWeight("");
    setTime("");
    setNumberOfDays("");
    setLossWeight("");
  }, [type]);

  const calculateActivity = (e) => {
    e.preventDefault();
    const METs = {
      Run: 9.6,
      Yoga: 2.5,
      Aerobics: 5,
      KitaMuaythai: 6,
      Training: 8,
    };

    if (type in METs) {
      const met = METs[type];
      const kgtocal = lossWeight * 7700; // แคลที่ต้องลดให้ได้ทั้งหมดตามเป้าหมาย
      const kgcalOneDay = kgtocal / numberOfDays; // แคลของแต่ละวันที่ต้องทำให้ได้
      const timeByOneDay = kgcalOneDay / (met * 0.0175 * weight);
      // const kcal = met * 0.0175 * weight * time;
      if (timeByOneDay > 180) {
        return (
          toast.error("Exercising more than 3 hours per day It's a bad thing."),
          setTime(0),
          setWeight(""),
          setTime(""),
          setNumberOfDays(""),
          setLossWeight("")
        );
      }
      setTime(timeByOneDay.toFixed(2));
    } else {
      toast.error("Choose Type for Activity");
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="flex  w-full  max-w-[1380px] bg-white text-black dark:bg-gray-800 dark:text-cyan-50">
        {/* nav */}
        <div className="absolute z-50 md:hidden">
          <Navbar />
        </div>
        <div className="hidden md:inline">
          <Navbar />
        </div>
        <div className="flex justify-center items-center mx-auto">
          <div className="flex flex-col gap-10 justify-center items-center my-20 xl:flex xl:flex-row">
            {/* Form */}
            <div className="w-[400px] h-[440px] xl:h-[640px] justify-center flex flex-col items-center m-auto sm:p-10 p-5 rounded-xl dark:border-gray-700 shadow-lg border-2">
              <h1 className="my-5 text-center text-3xl font-bold leading-9 tracking-tight text-indigo-600">
                Kilogram Calculator
              </h1>
              <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={calculateActivity} className="flex">
                  <div className="space-y-6">
                    {/* activity type */}
                    <div className="flex leading-10 w-full">
                      <label
                        htmlFor="type"
                        className="w-[200px] flex items-center justify-center bg-indigo-600 text-white font-semibold rounded-l-lg "
                      >
                        Activity Type
                      </label>
                      <select
                        name="type"
                        onChange={(e) => setType(e.target.value)}
                        className="w-full bg-white text-black dark:bg-gray-800 dark:text-cyan-50 appearance-none rounded-r-lg px-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent ring-2 ring-inset ring-indigo-600"
                      >
                        <option
                          className="text-[#131c85] dark:text-cyan-50"
                          value=""
                        >
                          Select Activity type
                        </option>
                        <option
                          className="text-[#131c85] dark:text-cyan-50"
                          value="Run"
                        >
                          Run
                        </option>
                        <option
                          className="text-[#131c85] dark:text-cyan-50"
                          value="Yoga"
                        >
                          Yoga
                        </option>
                        <option
                          className="text-[#131c85] dark:text-cyan-50"
                          value="Aerobics"
                        >
                          Aerobics
                        </option>
                        <option
                          className="text-[#131c85] dark:text-cyan-50"
                          value="KitaMuaythai"
                        >
                          Kita Muaythai
                        </option>
                        <option
                          className="text-[#131c85] dark:text-cyan-50"
                          value="Training"
                        >
                          Weight Training
                        </option>
                      </select>
                    </div>
                    {/* descrition */}
                    <label className="flex rounded-lg leading-10">
                      <span className="sm:w-[120px] w-[200px] flex items-center justify-center bg-indigo-600 text-white font-semibold rounded-l-lg focus:ring-indigo-600 focus:border-transparent ring-1 ring-inset ring-indigo-600">
                        Duration
                      </span>
                      <input
                        value={numberOfDays}
                        onChange={(e) => setNumberOfDays(e.target.value)}
                        type="number"
                        name="detial"
                        className="[&::-webkit-inner-spin-button]:appearance-none sm:w-auto w-full  bg-white text-black dark:bg-gray-800 dark:text-cyan-50 px-2 leading-snug rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-3 focus:ring-indigo-800  focus:border-transparent ring-2 ring-inset ring-indigo-600"
                        placeholder="Day"
                        maxLength="50"
                        rows="2"
                      />
                    </label>
                    {/* duration  */}
                    <label className="flex rounded-lg leading-10">
                      <span className="sm:w-[120px] w-[200px] flex items-center justify-center bg-indigo-600 text-white font-semibold rounded-l-lg focus:ring-indigo-600 focus:border-transparent ring-1 ring-inset ring-indigo-600">
                        Weight (KG)
                      </span>
                      <input
                        value={lossWeight}
                        onChange={(e) => setLossWeight(e.target.value)}
                        type="number"
                        name="duration"
                        className="[&::-webkit-inner-spin-button]:appearance-none sm:w-auto w-full  bg-white text-black dark:bg-gray-800 dark:text-cyan-50 px-2 leading-snug rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-3 focus:ring-indigo-800  focus:border-transparent ring-2 ring-inset ring-indigo-600"
                        placeholder="Target Weight"
                      />
                    </label>
                    {/* Weight */}
                    <label className="flex rounded-lg leading-10">
                      <span className="sm:w-[120px] w-[200px] flex items-center justify-center bg-indigo-600 text-white font-semibold rounded-l-lg focus:ring-indigo-600 focus:border-transparent ring-1 ring-inset ring-indigo-600">
                        Current weight
                      </span>
                      <input
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        type="number"
                        name="weight"
                        className="[&::-webkit-inner-spin-button]:appearance-none sm:w-auto w-full  bg-white text-black dark:bg-gray-800 dark:text-cyan-50 px-2 leading-snug rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-3 focus:ring-indigo-800  focus:border-transparent ring-2 ring-inset ring-indigo-600"
                        placeholder="Kilogram"
                      />
                    </label>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className=" flex w-1/2 justify-center rounded-full rounded-tl-lg bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
            <div className="w-[400px] h-[440px] xl:h-[640px] justify-center flex flex-col items-center m-auto sm:p-10 p-5 rounded-xl dark:border-gray-700 shadow-lg border-2">
              <h1 className="my-5 text-center text-3xl font-bold leading-9 tracking-tight text-indigo-600">
                Weight Calculator
              </h1>
              <div
                className="w-[350px] h-[200px] m-4 shadow-xl border border-indigo-600 relative rounded-2xl flex flex-row break-all  text-ellipsisp overflow-hidden 
                hover:bg-indigo-600 hover:shadow-indigo-600 hover:drop-shadow-2xl duration-700
            xl:h-[400px] xl:w-[350px] lg:hover:scale-105  "
              >
                <div className="p-2 mr-3 flex items-center absolute ">
                  {/* {item.icon} */}
                </div>

                <div className="absolute w-full h-full bg-black/60 text-white rounded-xl flex flex-col flex-wrap items-center justify-center">
                  <div className=" mb-1">Activity type : {type || "Type"}</div>
                  {/* <div className="mb-1">Activity Name : {name || "JSD5"}</div> */}
                  {/* <div className=" mb-1">  : </div> */}
                  <div className="mb-1">
                    Duration : {numberOfDays || "0"} Day
                  </div>
                  <div className="mb-1">
                    Target weight : {lossWeight || "0"} Kg
                  </div>
                  <div className="w-full">
                    <h2 className="uppercase absolute bottom-1 right-3 ">
                      {time > 0 && time < 60 && (
                        <div className="text-end">
                          <span className="text-xs text-green-600">
                            Very easy, not even an hour a day. <br />
                          </span>
                        </div>
                      )}
                      {time >= 60 && time < 120 && (
                        <div className="text-end">
                          <span className="text-xs text-yellow-600">
                            It's still possible. <br />
                          </span>
                        </div>
                      )}
                      {time >= 120 && time < 180 && (
                        <div className="text-center">
                          <span className="text-xs text-red-600">
                            Difficult, requires a lot of discipline
                            <br />
                          </span>
                        </div>
                      )}
                      <span className="text-sm text-center font-bold">
                        You should exercise for{" "}
                        <p className="font-bold">{time || 0} minutes daily.</p>
                      </span>
                    </h2>
                  </div>
                </div>

                <div
                  className=" w-full flex flex-col bg-cover bg-center justify-center items-center bg-white text-black rounded-2xl hover:bg-[#827BD9] hover:text-white  duration-200 "
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
              </div>
              <div className="mt-4">
                <h1 className="text-xs text-center text-red-500">
                  ***This program is calculated by METs, you should exercise and
                  Control your food at the same time.***
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
