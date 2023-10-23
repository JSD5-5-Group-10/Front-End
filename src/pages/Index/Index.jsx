import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import IndexActivity from "../../component/Activity/IndexActivity";
import { BiMessageSquareAdd } from "react-icons/bi";

export const Index = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[1360px] md:flex h-screen">
        <div className="z-10">
          <Navbar />
        </div>

        <div className="w-full z-0">
          <div className="flex justify-center items-center">
            <Link to="/ActivityForm" className="flex items-center">
              <h1 className="text-3xl font-medium my-8">Add Activity</h1>
              <span className="pl-2">
                <BiMessageSquareAdd size={40} />
              </span>
            </Link>
          </div>

          <div className="flex justify-center z-0">
            <IndexActivity />
          </div>
        </div>
      </div>
    </div>
  );
};
