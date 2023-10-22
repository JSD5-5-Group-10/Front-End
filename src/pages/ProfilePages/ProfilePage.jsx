import { useEffect } from "react";
import Navbar from "../../component/Navbar";
import Profile from "../../component/Profile/Profile";
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token]);

  return (
    <div className="md:flex mx-auto w-auto min-[1380px]:w-[1380px]">
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
