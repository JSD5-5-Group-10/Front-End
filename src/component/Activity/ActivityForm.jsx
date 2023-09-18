import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import ActivityDisplay from "./ActivityDisplay";
import IndexActivity from '../Activity/index'

const test = [
    {
      id: 1,
      type: "test",
      name: "test",
      descrition: "tes",
      startdate: "2023-09-20",
      enddate: "2023-09-30",
      time: 10,
      weight: 50,
    },
  ];

const ActivityForm = () => {

        const [type, setType] = useState("");
        const [name, setName] = useState("");
        const [descrition, setDescrition] = useState("");
        const [startdate, setStartdate] = useState("");
        const [enddate, setEnddate] = useState("");
        const [time, setTime] = useState(0);
        const [weight, setWeight] = useState(0);
        const [activity, setActivity] = useState(test);
        
          const Data = (newData) => {
            setActivity((prevItem) => {
              return [newData, ...prevItem];
            });
            
          };

          console.log(activity)

    const isValidate = () => {
            let proceed = true;
            let errMsg = "Please enter the value in : ";
            if (type === null || type === "") {
              proceed = false;
              errMsg += "Please Select Activity Type..";
            }
            if (descrition === null || descrition === "" || descrition <= 10 ) {
              proceed = false;
              errMsg += "Descrition will be must more than 10 character ";
            }
            if (startdate === null || startdate === "") {
              proceed = false;
              errMsg += "Start Date ";
            }
            if (enddate === null || enddate === "") {
                proceed = false;
                errMsg += "End Date ";
              }
            if (time === null || time === "" || time <= 0) {
                proceed = false;
                errMsg += "time ";
            }
            if (weight === null || weight === "" || weight <= 0) {
                proceed = false;
                errMsg += "End Date ";
              }
            if (!proceed) {
              toast.warning(errMsg);
              console.log(errMsg);
            }
            return proceed;
          };

const saveData = (e) => {
       
    e.preventDefault();
    if (isValidate()){
            const formData = {
                id: uuidv4(),
                type: type,
                name: name,
                descrition: descrition,
                startdate: startdate,
                enddate: enddate,
                time: parseInt(time),
                weight: parseFloat(weight),
            }
    
            
                Data(formData);
                setType();
                setName("");
                setDescrition("");
                setTime(0);
                setStartdate("");
                setEnddate("");
                setWeight(0);
        }
}
    return (
       
    <div className="w-[425px] flex flex-col justify-center m-auto">
        <div className="flex flex-col items-center">
            <h1 className="text-2xl underline font-bold ">ActivityForm</h1>
        
        <form onSubmit={saveData} className="m-1 mt-3">
            
            <label className="max-w-[378px] h-[58px] mt-4 flex transparent">
                <span className="w-[188px] font-bold flex items-center justify-center border-r-2">
                    ชื่อกิจกรรม
                </span>
            </label>
            
        
        <div className="max-w-[378px] h-[58px] my-2 flex bg-gray-200 ">
            <label htmlFor="type" className="w-[188px] flex items-center justify-center">Activity Type:</label>

            <select name="type" onChange={(e)=>setType(e.target.value)} className="w-[186px]">
                <option 
                value=''>
                    Please Select Activity type 
                </option>
                <option 
                value="Run"
                >
                    Run 
                </option>
                <option 
                value="Yoga"
                >
                    Yoga 
                </option>
                <option 
                value="Aerobics" 
                >
                    Aerobics 
                </option>
                <option 
                value="KitaMuaythai"
                >
                    Kita Muaythai 
                </option>
                <option 
                value="Training"
                >
                    Weight Training 
                </option>
            </select>

        </div>
            <label className="max-w-[378px] h-[58px] my-2 flex bg-gray-200">
                <span className="w-[188px]  flex items-center justify-center  bg-gray-200">คำอธิบายกิจกรรม</span>
                <input 
                value={descrition}
                onChange={(e) => setDescrition(e.target.value)}
                type="text" 
                name="detial" 
                className=" w-[186px]" 
                placeholder="" />
            </label>
             
            <label className="max-w-[378px] h-[58px] my-2 flex bg-gray-200">
                <span className="w-[188px] flex items-center justify-center  bg-gray-200">ระยะเวลาทำกิจกรรม</span>
                <input 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="number" 
                name="duration" 
                className=" w-[186px]" 
                placeholder="" />
            </label>
            <label className="max-w-[378px] h-[58px] my-2 flex bg-gray-200">
                <span className="w-[188px] flex items-center justify-center  bg-gray-200">วันที่เริ่มทำกิจกรรม</span>
                <input 
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
                type="date" 
                name="date" 
                className="w-[186px]" 
                placeholder="" />
            </label>
            <label className="max-w-[378px] h-[58px] my-2 flex bg-gray-200">
                <span className="w-[188px] flex items-center justify-center  bg-gray-200">วันที่เสร็จสิ้นกิจกรรม</span>
                <input 
                value={startdate}
                onChange={(e) => setStartdate(e.target.value)}
                type="date" 
                name="date" 
                className="w-[186px]" 
                placeholder="" />
            </label>
            <label className="max-w-[378px] h-[58px] my-2 flex bg-gray-200">
                <span className="w-[188px] flex items-center justify-center bg-gray-200">น้ำหนักปัจจุบัน</span>
                <input 
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                type="number" 
                name="weight" 
                className=" w-[186px]" 
                placeholder="" />
            </label>
            <button type="submit" className="w-[154px] h-[58px] border mt-4 bg-green-800 text-white rounded-lg shadow-md text-2xl">CONFIRM</button>
        </form>
        <ToastContainer />
        {/* <ActivityDisplay/> */}
        {/* <IndexActivity/> */}
    </div>  
    </div>
    )
}
export default ActivityForm;