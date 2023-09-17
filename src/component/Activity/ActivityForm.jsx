import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ActivityForm = ({Data}) => {

        const [type, setType] = useState("");
        const [name, setName] = useState("");
        const [descrition, setDescrition] = useState("");
        const [startdate, setStartdate] = useState("");
        const [enddate, setEnddate] = useState("");
        const [time, setTime] = useState(0);
        const [weight, setWeight] = useState(0);
        
    const saveData = (e) => {
        e.preventDefault();
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
        
    }

    return (
    <div className="w-[425px] flex flex-col justify-center m-5">
        <div className="flex flex-col items-center">
            <h1 className="text-2xl underline font-bold ">ActivityForm</h1>

        <form onSubmit={saveData} className="m-1 mt-3">
            
            <label className="max-w-[378px] h-[58px] mt-4 flex transparent">
                <span className="w-[188px] font-bold flex items-center justify-center border-r-2">
                    ชื่อกิจกรรม
                </span>
            </label>

            <div className="flex items-center pl-4 justify-between max-w-[378px] bg-gray-200 rounded-t-lg border-gray-500 border-b">
              
              <input
                type="radio"
                className="h-4 w-4"
                value="Run"
                name="type"
                onChange={(e) => setType(e.target.value)}
                required
              />
              <label className="text-blank m-1">Run</label>
              <input
                type="radio"
                className="h-4 w-4"
                value="Yoga"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="text-blank m-1">Yoga</label>
              <input
                type="radio"
                className="h-4 w-4"
                value="Aerobics"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="text-blank m-1">Aerobics</label>
              <input
                type="radio"
                className="h-4 w-4"
                value="Muaythai"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="text-blank m-1">Kita Muaythai</label>
              <input
                type="radio"
                className="h-4 w-4"
                value="Training"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="text-blank m-1 mr-3">Weight training</label>
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
 
    </div>  
    </div>
    )
}
export default ActivityForm;