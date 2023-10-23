import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const PopupActivity = ({ item }) => {
  const [change, setChange] = useState("");
  const token = localStorage.getItem("token");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const {
    act_id,
    act_type,
    act_desc,
    act_name,
    cal_burn,
    cur_weight,
    duration,
    kg_burn,
  } = item;

  const [activityData, setActivityData] = useState({
    act_name: act_name,
    act_desc: act_desc,
    cur_weight: parseFloat(cur_weight),
    act_id: act_id,
    kg_burn: parseFloat(kg_burn),
    cal_burn: parseFloat(cal_burn),
    act_type: act_type,
    duration: parseInt(duration),
  });

  const isValidate = () => {
    console.log(activityData);
    let proceed = true;
    let errMsg = "Enter your : ";
    if (activityData.act_type === null || activityData.act_type === "") {
      proceed = false;
      errMsg += "Please Select Type ";
    }
    if (activityData.duration === "" || activityData.duration === 0) {
      proceed = false;
      errMsg += "duration ";
    }
    if (activityData.cur_weight === "" || activityData.cur_weight === 0) {
      proceed = false;
      errMsg += "Weight ";
    }
    if (!proceed) {
      toast.warning(errMsg);
      console.log(errMsg);
    }
    return proceed;
  };

  const updatedActivityData = [activityData];
  // console.log(updatedActivityData);

  const Update = async (e) => {
    e.preventDefault();
    if (isValidate()) {
      try {
        const response = await axios.put(
          `https://backend-group10.onrender.com/api/activity/update`,
          activityData,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          // console.log('Activity updated successfully');

          toast.success("Activity updated successfully");
          setTimeout(() => {
            location.reload();
          }, 3000);
        }
      } catch (err) {
        toast.error("Failed: " + err.message);
      }
    }
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

    if (activityData.act_type in METs) {
      const met = METs[activityData.act_type];
      const kcal =
        met * 0.0175 * activityData.cur_weight * activityData.duration;
      const cal = kcal / 7700;
      setActivityData({
        ...activityData,
        cal_burn: parseFloat(kcal.toFixed(2)),
        kg_burn: parseFloat(cal.toFixed(2)),
      });
    }
    setChange();
  };
  useEffect(() => {
    calculateActivity();
  }, [activityData.act_type, activityData.duration, activityData.cur_weight]);

  return (
    <div className="flex min-h-screen gap-5">
      <div className="flex flex-col items-center m-auto sm:p-10 p-5 rounded-xl shadow-lg border-2">
        <h1 className="my-5 text-center text-4xl font-bold leading-9 tracking-tight text-[#8278d9]">
          Activity Form
        </h1>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="flex" onSubmit={Update}>
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
                  value={activityData.act_type}
                  onChange={(e) =>
                    setActivityData({
                      ...activityData,
                      act_type: e.target.value,
                    })
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
                  value={activityData.act_name}
                  onChange={(e) =>
                    setActivityData({
                      ...activityData,
                      act_name: e.target.value,
                    })
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
                  value={activityData.act_desc}
                  onChange={(e) =>
                    setActivityData({
                      ...activityData,
                      act_desc: e.target.value,
                    })
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
                  value={activityData.duration}
                  onChange={(e) =>
                    setActivityData({
                      ...activityData,
                      duration: parseInt(e.target.value),
                    })
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
                  value={activityData.cur_weight}
                  onChange={(e) =>
                    setActivityData({
                      ...activityData,
                      cur_weight: parseInt(e.target.value),
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
                    activityData.cal_burn === null ? "0" : activityData.cal_burn
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
                    activityData.kg_burn === null ? "0" : activityData.kg_burn
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
    </div>
  );
};

export default PopupActivity;
