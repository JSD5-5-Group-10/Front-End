import React, { useContext, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { authActions } from "../redux/store";
import { useDispatch } from "react-redux";
import { googleLogout } from "@react-oauth/google";
import { ToggleDarkmode } from "./ToggleDarkmode";
import FitbodLogo from "./Activity/assets/fitbod.png";
import darkLogo from "./Activity/assets/darkfitbod.png";
import { DarkModeContext } from "./DarkmodeContext";
export default function Navbar() {
  const [isHidden, setIsHidden] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const theme = useContext(DarkModeContext);
  const dark = theme.darkMode;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsHidden(!isHidden);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isDesktop = () => {
    setIsOpen(isOpen);
  };

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      navigate("/login");
      googleLogout();
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  const navListMainPage = () => {
    return (
      <div className="z-50 ">
        <div className="flex justify-center  text-indigo-500">
          <h1 className="absolute font-bold  dark:text-cyan-50 text-xl">
            FITBOD
          </h1>
          {dark ? (
            <img
              src={darkLogo}
              className="w-1/4 my-5 mt-6 dark:text-white"
              alt="FitbodLogo"
            />
          ) : (
            <img
              src={FitbodLogo}
              className="w-1/4 my-5 mt-6 dark:text-white"
              alt="FitbodLogo"
            />
          )}
        </div>
        <h1 className=" text-indigo-500 text-xl  text-center dark:text-cyan-50 font-bold">
          MENU
        </h1>
        <hr className="my-2 text-gray-600" />
        <div className="font-bold ">
          <ul className=" ">
            <Link to="/Home">
              <li className="text-lg p-2.5 mt-3 flex items-end rounded-md px-4 duration-300 cursor-pointer hover:bg-black hover:text-white text-[#5446C9] dark:text-cyan-50 dark:hover:text-indigo-600 hover:animate-pulse">
                Home
              </li>
            </Link>
            <Link to="/profilePage">
              <li className="text-lg p-2.5 mt-3 flex items-end rounded-md px-4 duration-300 cursor-pointer hover:bg-black hover:text-white text-[#5446C9] dark:text-cyan-50 dark:hover:text-indigo-600 hover:animate-pulse">
                Profile
              </li>
            </Link>
            <Link to="/calculate">
              <li className="text-lg p-2.5 mt-3 flex items-end rounded-md px-4 duration-300 cursor-pointer hover:bg-black hover:text-white text-[#5446C9] dark:text-cyan-50 dark:hover:text-indigo-600 hover:animate-pulse">
                CAL Calculator
              </li>
            </Link>
            <Link to="/weightloss">
              <li className="text-lg p-2.5 my-3 flex items-end rounded-md px-4 duration-300 cursor-pointer hover:bg-black hover:text-white text-[#5446C9] dark:text-cyan-50 dark:hover:text-indigo-600 hover:animate-pulse">
                Weight Calculator
              </li>
            </Link>
            {/* <li className=" p-2.5 mt-3 flex items-end rounded-md px-4 duration-300 cursor-pointer hover:bg-[#E6E1FF] text-black dark:text-cyan-50 dark:hover:text-indigo-600">
              <Link to="/Registration">Registration</Link>
            </li> */}
          </ul>
          <hr className="my-2 text-gray-600" />
        </div>
      </div>
    );
  };

  const activityNavList = () => {
    return (
      <div className="">
        <div className="w-full">
          <button
            onClick={toggleDropdown}
            className="text-lg font-bold  text-[#5446C9] ml-4 p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-black hover:text-white dark:text-cyan-50 dark:hover:text-indigo-600 hover:animate-pulse"
          >
            Exercise Content
          </button>
        </div>
        <div
          className={`${
            isHidden ? "hidden" : ""
          } p-2.5 mt-2 flex items-end px-4  duration-300 w-4/5 `}
        >
          <ul>
            <Link to="/allExercise">
              <li className="font-bold text-lg p-2 cursor-pointer mt-1 rounded-md hover:bg-black hover:text-white text-[#5446C9] dark:text-cyan-50 dark:hover:text-indigo-600 hover:animate-pulse">
                All content
              </li>
            </Link>
            <Link to="/yogaPage">
              <li className="font-bold text-lg  p-2 cursor-pointer mt-1 rounded-md hover:bg-black hover:text-white text-[#5446C9] dark:text-cyan-50 dark:hover:text-indigo-600 hover:animate-pulse">
                Yoga
              </li>
            </Link>
            <Link to="/runningPage">
              <li className="font-bold text-lg  p-2 cursor-pointer mt-1 rounded-md hover:bg-black hover:text-white text-[#5446C9] dark:text-cyan-50 dark:hover:text-indigo-600 hover:animate-pulse">
                Running
              </li>
            </Link>
            <Link to="/thaiBoxingPage">
              <li className="font-bold text-lg  p-2 cursor-pointer mt-1 rounded-md hover:bg-black hover:text-white text-[#5446C9] dark:text-cyan-50 dark:hover:text-indigo-600 hover:animate-pulse">
                KitaMuaythai
              </li>
            </Link>
            <Link to="/weightPage">
              <li className="font-bold text-lg  p-2 cursor-pointer mt-1 rounded-md hover:bg-black hover:text-white text-[#5446C9] dark:text-cyan-50 dark:hover:text-indigo-600 hover:animate-pulse">
                Weight Training
              </li>
            </Link>
            <Link to="/aerobicsPage">
              <li className="font-bold text-lg  p-2 cursor-pointer mt-1 rounded-md hover:bg-black hover:text-white text-[#5446C9] dark:text-cyan-50 dark:hover:text-indigo-600 hover:animate-pulse">
                Aerobics
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <nav className="min-h-full ">
      <div>
        <button
          onClick={toggleSidebar}
          className={`${
            isDesktop ? "md:hidden" : "block"
          } text-black dark:text-indigo-600 `}
        >
          <AiOutlineAlignLeft size={40} />
        </button>
        <div
          className={`sidebar ${isOpen ? "md:w-1/5 sm:1/3" : "hidden"}  
            ${isDesktop ? "md:block w-[250px]" : "hidden"} 
            sidebar min-h-[900px]  md:sticky md:h-[1210px] xl:h-screen fixed top-0 bottom-0 lg:left-0 p-2 overflow-auto bg-gray-200 text-black shadow-lg dark:bg-gray-950 dark:text-cyan-50`}
        >
          <button
            onClick={toggleSidebar}
            className={`${
              isDesktop ? "md:hidden" : "block"
            } text-black dark:text-cyan-50`}
          >
            <AiOutlineAlignLeft size={40} />
          </button>

          {navListMainPage()}
          {activityNavList()}

          <div className=" flex justify-center">
            {/* <button className={` h-10 px-5  text-indigo-100 transition-colors duration-150 bg-[#7D5CF5] rounded-lg focus:shadow-outline hover:bg-indigo-800`}>
                        <Link to="/login">Login</Link>
                    </button> */}
            <button
              onClick={handleLogout}
              className={` h-10 px-5 mt-3 text-indigo-100 transition-colors duration-150 bg-indigo-600 rounded-lg focus:shadow-outline hover:bg-black hover:animate-pulse`}
            >
              Logout
            </button>
          </div>
          {/* toggle darkmode */}
          <div className=" absolute md:top-[1px] top-11 ">
            <ToggleDarkmode />
          </div>
        </div>
      </div>
    </nav>
  );
}
