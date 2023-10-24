import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import IndexActivity from "../../component/Activity/IndexActivity";
import { BiMessageSquareAdd } from "react-icons/bi";

export const Index = () => {
  return (
    <div className="flex justify-center min-h-[900px] h-[1200px] md:h-[1300px] lg:h-[1200px] xl:h-screen dark:text-cyan-50 text-black dark:bg-gray-800 bg-white ">
      <div className="flex w-full max-w-[1380px] md:flex md:h-screen">
        <div className="z-10 h-[1200px] max-h-screen absolute md:static">
          <Navbar />
        </div>

        <div className="w-full h-screen z-0 ">
          <div className="flex justify-center items-center  dark:text-cyan-50 text-black dark:bg-gray-800 bg-white">
            <Link
              to="/ActivityForm"
              className=" flex items-center rounded-full hover:scale-105 hover:text-indigo-600 duration-200 dark:hover:text-indigo-400"
            >
              <h1 className="text-3xl  font-medium my-8">Add Activity</h1>
              <span className="pl-2 hover:scale-10">
                <BiMessageSquareAdd size={40} className=" " />
              </span>
            </Link>
          </div>

          <div className="flex justify-center ">
            <IndexActivity />
          </div>
        </div>
      </div>
    </div>
  );
};
