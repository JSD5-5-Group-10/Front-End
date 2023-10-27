import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import IndexActivity from "../../component/Activity/IndexActivity";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const Index = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex justify-center min-h-[1000px] h-[1200px] md:h-[1300px] lg:h-[1200px] xl:h-screen dark:text-cyan-50 text-black dark:bg-gray-800 bg-white">
      <div className="flex w-full max-w-[1380px] md:flex md:h-screen">
        <div className="absolute z-50 md:hidden">
          <Navbar />
        </div>
        <div className="hidden md:inline z-10 h-[1200px] max-h-screen md:static">
          <Navbar />
        </div>

        <div className="w-full h-full z-0 mt-10 mb-10 ">
          <div className="flex justify-center items-center dark:text-cyan-50 text-black dark:bg-gray-800 bg-white ">
            <Link
              to="/ActivityForm"
              className=" flex items-center rounded-full hover:scale-105 hover:drop-shadow-md hover:text-black rounded-bl-lg hover:animate-bounce duration-200 dark:hover:text-[#5446C9] border-solid border-2 border-[#4351CC] z-20 "
            >
              <h1 className="text-3xl font-bold my-8 pl-4">Add Activity</h1>
              <span className="pl-2 hover:scale-10 pr-4">
                <BiMessageSquareAdd size={40} className=" " />
              </span>
            </Link>
          </div>

          <div className="flex justify-center mt-10">
            <IndexActivity />
          </div>
        </div>
      </div>
    </div>
  );
};
