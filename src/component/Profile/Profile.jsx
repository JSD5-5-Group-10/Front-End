import { useEffect, useState } from "react";
import BasicStacking from "../dashboard/BasicStacking";
import PieChartWithCenterLabel from "../dashboard/PieChartWithCenterLabel";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

// import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
// import { Cloudinary } from "@cloudinary/url-gen";
// import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

const Profile = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState(); // input date
  const [profile_img, setProfile_img] = useState();
  const [cover_img, setCover_img] = useState();
  const [description, setDescription] = useState();
  const [is_active, setIs_active] = useState(); // del user
  const [edit, setEdit] = useState(true);

  const [select, serSelect] = useState();
  const [e, setE] = useState(); // pic

// cloudinary
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", select); //tpjsd5
    formData.append("upload_preset", "tpjsd5");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dfbvjjkbq/image/upload",
      formData
    );
    console.log(response.data);
    setE(response.data);
  };

  console.log(e.url);

  // get data user
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://back-end-tp-test.onrender.com/api/user",
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
      } catch (error) {
        console.log(error);
      }
      if (!token) {
        return navigate("/login");
      }
    };
    fetchData();
  }, [token]);

  const saveData = async (e) => {
    e.preventDefault();
    // const updateField = {};
    // if (name) updateField.name = name;
    // if (password) updateField.password = password;
    // if (age) updateField.age = age;
    if (profile_img) updateField.cover_img = e.url;
    // if (cover_img) updateField.cover_img = cover_img;
    // if (description) updateField.cover_img = description;

    try {
      const response = await axios.post(
        `https://back-end-tp-test.onrender.com/api/activity/add`,
        {
          // act_type: type,
          // act_name: name,
          // act_desc: descrition,
          // duration: parseInt(time),
          // cur_weight: parseFloat(weight),
          // cal_burn: parseFloat(kcal),
          // kg_burn: parseFloat(kilogram),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("POST", response.status);
      console.log(response);
      if (response.status === 200) {
        toast.success("Update successfully.");
      }
      // navigate("/");
    } catch (err) {
      toast.error("Failed: " + err.message);
    }
  };

  return (
    <div className=" w-full">
      
      {/* upload image */}
      <div>
        <input
          type="file"
          onChange={(e) => {
            serSelect(e.target.files[0]);
          }}
        />
        <button
          onClick={() => {
            uploadImage();
          }}
        >
          Upload
        </button>
        <img src={e.url} alt="" />
      </div>

      <header>
        <div className="relative ">
          <img
            src={data.image?.cover_img}
            alt="รูปปก"
            className="h-[200px] w-screen"
          />
          <button className="bg-[#827BD9] text-white rounded-lg border-gray-300 hover:bg-violet-600 p-[5px] top-[9rem] right-[1rem] absolute">
            Edit Cover Photo
          </button>
          <div>
            <img
              className="rounded-full w-32 h-32 object-cover top-[6rem] left-[1rem] absolute "
              src={data.image?.profile_img}
              alt="User"
            />
          </div>
        </div>

        <div className="flex bg-white ml-32 mt-1">
          <button
            onClick={() => setEdit(!edit)}
            className="bg-[#827BD9] text-white rounded-lg border-gray-300 hover:bg-violet-600 p-1 px-3"
          >
            Edit Profile
          </button>
          <h1 className="font-bold mx-5 text-2xl uppercase">{data.name}</h1>
        </div>
      </header>

      {/* form edit profile */}
      {!edit ? (
        <div className="ml-5 w-[500px]">
          <h1 className="text-2xl py-3 text-center font-bold">
            Update Profile
          </h1>
          <form className="flex justify-center my-3 ">
            <div className="space-y-6">
              <label className="flex rounded-lg leading-10 ">
                <span className="w-[200px] px-2 flex items-center justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Full name
                </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  className="px-2 w-full rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                />
              </label>
              <label className="flex rounded-lg leading-10">
                <span className="w-[200px] px-2 flex items-center justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Password
                </span>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  name="password"
                  className="w-full px-2 rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                />
              </label>
              <label className="flex rounded-lg leading-10">
                <span className="w-[200px] px-2 flex items-center justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Birthday
                </span>
                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  type="date"
                  name="age"
                  className="w-full px-2 leading-snug rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                />
              </label>
              <label className="flex rounded-lg leading-10">
                <span className="w-[200px] flex items-center  justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Profile picture
                </span>
                <input
                  value={profile_img}
                  onChange={(e) => setProfile_img(e.target.value)}
                  type="file"
                  name="profile_img"
                  className="w-full placeholder:text-sm rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                />
              </label>
              <label className="flex rounded-lg leading-10">
                <span className="w-[200px] px-2 flex items-center justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Cover picture
                </span>
                <input
                  value={cover_img}
                  onChange={(e) => setCover_img(e.target.value)}
                  type="file"
                  name="cover_img"
                  className="w-full rounded-r-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                />
              </label>
              <label className="flex rounded-lg leading-10">
                <span className="px-2 w-[200px] flex items-center justify-center bg-[#8278d9] text-white font-semibold rounded-l-lg hover:bg-indigo-500">
                  Information
                </span>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  name="description"
                  className="w-full bg-white px-2 rounded-r-lg placeholder:text-[#131c85] focus:outline-none focus:ring-2 focus:ring-[#8278d9] focus:border-transparent ring-1 ring-inset ring-[#8278d9]"
                />
              </label>
              <div className="flex justify-between">
                <button className=" flex justify-center rounded-full  bg-red-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Delete User
                </button>
                <button
                  onClick={saveData}
                  type="submit"
                  className=" flex w-1/2 justify-center rounded-full  bg-[#8278d9] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}

      {/* Information */}
      <section className="flex flex-col border my-2 p-5 mx-2 h-[150px] justify-center rounded-md">
        <div>
          <p className="my-2 text-xl font-bold">
            Age: <span className="font-normal">{data?.age}</span>
          </p>
          <p className="my-2 text-xl font-bold">
            Information:{" "}
            <span className="font-normal">{data?.description}</span>
          </p>
        </div>
      </section>

      {/* Chart */}
      <div className="md:flex gap-4 my-5  justify-around ">
        <div className="my-2">
          <BasicStacking />
        </div>
        <div className="my-2">
          <PieChartWithCenterLabel />
        </div>
      </div>
    </div>
  );
};

export default Profile;
