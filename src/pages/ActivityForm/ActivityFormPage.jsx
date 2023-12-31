import Navbar from "../../component/Navbar";
import ActivityForm from "../../component/Activity/ActivityForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ActivityFormPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, [token]);
  return (
    <div className="md:flex max-w-[1380px] mx-auto bg-white dark:bg-gray-800">
      <div className="absolute z-50 md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:inline">
        <Navbar />
      </div>
      <div className="flex justify-center mx-auto">
        <ActivityForm />
      </div>
    </div>
  );
}

export default ActivityFormPage;
