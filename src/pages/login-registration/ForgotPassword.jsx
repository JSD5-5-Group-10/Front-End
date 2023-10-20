import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  // axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(
        "https://backend-group10.onrender.com/api/user/forgot-password",
        {
          email,
        }
      );
      if (!user) {
        return console.log("error");
      }
      alert("please check your email.");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="flex justify-center items-center h-screen  bg-white min-w-[400px] max-w-[700px]">
        <div className="w-3/4 mt-10 ">
          <div>
            <h4 className="text-2xl  my-5 font-bold">Forgot Password?</h4>
            <p className="text-gray-500">
              Don't worry! It occurs. Please enter the email address linked with
              your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="email"
              placeholder="Enter Email Account"
              autoComplete="off"
              name="email"
              className="form-control border my-10 mt-20 rounded-md w-full p-4"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              className="bg-[#8278d9] px-3 py-1.5 text-sm font-semibold rounded-lg mt-10 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </form>
          <div className="mt-40 flex justify-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};
