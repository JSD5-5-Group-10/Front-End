import { useState } from "react";
// import Navbar from "../../component/Navbar";
import bgRegister from "./assets/bgRegister.svg";
import axios from "axios";
import { authActions } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(
        "https://backend-group10.onrender.com/api/user/login",
        {
          email,
          password,
        }
      );
      if (!user) {
        return console.log("error");
      }
      console.log(user.data.token);
      localStorage.setItem("token", user.data.token);
      dispatch(authActions.login());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(email);
  // console.log(password);
  return (
    <div className="md:flex">
      {/* <Navbar /> */}
      <div className="mx-auto">
        <div className="flex h-screen">
          <div className=" w-1/2  m-auto hidden ab lg:inline">
            <div className="flex h-[600px]">
              <img className="bg-cover" src={bgRegister} alt="" />
            </div>
          </div>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h1 className="text-3xl text-center font-bold leading-9 ">
                ธอร์ลอยไข่หวาน
              </h1>
            </div>

            <div className="rounded-xl shadow-lg border-2 p-10 mt-3 sm:mx-auto sm:w-full sm:max-w-sm ">
              <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login to your account
              </h2>
              <form
                onSubmit={handleLogin}
                className="space-y-4"
                action="#"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <Link
                        to="/forgot-password"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#8278d9] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <Link
                  to="/Registration"
                  className="font-semibold leading-6 text-[#8278d9] hover:text-indigo-100"
                >
                  Register Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
