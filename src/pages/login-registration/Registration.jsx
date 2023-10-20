import axios from "axios";
import bglogo from "./assets/bglogin.svg";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Registration = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  const navigate = useNavigate();
  //IMAGE
  const [select, setSelect] = useState();
  const [img, setImg] = useState(
    "https://res.cloudinary.com/dvktdqeof/image/upload/v1697364303/omjmvbcedhsvuvz7vchc.png"
  );

  //Cloud Upload
  const uploadImg = async () => {
    const formData = new FormData();
    formData.append("file", select);
    formData.append("upload_preset", "afd9sh09"); //Key From Cloudinary
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dvktdqeof/image/upload", // key From Clound Name
      formData
    );
    // console.log(res);
    setImg(res.data);
    alert("Upload Successfully.");
  };

  const profile_img = img.url;
  // console.log(email);
  // console.log(name);
  // console.log(password);
  // console.log(profile_img);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === pwConfirm) {
      if (password.length >= 8) {
        try {
          const User = await axios.post(
            "https://backend-group10.onrender.com/api/user/register",
            {
              email,
              name,
              password,
              profile_img,
            }
          );
          if (User) {
            alert("Your Account Register Successfully!");
            navigate("/login");
            // console.log(User);
          }
        } catch (error) {
          // console.log(error);
          return alert("เมลซ้ำนะครับผม.. ใช้เมลอื่นได้หมายจ๊ะ?");
        }
      } else {
        return alert("your password less than 8 words.");
      }
    } else {
      return alert("Password and Confirm Password do not match.");
    }
  };

  return (
    <>
      <div className="flex  h-screen ">
        <div className=" w-2/3  m-auto hidden ab lg:inline">
          <div className="flex h-[600px] ">
            <img className="bg-cover" src={bglogo} alt="bg-logo" />
          </div>
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              REGISTER
            </h2>
          </div>

          <div className="rounded-xl shadow-lg border-2 p-10 mt-3 sm:mx-auto sm:w-full sm:max-w-sm ">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Fullname
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    required
                    autoComplete="fullname"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="flex text-sm font-medium leading-6 text-gray-900"
                  >
                    Password{" "}
                    {password.length < 8 && (
                      <p className="text-red-600">
                        : ต้องมากกว่า 8 ตัวอักขละนารูโต๊ะะ!
                      </p>
                    )}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="repassword"
                    className="flex text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password{" "}
                    {password != pwConfirm && (
                      <p className="text-red-600">: ใส่รหัสไม่ตรงกัน </p>
                    )}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => setPwConfirm(e.target.value)}
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  />
                  <button
                    type="button"
                    className="flex w-1/3 justify-center rounded-md bg-[#8278d9] px-1 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => uploadImg()}
                  >
                    Upload
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#8278d9] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>

            {/* <Image cloudName="dvktdqeof" publicId="" /> */}

            <p className="mt-10 text-center text-sm text-gray-500">
              Already a member?{" "}
              <Link
                to="/login"
                className="font-semibold leading-6 text-[#8278d9] hover:text-indigo-100"
              >
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
