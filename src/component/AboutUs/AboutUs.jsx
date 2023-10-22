import aboutimg from "./assets/aboutviolet.png";
import { AboutA } from "./AboutUs";
import { AboutImgSet } from "./AboutUs";
import linkedin from "./assets/linkedinlogo.png";
import portfolio from "./assets/weblogo.png";
import github from "./assets/githublogo.png";

import avatar1 from "./assets/avatar1.png";
import { Prof1 } from "./AboutUs";
import avatar2 from "./assets/avatar2.png";
import { Prof2 } from "./AboutUs";
import avatar3 from "./assets/avatar3.png";
import { Prof3 } from "./AboutUs";
import avatar4 from "./assets/avatar4.png";
import { Prof4 } from "./AboutUs";
import avatar5 from "./assets/avatar5.png";
import { Prof5 } from "./AboutUs";
import NavbarLogin from "../../pages/login-registration/NavbarLogin";

export const AboutUs = () => {
  return (
    <div>
      <div className="flex mb-20">
        <NavbarLogin />
      </div>
      <section className="aboutfit grid grid-cols-1 md:grid-cols-2 gap-10 mx-10 mt-20">
        <div className="textbox1 rounded-lg bg-[#E6E1FF] text-[#191F5D] w-[auto] h-[auto] order-2 sm:order-1">
          <h1 className="text-3xl md:text-5xl font-black mt-20 ml-7">
            {AboutA.head}
          </h1>
          <h2 className="text-xl md:text-3xl mt-5 mx-7">{AboutA.slogan1}</h2>
          <h2 className="text-xl md:text-3xl mx-7">{AboutA.slogan2}</h2>
          <p className="text-base mx-7 mt-5">{AboutA.des1}</p>
          <p className="text-base mx-7 ">{AboutA.des2}</p>
          <p className="text-base mx-7 ">{AboutA.des3}</p>
          <div className="space-x-2 mx-7 mb-14">
            {AboutImgSet.map((img, index) => (
              <div className="image inline-block mt-5" key={index}>
                <img
                  src={img.img}
                  alt={`Image ${index}`}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </div>
            ))}
          </div>
        </div>
        <img
          src={aboutimg}
          alt="about image"
          className="w-[500px] h-[auto] rounded-lg order-1 sm:order-2"
        />
      </section>

      <section className="team">
        <div className="textbox2 bg-[#E3BBFF] text-[#191F5D] text-center font-black text-3xl md:text-5xl w-full h-full mt-10">
          About Us
        </div>
      </section>

      <section className="profile1 grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 mt-5 mb-5">
        <div className="profbox1 col-span-1 rounded-lg bg-[#E6E1FF] text-[#191F5D] w-full h-full">
          <div className="avatarpic flex flex-row justify-center mt-5">
            <img src={avatar1} alt="avatar1 image" className="w-32 h-32" />
          </div>
          <div className="txtprof1 text-xl font-bold text-center md:text-2xl my-2">
            {Prof1.head}
          </div>
          <div className="contact flex flex-row justify-center mb-5">
            <a href={Prof1.link1} target="_blank">
              <img
                src={linkedin}
                alt="linkedin image"
                className="object-cover w-10 h10 mr-5 hover:scale-105"
              />
            </a>
            <a href={Prof1.link2} target="_blank">
              <img
                src={portfolio}
                alt="linkedin image"
                className="object-cover w-10 h10 mr-5 hover:scale-105"
              />
            </a>
            <a href={Prof1.link3} target="_blank">
              <img
                src={github}
                alt="linkedin image"
                className="object-cover w-10 h10 hover:scale-105"
              />
            </a>
          </div>
        </div>

        <div className="profbox2 col-span-1 rounded-lg bg-[#E6E1FF] text-[#191F5D] w-full h-full">
          <div className="avatarpic flex flex-row justify-center mt-5">
            <img src={avatar2} alt="avatar1 image" className="w-32 h-32" />
          </div>
          <div className="txtprof2 text-xl font-bold text-center md:text-2xl my-2">
            {Prof2.head}
          </div>
          <div className="contact flex flex-row justify-center mb-5">
            <a href={Prof2.link1} target="_blank">
              <img
                src={linkedin}
                alt="linkedin image"
                className="object-cover w-10 h10 mr-5 hover:scale-105"
              />
            </a>
            <a href={Prof2.link2} target="_blank">
              <img
                src={portfolio}
                alt="linkedin image"
                className="object-cover w-10 h10 mr-5 hover:scale-105"
              />
            </a>
            <a href={Prof2.link3} target="_blank">
              <img
                src={github}
                alt="linkedin image"
                className="object-cover w-10 h10 hover:scale-105"
              />
            </a>
          </div>
        </div>

        <div className="profbox3 col-span-1 rounded-lg bg-[#E6E1FF] text-[#191F5D] w-full h-full">
          <div className="avatarpic flex flex-row justify-center mt-5">
            <img src={avatar3} alt="avatar1 image" className="w-32 h-32" />
          </div>
          <div className="txtprof1 text-xl font-bold text-center md:text-2xl my-2">
            {Prof3.head}
          </div>
          <div className="contact flex flex-row justify-center mb-5">
            <a href={Prof3.link1} target="_blank">
              <img
                src={linkedin}
                alt="linkedin image"
                className="object-cover w-10 h10 mr-5 hover:scale-105"
              />
            </a>
            <a href={Prof3.link2} target="_blank">
              <img
                src={portfolio}
                alt="linkedin image"
                className="object-cover w-10 h10 mr-5 hover:scale-105"
              />
            </a>
            <a href={Prof3.link3} target="_blank">
              <img
                src={github}
                alt="linkedin image"
                className="object-cover w-10 h10 hover:scale-105"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="profile2 grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 mt-5 mb-5">
        <section className="profbox4div grid grid-cols-3">
          <div className="col-span-1 hidden md:block"></div>
          <div className="profbox4 col-span-3 md:col-span-2 rounded-lg bg-[#E6E1FF] text-[#191F5D] w-full h-full">
            <div className="avatarpic flex flex-row justify-center mt-5">
              <img src={avatar4} alt="avatar1 image" className="w-32 h-32" />
            </div>
            <div className="txtprof1 text-xl font-bold text-center md:text-2xl my-2">
              {Prof4.head}
            </div>
            <div className="contact flex flex-row justify-center mb-5">
              <a href={Prof4.link1} target="_blank">
                <img
                  src={linkedin}
                  alt="linkedin image"
                  className="object-cover w-10 h10 mr-5 hover:scale-105"
                />
              </a>
              <a href={Prof4.link2} target="_blank">
                <img
                  src={portfolio}
                  alt="linkedin image"
                  className="object-cover w-10 h10 mr-5 hover:scale-105"
                />
              </a>
              <a href={Prof4.link3} target="_blank">
                <img
                  src={github}
                  alt="linkedin image"
                  className="object-cover w-10 h10 hover:scale-105"
                />
              </a>
            </div>
          </div>
        </section>

        <div className="profbox5 rounded-lg bg-[#E6E1FF] text-[#191F5D] w-full h-full md:w-2/3">
          <div className="avatarpic flex flex-row justify-center mt-5">
            <img src={avatar5} alt="avatar1 image" className="w-32 h-32" />
          </div>
          <div className="txtprof1 text-xl font-bold text-center md:text-2xl my-2">
            {Prof5.head}
          </div>
          <div className="contact flex flex-row justify-center mb-5">
            <a href={Prof5.link1} target="_blank">
              <img
                src={linkedin}
                alt="linkedin image"
                className="object-cover w-10 h10 mr-5 hover:scale-105"
              />
            </a>
            <a href={Prof5.link2} target="_blank">
              <img
                src={portfolio}
                alt="linkedin image"
                className="object-cover w-10 h10 mr-5 hover:scale-105"
              />
            </a>
            <a href={Prof5.link3} target="_blank">
              <img
                src={github}
                alt="linkedin image"
                className="object-cover w-10 h10 hover:scale-105"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
