import { useState } from "react";

import "./App.css";
import ActivityForm from "./component/Activity";


function App() {
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
    </>
  );
}

export default App;
