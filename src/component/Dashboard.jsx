import React from "react";
import { Dashboard1 } from "./dashboard/Dashboard1";
import BasicStacking from "./dashboard/BasicStacking";
import StraightAnglePieChart from "./dashboard/StraightAnglePieChart";
import PieChartWithCenterLabel from "./dashboard/PieChartWithCenterLabel";
import { Chartsbar } from "./dashboard/Chartsbar";

export const Dashboard = () => {
  return (
    <div className=" min-h-min"> 
     <h1 className=" text-center text-4xl font-bold py-10 text-[#131c85]">Dashboard</h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 ">
        <PieChartWithCenterLabel />
        <StraightAnglePieChart />
        <Chartsbar />
        <BasicStacking />
        <Dashboard1 />
      </div>
    </div>
  );
};
