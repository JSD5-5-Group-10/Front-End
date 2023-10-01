import React from "react";
import Navbar from "../../component/Navbar";
import Profile from "../../component/Profile/Profile";
export const ProfilePage = () => {
  
  return (
    <div className="md:flex">
      <div className="absolute z-50 md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:inline">
        <Navbar />
      </div>
      <Profile />
    </div>
  );
};
