import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { authActions } from "../redux/store";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
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
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  const navListMainPage = () => {
    return (
      <div className="z-50">
        <h1 className="h text-indigo-100  text-center">MENU</h1>
        <hr className="my-2 text-gray-600" />
        <div>
          <ul className=" text-indigo-100">
            <li className=" p-2.5 mt-3 flex items-end rounded-md px-4 duration-300 cursor-pointer hover:bg-[#E6E1FF] text-black ">
              <Link to="/">Home</Link>
            </li>
            <li className=" p-2.5 mt-3 flex items-end rounded-md px-4 duration-300 cursor-pointer hover:bg-[#E6E1FF] text-black">
              <Link to="/profilePage">Profile</Link>
            </li>
            <li className=" p-2.5 mt-3 flex items-end rounded-md px-4 duration-300 cursor-pointer hover:bg-[#E6E1FF] text-black">
              <Link to="/calculate">CAL Calculator</Link>
            </li>
            <li className=" p-2.5 mt-3 flex items-end rounded-md px-4 duration-300 cursor-pointer hover:bg-[#E6E1FF] text-black">
              <Link to="/weightloss">Weight Loss Simulator</Link>
            </li>
            <li className=" p-2.5 mt-3 flex items-end rounded-md px-4 duration-300 cursor-pointer hover:bg-[#E6E1FF] text-black">
              <Link to="/Registration">Registration</Link>
            </li>
          </ul>
          <hr className="my-2 text-gray-600" />
        </div>
      </div>
    );
  };

  const activityNavList = () => {
    return (
      <div>
        <div>
          <button
            onClick={toggleDropdown}
            className=" text-[15px] ml-4 p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-[#E6E1FF] text-black"
          >
            exercise content
          </button>
        </div>
        <div
          className={`${
            isHidden ? "hidden" : ""
          } p-2.5 mt-2 flex items-end px-4 duration-300 w-4/5 `}
        >
          <ul>
            <li className="p-2 cursor-pointer mt-1 rounded-md hover:bg-[#E6E1FF] text-black">
              <Link to="/allExercise">All content</Link>
            </li>

            <li className="p-2 cursor-pointer mt-1 rounded-md hover:bg-[#E6E1FF] text-black">
              <Link to="/yogaPage">Yoga</Link>
            </li>
            <li className="p-2 cursor-pointer mt-1 rounded-md hover:bg-[#E6E1FF] text-black">
              <Link to="/runningPage">running</Link>
            </li>
            <li className="p-2 cursor-pointer mt-1 rounded-md hover:bg-[#E6E1FF] text-black ">
              <Link to="/thaiBoxingPage">Thai Boxing</Link>
            </li>
            <li className="p-2 cursor-pointer mt-1 rounded-md hover:bg-[#E6E1FF] text-black">
              <Link to="/weightPage">weight training</Link>
            </li>
            <li className="p-2 cursor-pointer mt-1 rounded-md hover:bg-[#E6E1FF] text-black">
              <Link to="/aerobicsPage">Aerobics</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <nav>
      <div>
        <button
          onClick={toggleSidebar}
          className={`${isDesktop ? "md:hidden" : "block"} text-black`}
        >
          <AiOutlineAlignLeft size={40} />
        </button>

        <div
          className={`sidebar ${isOpen ? "md:w-1/5 sm:1/3" : "hidden"}  
            ${isDesktop ? "md:block md:w-[200px]" : "hidden"} 
            sidebar md:sticky min-h-screen fixed top-0 bottom-0 lg:left-0 p-2 overflow-auto  bg-white text-black shadow-lg `}
        >
          <button
            onClick={toggleSidebar}
            className={`${isDesktop ? "md:hidden" : "block"} text-black`}
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
              className={` h-10 px-5  text-indigo-100 transition-colors duration-150 bg-[#7D5CF5] rounded-lg focus:shadow-outline hover:bg-indigo-800`}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
