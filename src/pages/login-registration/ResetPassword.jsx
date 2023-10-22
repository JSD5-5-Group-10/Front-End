import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export const ResetPassword = () => {
  const [password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== ConfirmPassword) {
      return toast.warning("Password is not Match");
    }
    if (password.length < 8) {
      return toast.warning("Password is less than 8 words");
    }

    try {
      const newPassword = await axios.post(
        `https://backend-group10.onrender.com/api/user/reset-password/${token}`,
        {
          password,
        }
      );
      if (!newPassword) {
        return console.log("error");
      }
      toast.success("Your password have been Updated!");
      navigate("/success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="flex justify-center items-center h-screen  bg-white min-w-[400px] max-w-[700px]">
        <div className="w-3/4 mt-10 ">
          <div>
            <h4 className="text-2xl  my-5 font-bold">Create New Password</h4>
            <p className="text-gray-500">
              Your new password must be unique from those previously used.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              name="password"
              className="form-control border my-10 mt-20 rounded-md w-full p-4"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              autoComplete="off"
              name="password"
              className="form-control border rounded-md w-full p-4"
              onChange={(e) => setConfirmPassword(e.target.value)}
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
      <ToastContainer />
    </div>
  );
};
