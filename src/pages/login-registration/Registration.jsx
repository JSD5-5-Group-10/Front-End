import axios from "axios";
import bglogo from "./assets/bglogin.svg";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarLogin from "./NavbarLogin";

export const Registration = () => {
  // const [email, setEmail] = useState();
  // const [name, setName] = useState();
  // const [password, setPassword] = useState("");
  // const [pwConfirm, setPwConfirm] = useState("");

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const apiKeyImage = import.meta.env.VITE_KEY_UPLOAD_2;
  //IMAGE
  const [select, setSelect] = useState();
  const [img, setImg] = useState(
    "https://res.cloudinary.com/dvktdqeof/image/upload/v1697364303/omjmvbcedhsvuvz7vchc.png"
  );

  useEffect(() => {
    if (token) {
      return navigate("/");
    }
  }, [token]);
  //Cloud Upload
  const uploadImg = async () => {
    const formData = new FormData();
    formData.append("file", select);
    formData.append("upload_preset", import.meta.env.VITE_KEY_UPLOAD_2_Album);
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${apiKeyImage}/image/upload`,
      formData
    );
    // console.log(res);
    setRegister({ ...register, profile_img: res.data.url });
    alert("Upload Successfully.");
  };
  // console.log(img);
  const profile_img = img.url;
  // console.log(email);
  // console.log(name);
  // console.log(password);
  // console.log(profile_img);

  const [register, setRegister] = useState({
    email: "",
    name: "",
    password: "",
    pwConfirm: "",
    profile_img,
  });
  const apiKey = import.meta.env.VITE_API;
  // console.log(register);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(register);
    if (register.password === register.pwConfirm) {
      if (register.password.length >= 8) {
        try {
          const User = await axios.post(
            `${apiKey}/api/user/register`,
            register
          );
          if (User) {
            toast.success("Your Account Register Successfully!");
            navigate("/login");
            // console.log(User);
          }
        } catch (error) {
          // console.log(error);
          return toast.error("อีเมลซ้ำนะครับผม.. ใช้เมลอื่นได้หมายจ๊ะ?");
        }
      } else {
        return toast.warning("Password is less than 8 words.");
      }
    } else {
      return toast.warning("Password and Confirm Password do not match.");
    }
  };

  return (
    <div className="w-[1380px] dark:text-cyan-50 text-black dark:bg-gray-800 bg-white">
      <NavbarLogin />
      <div className="flex justify-center items-center h-screen mt-10 ">
        <div className=" w-1/2  m-auto hidden ab lg:inline">
          <div className="h-[600px] flex justify-end">
            <img className="bg-cover" src={bglogo} alt="bg-logo" />
          </div>
        </div>
        <div className="flex min-h-full w-[300px] flex-1 flex-col justify-center items-center lg:items-start px-6 py-12 lg:px-8 ">
          <div className="w-[325px] sm:w-[400px]">
            <div className="rounded-xl shadow-lg border-2 p-10 mt-3 sm:mx-auto sm:w-full sm:max-w-sm ">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mb-5 dark:text-cyan-50 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  REGISTER
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 h-auto">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm dark:text-cyan-50 font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      value={register.email}
                      onChange={(e) =>
                        setRegister({ ...register, email: e.target.value })
                      }
                      type="email"
                      autoComplete="email"
                      className="bg-white text-black dark:bg-gray-800 dark:text-cyan-50 block w-full rounded-md border-1 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="fullname"
                    className="block dark:text-cyan-50 text-sm font-medium leading-6 text-gray-900"
                  >
                    Fullname
                  </label>
                  <div className="mt-2">
                    <input
                      value={register.name}
                      onChange={(e) =>
                        setRegister({ ...register, name: e.target.value })
                      }
                      type="text"
                      required
                      autoComplete="fullname"
                      className="bg-white text-black dark:bg-gray-800 dark:text-cyan-50 block w-full rounded-md border-1 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="flex text-sm dark:text-cyan-50 font-medium leading-6 text-gray-900"
                    >
                      Password{" "}
                      {register.password.length < 8 && (
                        <p className="text-red-600 dark:text-red-400">
                          : please enter 8 characters.
                        </p>
                      )}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      value={register.password}
                      onChange={(e) =>
                        setRegister({ ...register, password: e.target.value })
                      }
                      type="password"
                      required
                      autoComplete="current-password"
                      className="bg-white text-black dark:bg-gray-800 dark:text-cyan-50 block w-full rounded-md border-1 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="repassword"
                      className="flex text-sm dark:text-cyan-50 font-medium leading-6 text-gray-900"
                    >
                      Confirm Password{" "}
                      {register.password != register.pwConfirm && (
                        <p className="text-red-600 dark:text-red-400">
                          : password not match.{" "}
                        </p>
                      )}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      value={register.pwConfirm}
                      onChange={(e) =>
                        setRegister({ ...register, pwConfirm: e.target.value })
                      }
                      type="password"
                      required
                      autoComplete="current-password"
                      className="bg-white text-black dark:bg-gray-800 dark:text-cyan-50 block w-full rounded-md border-1 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <input
                      type="file"
                      onChange={(e) => {
                        setSelect(e.target.files[0]);
                      }}
                      className=" file:bg-indigo-600 file:text-white "
                    />
                    <button
                      type="button"
                      className="flex w-1/3 justify-center rounded-md bg-indigo-600 px-1 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => uploadImg()}
                    >
                      Upload
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Register
                  </button>
                </div>
              </form>

              {/* <Image cloudName="dvktdqeof" publicId="" /> */}

              <p className="mt-10 text-center dark:text-cyan-50 text-sm text-gray-500">
                Already a member?{" "}
                <Link
                  to="/login"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-100"
                >
                  Login Now
                </Link>
              </p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
