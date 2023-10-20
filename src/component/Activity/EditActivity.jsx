
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";

const PopupActivity = ({item}) => {
  
  const { act_id, title: act_type,act_desc, act_name ,cal_burn,created_at
    ,cur_weight,duration,kg_burn}= item
  const [actName, setName] = useState(act_name);
  const [desc, setDesc] = useState(act_desc);
  const [Time, setTime] = useState(created_at);
  const [Weight, setweight] = useState(cur_weight);
  const [id, setid] = useState(act_id);
  const [kcal, setkcal] = useState(kg_burn);
  const [cal, setcal] = useState(cal_burn);
  const [actType,setType] = useState(act_type);


  
  const [data, setData] = useState([]);
  useEffect(() => {
    setName(act_name);
    setDesc(act_desc);
    setType(act_type)
  }, [act_name, act_desc,act_type]);
 
  const handleEdit = (e) => {
    e.preventDefault();
    editTutorial(id, actName, desc,actType);
    setName(act_name);
    setDesc(act_desc);
    setType(act_type)
  }
  console.log(item)
  return (
    <div className="flex min-h-screen gap-5">
      <div className="flex flex-col items-center m-auto sm:p-10 p-5 rounded-xl shadow-lg border-2">
        <h1 className="my-5 text-center text-4xl font-bold leading-9 tracking-tight text-[#8278d9]">
          Activity Form
        </h1>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="flex">
            <div>{item}</div>
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
                  onChange={(e) => actType(e.target.value)}
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
                  value={actName}
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
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
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
                  value={Time}
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
                  value={Weight}
                  onChange={(e) => setweight(e.target.value)}
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
                  value={kcal === null ? "0" : Weight}
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

  )
}

export default PopupActivity;
