import { useState } from "react";
import Navbar from "../../component/Navbar";
import ActivityForm from "../../component/Activity/ActivityForm";

function ActivityFormPage() {
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
  console.log(activity);

  return (
    <div className="md:flex">
      <div className="">
        <Navbar />
      </div>
      <div className="flex justify-center mx-auto">
        <ActivityForm Data={Data} />
      </div>
    </div>
  );
}

export default ActivityFormPage;
