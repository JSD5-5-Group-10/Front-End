import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import aerobics from "./assets/aerobiclogo.png";
import run from "./assets/runlogo.png";
import thaiboxing from "./assets/boxinglogo.png";

import yoga from "./assets/yogalogo.png";
import training from "./assets/weightlogo.png";
import Navbar from "../Navbar";
export const WeightLossSimulator = () => {
  // เรียกใช้ calculateDays เมื่อ startDate หรือ endDate เปลี่ยนแปลง
  // useEffect(() => {
  //   calculateDays();
  // }, [startDate, endDate]);

  // const calculateDays = () => {
  //   if (startDate && endDate) {
  //     const start = new Date(startDate);
  //     const end = new Date(endDate);
  //     const daysDifference = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  //     setNumberOfDays(daysDifference + 1);

  //     // Create an array of dates within the range
  //     const range = [];
  //     for (let i = 0; i <= daysDifference; i++) {
  //       const currentDate = new Date(start);
  //       currentDate.setDate(currentDate.getDate() + i);
  //       range.push(currentDate.toDateString());
  //     }
  //     setDateRange(range);

  //     // Initialize selected dates to all false
  //     setSelectedDates(new Array(range.length).fill(false));
  //   } else {
  //     setNumberOfDays(0);
  //     setDateRange([]);
  //     setSelectedDates([]);
  //   }
  // };

  const [type, setType] = useState("");
  const [lossWeight, setLossWeight] = useState();
  const [weight, setWeight] = useState();
  const [numberOfDays, setNumberOfDays] = useState();
  const [time, setTime] = useState(0);
  const [image, setImage] = useState();

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
      Muaythai: 6,
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
          toast.error(
            "การออกกำลังกายมากกว่า 3 ชั่วโมงต่อวัน เป็นสิ่งไม่ดีนะครับ"
          ),
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
    <div className="flex ">
      <div className="mr-4">
        <Navbar />
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col gap-10 justify-center items-center my-20 xl:flex xl:flex-row">
          {/* display activitycard before submit */}
          <div className="flex flex-col items-center m-auto sm:p-10 p-5 rounded-xl shadow-lg border-2">
            <h1 className="my-5 text-center text-4xl font-bold leading-9 tracking-tight text-[#8278d9]">
              Weight Loss Simulator
            </h1>
            <div
              className="w-[350px] h-[200px] m-4 shadow-xl border border-[#827BD9] relative rounded-2xl flex flex-row break-all  text-ellipsisp overflow-hidden hover:bg-[#827BD9] hover:h-[400px] hover:shadow-[#827bd9] hover:drop-shadow-2xl duration-700
            xl:h-[400px] xl:w-[250px] lg:hover:scale-105  "
            >
              <div className="p-2 mr-3 flex items-center absolute ">
                {/* {item.icon} */}
              </div>

              <div className="absolute w-full h-full bg-black/60 text-white rounded-xl flex flex-col flex-wrap items-center justify-center ">
                <div className=" mb-1">ถ้าเป็นกิจกรรม : {type || "Type"}</div>
                {/* <div className="mb-1">Activity Name : {name || "JSD5"}</div> */}
                {/* <div className=" mb-1">  : </div> */}
                <div className="mb-1">
                  ระยะเวลาที่จะใช้ : {numberOfDays || "0"} วัน
                </div>
                <div className="mb-1">ต้องการลด : {lossWeight || "0"} Kg</div>
                <div className="w-full">
                  <h2 className="uppercase absolute bottom-1 right-3 ">
                    {time > 0 && time < 60 && (
                      <div className="text-end">
                        <span className="text-xs text-green-600">
                          สบายๆเลยอะดิ ไม่ถึงชั่วโมงต่อวันเอง <br />
                        </span>
                      </div>
                    )}
                    {time >= 60 && time < 120 && (
                      <div className="text-end">
                        <span className="text-xs text-yellow-600">
                          ยังพอเป็นไปได้นะ <br />
                        </span>
                      </div>
                    )}
                    {time >= 120 && time < 180 && (
                      <div className="text-end">
                        <span className="text-xs text-red-600">
                          ยาก ต้องมีวินัยอย่างมาก <br />
                        </span>
                      </div>
                    )}
                    <span className="text-lg">
                      คุณต้องออกกำลัง {time || 0} นาที ต่อ 1 วัน!!
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
                ***โปรแกรมนี้คำนวนโดย METs คุณควรออกกำลังกาย และ
                ควบคุมอาหารไปพร้อมๆกัน***
              </h1>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col items-center mt-10 m-auto sm:p-10 p-5 rounded-xl shadow-lg border-2">
            <h1 className="my-5 text-center text-4xl font-bold leading-9 tracking-tight text-[#8278d9]">
              Simulate Form
            </h1>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={calculateActivity} className="flex">
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

                  {/* descrition */}
                  <label className="flex rounded-lg leading-10">
                    <span className="w-1/2 flex items-center justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                      ภายในกี่วัน
                    </span>
                    <input
                      value={numberOfDays}
                      onChange={(e) => setNumberOfDays(e.target.value)}
                      type="number"
                      name="detial"
                      className="[&::-webkit-inner-spin-button]:appearance-none px-2 placeholder:text-sm rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                      placeholder="Day"
                      maxLength="50"
                      rows="2"
                    />
                  </label>
                  {/* duration  */}
                  <label className="flex rounded-lg leading-10">
                    <span className="w-1/2 flex items-center  justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                      น้ำหนักที่ต้องการลด (KG)
                    </span>
                    <input
                      value={lossWeight}
                      onChange={(e) => setLossWeight(e.target.value)}
                      type="number"
                      name="duration"
                      className="[&::-webkit-inner-spin-button]:appearance-none px-2 placeholder:text-sm rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                      placeholder="Kilogram"
                    />
                  </label>
                  {/* Weight */}
                  <label className="flex rounded-lg leading-10">
                    <span className="w-1/2 flex items-center  justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                      น้ำหนักปัจจุบัน
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
        </div>
      </div>
    </div>
  );
};
