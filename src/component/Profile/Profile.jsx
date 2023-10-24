import { useEffect, useState } from "react";
import { Chartsbar } from "../dashboard/Chartsbar";
import PieChartWithCenterLabel from "../dashboard/PieChartWithCenterLabel";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import profileImage from "../../public/profile.gif";
import coverImage from "../../public/cover.svg";
import { FaUserEdit } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

const Profile = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [pwconfirm, setPwconfirm] = useState("");
  const [cover_img, setCover_img] = useState("");
  const [edit, setEdit] = useState(true);
  const [birthday, setBirthday] = useState("");
  const [uplaodProfileimg, setUplaodProfileimg] = useState(null); //  upload pic profile
  const [uploadCover, setUploadCover] = useState(); // upload pic cover
  const [reload, setReload] = useState(!true);
  const [editProfile, setEditProfile] = useState({
    name: "",
    password: "",
    age: 0,
    profile_img: "",
    description: "",
  });

  // calculate age
  useEffect(() => {
    const calculateAge = () => {
      const dateOfBirth = new Date(birthday);
      const currentDate = new Date();
      let ages = currentDate.getFullYear() - dateOfBirth.getFullYear();

      if (
        currentDate.getMonth() < dateOfBirth.getMonth() ||
        (currentDate.getMonth() === dateOfBirth.getMonth() &&
          currentDate.getDate() < dateOfBirth.getDate())
      )
        ages--;
      if (ages < 0) {
        setBirthday("");
        return toast.error("Age must not be negative.");
      }
      // console.log(ages);
      if (!isNaN(ages) && ages !== "") {
        setEditProfile({ ...editProfile, age: ages });
      }
    };
    calculateAge();
  }, [birthday]);

  // post cloudinary cover image
  useEffect(() => {
    const uploadImage = async () => {
      if (uploadCover === undefined) {
        return null;
      }
      const formData = new FormData();
      formData.append("file", uploadCover); //tpjsd5
      formData.append("upload_preset", "tpjsd5");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dfbvjjkbq/image/upload",
        formData
      );
      console.log(response.data);
      setCover_img(response.data.url);
    };
    uploadImage();
  }, [uploadCover]);

  // post cloudinary profile image
  const uploadImages = async (e) => {
    e.preventDefault();
    try {
      // console.log(uplaodProfileimg);
      if (uplaodProfileimg === null) {
        return null;
      }
      const formData = new FormData();
      formData.append("file", uplaodProfileimg);
      formData.append("upload_preset", "tpjsd5");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dfbvjjkbq/image/upload",
        formData
      );
      // console.log(response.data);
      setUplaodProfileimg(null);
      setEditProfile({ ...editProfile, profile_img: response.data.url });
    } catch (error) {
      toast.error("An error occurred while uploading the image:", error);
    }
  };

  // put update cover image
  useEffect(() => {
    const updateCoverImage = async () => {
      if (cover_img === undefined || cover_img === "") {
        return null;
      }
      const updateField = {};
      if (cover_img !== "") updateField.cover_img = cover_img;
      // console.log(updateField);
      try {
        const response = await axios.put(
          `https://backend-group10.onrender.com/api/user/update`,
          updateField,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log("PUT", response.status);
        // console.log(response);
        setReload(!true);
        if (response.status === 200) {
          toast.success("Update successfully.");
        }
      } catch (err) {
        toast.error("Failed: " + err.message);
      }
    };
    updateCoverImage();
  }, [cover_img]);

  // get data user
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend-group10.onrender.com/api/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response) {
          return console.log("error");
        }
        // console.log(response.data.data);
        setData(response.data?.data[0]);
        setReload(true);
      } catch (error) {
        toast.error(error);
      }
      if (!token) {
        return navigate("/login");
      }
    };
    if (!reload) {
      fetchData();
    }
  }, [token, reload]);
  // console.log(editProfile);
  // put update user
  const saveData = async (e) => {
    e.preventDefault();
    if (editProfile.password !== pwconfirm) {
      return toast.error("Passwords do NOT match.");
    }

    const updateField = {};
    if (editProfile.name !== "") updateField.name = editProfile.name;
    if (editProfile.password !== "")
      updateField.password = editProfile.password;
    if (editProfile.age !== 0) updateField.age = editProfile.age;
    if (editProfile.profile_img !== "")
      updateField.profile_img = editProfile.profile_img;
    if (editProfile.description !== "")
      updateField.description = editProfile.description;
    // console.log(updateField);
    // console.log(updateField);

    try {
      const response = await axios.put(
        `https://backend-group10.onrender.com/api/user/update`,
        updateField,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("put", response.status);
      // console.log(response);
      if (response.status === 200) {
        toast.success("Update successfully.");
        setPwconfirm("");
        setBirthday("");
        setEditProfile("");
        setEdit(true);
        setReload(!true);
      }
      if (response.status === 400) {
        toast.error("Bad Request");
      }
      navigate("/profilePage");
    } catch (err) {
      toast.error("Failed: " + err.message);
    }
  };

  // delete user
  const deleteDate = async () => {
    const input = prompt("To delete a user, enter 'DELETE' information.");
    if (input !== "DELETE") {
      return alert("Entered wrong information");
    }
    try {
      const response = await axios.delete(
        `https://backend-group10.onrender.com/api/user/delete`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            is_active: false,
          },
        }
      );
      // console.log(response);
      // console.log("DELETE", response.status);
      if (response.status === 200) {
        toast.success("Delete successfully.");
        navigate("/login");
        localStorage.clear();
      }
    } catch (err) {
      toast.error("Failed: " + err.message);
    }
  };

  return (
    <div className="w-full dark:bg-gray-800 bg-white">
      <header>
        <div className="relative">
          <img
            src={data.image?.cover_img || `${coverImage}`}
            alt="coverImage"
            className="h-[200px] w-screen"
          />
          <label
            onChange={(e) => setUploadCover(e.target.files[0])}
            className="bg-indigo-600 cursor-pointer text-white text-sm rounded-lg hover:bg-indigo-800 p-[5px] top-[9rem] right-[1rem] absolute md:inline hidden"
          >
            <input type="file" className="w-0" />
            Edit Cover
          </label>
          <label
            onChange={(e) => setUploadCover(e.target.files[0])}
            className="bg-transparent cursor-pointer text-white rounded-lg p-[5px] top-[10rem] right-[1rem] absolute md:hidden "
          >
            <BiEdit size={25} />
            <input type="file" className="w-0" />
          </label>

          <div>
            <img
              className="rounded-full w-32 h-32 object-cover top-[6rem] left-[1rem] absolute "
              src={
                editProfile.profile_img ||
                data.image?.profile_img ||
                `${profileImage}`
              }
              alt="profileImage"
            />
          </div>
        </div>

        <div className="flex bg-white ml-32 mt-1 text-black dark:bg-gray-800 dark:text-cyan-50 ">
          <button
            onClick={() => setEdit(!edit)}
            className="bg-indigo-600 cursor-pointer text-white rounded-lg border-gray-300 hover:bg-indigo-800 p-1 px-3 md:inline hidden"
          >
            Edit Profile
          </button>
          <button
            onClick={() => setEdit(!edit)}
            className="bg-indigo-600  cursor-pointer text-white rounded-lg border-gray-300 hover:bg-indigo-800 p-1 px-3 md:hidden"
          >
            <FaUserEdit size={20} />
          </button>

          <h1 className="font-bold mx-5 text-xl lg:text-3xl md:text-2xl uppercase">
            {data.name}
          </h1>
        </div>
      </header>

      {/* form edit profile */}
      {!edit ? (
        <div className="lg:ml-5 lg:w-[500px] w-[400px] mx-auto bg-white text-black dark:bg-gray-800 dark:text-cyan-50 ">
          <h1 className="text-2xl py-3 text-center font-bold">
            Update Profile
          </h1>
          <form className="flex justify-center my-3 ">
            <div className="space-y-6">
              <label className="flex rounded-lg leading-10 ">
                <span className="w-[200px] px-2 flex items-center justify-center bg-indigo-600 text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Full name
                </span>
                <input
                  value={editProfile.name}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, name: e.target.value })
                  }
                  type="text"
                  name="name"
                  className="bg-white text-black dark:bg-gray-800 dark:text-cyan-50 px-2 w-full rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                />
              </label>
              <label className="flex rounded-lg leading-10">
                <span className="w-[200px] px-2 flex items-center justify-center bg-indigo-600 text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Birthday
                </span>
                <input
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  type="date"
                  name="age"
                  className="bg-white text-black dark:bg-gray-800 dark:text-cyan-50 w-full px-2 leading-snug rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                />
              </label>
              <label className="flex rounded-lg leading-10">
                <span className="w-[260px] flex items-center  justify-center bg-indigo-600 text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Profile picture
                </span>
                <input
                  onChange={(e) => setUplaodProfileimg(e.target.files[0])}
                  type="file"
                  name="profile_img"
                  className="bg-white file:bg-indigo-600  text-black dark:bg-gray-800 dark:text-cyan-50 w-full placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                />
                <button
                  className="flex items-center px-3 justify-center bg-indigo-600 text-white font-semibold rounded-r-lg hover:bg-indigo-500"
                  onClick={uploadImages}
                >
                  Upload
                </button>
              </label>
              <label className="flex rounded-lg leading-10">
                <span className="px-2 w-[200px] flex items-center justify-center bg-indigo-600 text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Information
                </span>
                <input
                  value={editProfile.description}
                  onChange={(e) =>
                    setEditProfile({
                      ...editProfile,
                      description: e.target.value,
                    })
                  }
                  type="text"
                  name="description"
                  className="bg-white text-black dark:bg-gray-800 dark:text-cyan-50 w-full px-2 rounded-r-lg placeholder:text-[#131c85] focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                />
              </label>
              <label className="flex rounded-lg leading-10">
                <span className="w-[200px] px-2 flex items-center justify-center bg-indigo-600 text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Password
                </span>
                <input
                  value={editProfile.password}
                  onChange={(e) =>
                    setEditProfile({
                      ...editProfile,
                      password: e.target.value,
                    })
                  }
                  type="password"
                  name="password"
                  className="bg-white text-black dark:bg-gray-800 dark:text-cyan-50 w-full px-2 rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                />
              </label>
              <label className="flex rounded-lg leading-10">
                <span className="w-[200px] px-2 flex items-center justify-center bg-indigo-600 text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Repassword
                </span>
                <input
                  value={pwconfirm}
                  onChange={(e) => setPwconfirm(e.target.value)}
                  type="password"
                  name="password"
                  className="bg-white text-black dark:bg-gray-800 dark:text-cyan-50 w-full px-2 rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                />
              </label>
              <div className="flex justify-end">
                <button
                  onClick={saveData}
                  type="submit"
                  className="flex w-1/2 justify-center rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
          <button
            onClick={deleteDate}
            className=" absolute top-[690px] flex justify-center rounded-full bg-red-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Delete User
          </button>
        </div>
      ) : null}

      {/* Information */}
      <section className="dark:border-gray-700 mx-3 sm:mx-1 flex flex-col border my-2 p-5 md:h-[200px] justify-center rounded dark:border-1 text-black dark:bg-gray-800 dark:text-cyan-50">
        <div>
          <p className="my-2 text-lg font-bold">
            User Email : <span className="font-normal">{data?.email}</span>
          </p>
          <p className="my-2 text-lg font-bold">
            Age : <span className="font-normal">{data?.age} years</span>
          </p>
          <p className="my-2 text-lg font-bold">
            Information :{" "}
            <span className="font-normal">{data?.description}</span>
          </p>
          <p className="my-2 text-lg font-bold">
            Member since :{" "}
            <span className="font-normal">
              {new Date(data?.created_at).toLocaleString()}
            </span>
          </p>
          <p className="my-2 text-lg font-bold">
            Latest update :{" "}
            <span className="font-normal">
              {new Date(data?.updated_at).toLocaleString()}
            </span>
          </p>
        </div>
      </section>

      {/* Chart */}
      <div className="min-[1280px]:flex gap-4 justify-around">
        <div className="">
          <PieChartWithCenterLabel />
        </div>
        <div className="">
          <Chartsbar />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
