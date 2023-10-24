import { useState } from "react";
// import Navbar from "../../component/Navbar";
import bgRegister from "./assets/bgRegister.svg";
import axios from "axios";
import { authActions } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { LoginGoogle } from "./LoginGoogle";
import { ToastContainer, toast } from "react-toastify";
import NavbarLogin from "./NavbarLogin";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  // console.log(token);
  useEffect(() => {
    if (token) {
      return navigate("/");
    }
  }, [token]);
  // console.log(login);
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(login);
    try {
      // console.log(login);
      const user = await axios.post(
        "https://backend-group10.onrender.com/api/user/login",

        login
      );
      if (!user) {
        return toast.warning("Your email or password has wrong!");
      }
      console.log(user.data.token);
      localStorage.setItem("token", user.data.token);
      dispatch(authActions.login());
      navigate("/Home");
    } catch (error) {
      return toast.warning("Your email or password has wrong!");
    }
  };

  // console.log(email);
  // console.log(password);
  return (
    <div className="lg:w-[1380px] mx-auto dark:text-cyan-50 text-black dark:bg-gray-800 bg-white">
      <div className="flex flex-col md:flex">
        <NavbarLogin />
        <div className="mx-auto">
          <div className="flex h-screen">
            <div className=" w-1/2  m-auto hidden lg:inline">
              <div className="flex h-[600px]">
                <img className="bg-cover" src={bgRegister} alt="" />
              </div>
            </div>

            <div className="sm:w-[450px] flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="text-3xl  text-center text-indigo-600 font-bold leading-9 pb-5">
                  WELCOME TO FITBOD
                </h1>
              </div>
              <div className="rounded-xl shadow-lg border-2 p-10 mt-3 sm:mx-auto sm:w-full sm:max-w-sm ">
                <h2 className="mb-10 uppercase dark:text-cyan-50 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Login to your account
                </h2>
                <form
                  onSubmit={handleLogin}
                  className="space-y-4 dark:text-cyan-50 text-black"
                  action="#"
                  method="POST"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm dark:text-cyan-50 text-black font-medium leading-6 "
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        value={login.email}
                        onChange={(e) =>
                          setLogin({ ...login, email: e.target.value })
                        }
                        type="email"
                        autoComplete="email"
                        required
                        className="bg-white text-black dark:bg-gray-800 dark:text-cyan-50 block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm dark:text-cyan-50 text-black font-medium leading-6 "
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <Link
                          to="/forgot-password"
                          className="font-semibold  text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        value={login.password}
                        onChange={(e) =>
                          setLogin({ ...login, password: e.target.value })
                        }
                        type="password"
                        autoComplete="current-password"
                        required
                        className="bg-white text-black dark:bg-gray-800 dark:text-cyan-50 block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center dark:text-cyan-50 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Login
                    </button>
                    <p className="text-center py-2 dark:text-cyan-50 text-sm text-gray-400">
                      ---------- OR ----------
                    </p>

                    <LoginGoogle />
                  </div>
                </form>

                <p className="mt-10 text-center text-sm dark:text-cyan-50 text-gray-500">
                  Not a member?{" "}
                  <Link
                    to="/Registration"
                    className="font-semibold leading-6 dark:text-cyan-50 hover:text-indigo-100"
                  >
                    <span className="text-indigo-600">Register Now </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
