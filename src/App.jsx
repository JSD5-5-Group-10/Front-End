import ActivityForm from "./component/Activity/ActivityForm";

import "./App.css";
import { useState } from "react";
import ActivityDisplay from "./component/Activity/ActivityDisplay";


function App() {
    const test = [
    {
      id: 1,
      type: "Run",
      name: "อยากผอม",
      descrition: "ออกกำลังกายกันเถอะ",
      startdate: "2023-09-01",
      enddate: "2023-09-03",
      time: 60,
      weight: 60,
    },
  ];
  const [activity, setActivity] = useState(test);

  const Data = (newData) => {
    setActivity((prevItem) => {
      return [newData, ...prevItem];
    });
    
  };
  console.log(activity)


  return (
    <>
      
      <ActivityForm Data={Data} />
      {activity.map((item) => {
        <ActivityDisplay 
          key={item.id}
          type={item.type}
          name={item.name}
          descrition={item.descrition}
          startDate={item.startdate}
          endDate={item.enddate}
          time={item.time}
          weight={item.weight}
          />
      })}
      
    </>
  );
}

export default App;
