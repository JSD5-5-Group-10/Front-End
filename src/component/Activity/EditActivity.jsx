import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditActivity = ({item})  => {
    const {act_id}= item
    const [actId, setId] = useState(act_id);
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
  
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, "0");
    const day = String(new Date().getDate()).padStart(2, "0");
    const formattedDateTime = `${day}-${month}-${year}`;
    useEffect(() => {
        setId(act_id);
      }, [act_id]);
console.log(actId)
    return (
        <div className="flex min-h-screen gap-5">
            <div className="flex flex-col items-center m-auto sm:p-10 p-5 rounded-xl shadow-lg border-2">
                <h1 className="my-5 text-center text-4xl font-bold leading-9 tracking-tight text-[#8278d9]">
                    Activity Form
                </h1>
                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="flex">
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
                            <div>dasdasd{item.act_id}</div>
                            {/* activity-name */}
                            <label className="flex rounded-lg leading-10">
                                <span className="w-1/2 px-2 flex items-center justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                                    Activity Name
                                </span>
                                <input
                                    value={actId}
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
                                    value={actId}
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
        </div>
    )
};
export default EditActivity;