import React from "react";

const Profile = () => {
  const imgProfile = "https://s.isanook.com/mv/0/ud/24/123377/865231.jpg"
  const imgCover = "https://img.kapook.com/u/2018/Tanapol/travel/november/doypahompok/t1.jpg"
  const information = "Hello world"
  const age = "Age"
  const location = "Somewhere"
  const username = "ธอร์ลอยไข่หวาน"
  return (
    <div className="flex w-full">

      <div>
        <header>

          <div className="relative ">
            <img src={imgCover} alt="รูปปก" className="h-[150px] w-screen" />
            <button className="bg-[#ffffff] text-[#A303A0] rounded-full border border-gray-300 hover:bg-violet-600 p-[5px] top-[6rem] right-[1rem] absolute">แก้ไขโปรไฟล์</button>
            <div >
              <img className="rounded-full w-32 h-32 object-cover top-[3rem]  left-[1rem] absolute " src={imgProfile} alt="User" />
            </div>
          </div>

          <div className="flex bg-white ml-[10rem] ">
            <button className="bg-blue-500 text-white rounded-full border border-gray-300 hover:bg-violet-600 p-[5px]">แก้ไขโปรไฟล์</button>
            <h1 className="name pl-[1rem] font-bold">{username}</h1>

          </div>
        </header>

        <section className="flex flex-col border border-black m-2">
          <div>
            <p>Information: {information}</p>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
          </div>
          <div className="flex my-[1rem] items-center justify-around">
            <div className=" border border-black">
              <p>ปู่ลูฟี่</p>
            </div>
            <div className=" border border-black">
              <p>ปู่ลูฟี่</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;