import { Link } from "react-router-dom";
import Successmark from "./assets/Successmark.svg";

export const Success = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex justify-center items-center h-screen bg-white min-w-[400px] max-w-[700px]">
        <div className="w-3/4 mt-10 ">
          <div className="flex flex-col justify-center items-center">
            <img src={Successmark} alt="" />
            <h4 className="text-2xl  my-5 font-bold">Password Changed!</h4>
            <p className="text-gray-500 text-center">
              Your password has been changed successfully.
            </p>
          </div>

          <Link to="/login">
            <div className="flex flex-col">
              <button
                type="submit"
                className="bg-[#8278d9] px-3 py-1.5 text-sm font-semibold rounded-lg mt-10 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Back to Login
              </button>
            </div>
          </Link>

          {/* <div className="mt-40 flex justify-center">
            <h1>
              Remember Password ?
              <Link
                to="/login"
                className="cursor-pointer font-bold text-blue-500"
              >
                {" "}
                Login
              </Link>
            </h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};
