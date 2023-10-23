import React from "react";
import Navbar from "../../component/Navbar";
import { Running } from "../../component/ExerciseContent/Running";

export const RunningPage = () => {
  return (
    <>
      <div className="flex max-w-[1380px] mx-auto bg-white text-black dark:bg-gray-800 dark:text-cyan-50 ">
      <div className="absolute z-50 md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:inline">
        <Navbar />
      </div>
        <div className="mx-auto">
          <Running />
        </div>
      </div>
    </>
  );
};
