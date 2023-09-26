import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import IndexActivity from "../../component/Activity/IndexActivity";
import { BiMessageSquareAdd } from "react-icons/bi";

export const Index = () => {
    return (
        <>
            <div className="z-50 absolute">
                <Navbar />
            </div>
            <div className="flex justify-center items-center pt-10 pl-40">
                <Link to="/ActivityForm" className="flex items-center">
                    <h1 className="text-3xl font-medium">Add Activity</h1>
                    <span className="pl-2">
                        <BiMessageSquareAdd size={40} />
                    </span>
                </Link>
            </div>

            <div className=" w-6/6  flex justify-center items-center ml-60 mt-10 mr-10 ">
                <div className="w-full h-full  bg-[#F6F7FB] border-4 rounded-lg object-scale-down grid grid-cols-1 ">
                    <div className="flex justify-center items-center ">
                        <IndexActivity />
                    </div>
                </div>
            </div>

        </>
    );
};
