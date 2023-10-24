import { useEffect } from "react";
import Navbar from "../../component/Navbar";
import { Weight } from "../../component/ExerciseContent/Weight";
import { useNavigate } from "react-router-dom";

export const WeightPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, [token]);
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
          <Weight />
        </div>
      </div>
    </>
  );
};
