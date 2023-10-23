import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(!true);

  // axios.defaults.withCredentials = true;

  useEffect(() => {
    const handleSubmit = async () => {
      // e.preventDefault();
      if (email !== "") {
        try {
          const user = await axios.post(
            "https://backend-group10.onrender.com/api/user/forgot-password",
            {
              email,
            }
          );
          setEmail("");
          if (user.status === 200) {
            toast.success("please check your email.");
            setTimeout(() => {
              navigate("/login");
            }, 5000);
          }

          if (!user) {
            toast.warning("not found your Email");
            console.log("error");
          }
        } catch (error) {
          toast.warning("not found your Email");
          // console.log(error);
        }
      }
    };
    handleSubmit();
  }, [toggle]);

  setTimeout(() => {
    setToggle(false);
  }, 1000 * 5);

  return (
    <div className="flex justify-center ">
      <div className="flex justify-center items-center h-screen  dark:text-cyan-50 text-black dark:bg-gray-800 bg-white min-w-[400px] max-w-[700px]">
        <div className="w-3/4 mt-10 ">
          <div>
            <h4 className="text-2xl  my-5 font-bold">Forgot Password?</h4>
            <p className="text-gray-500">
              Don't worry! It occurs. Please enter the email address linked with
              your account.
            </p>
          </div>

          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter Email Account"
              autoComplete="off"
              name="email"
              value={email}
              required
              className="form-control bg-white text-black dark:bg-gray-800 dark:text-cyan-50 border my-10 mt-20 rounded-md w-full p-4"
              onChange={(e) => setEmail(e.target.value)}
            />
            {!toggle ? (
              <button
                onClick={() => setToggle(true)}
                type="submit"
                className="bg-[#8278d9] px-3 py-1.5 text-sm font-semibold rounded-lg mt-10 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send
              </button>
            ) : (
              <p className="text-center">Please wait for 3 second...</p>
            )}
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
      <ToastContainer />
    </div>
  );
};
