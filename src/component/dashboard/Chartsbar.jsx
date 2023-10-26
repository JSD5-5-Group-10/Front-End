import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const Chartsbar = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const apiKey = import.meta.env.VITE_API;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiKey}/api/activity/chart2`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response.data?.data);
        if (!response) {
          return toast.error("error");
        }
        // console.log(response.data.data);
        setData(response.data?.data);
      } catch (error) {
        toast.error(error);
      }
      if (!token) {
        return navigate("/login");
      }
    };
    fetchData();
  }, [token]);

  const band = [];
  if (data && data[0] && data[0]._id) band.push(data[0]._id);
  if (data && data[1] && data[1]._id) band.push(data[1]._id);
  if (data && data[2] && data[2]._id) band.push(data[2]._id);
  if (data && data[3] && data[3]._id) band.push(data[3]._id);
  if (data && data[4] && data[4]._id) band.push(data[4]._id);

  // console.log(data);
  // console.log(data[4]);
  // console.log(data);

  const seriesA = [];
  if (data && data[0] && data[0].kgBurned) seriesA.push(data[0].kgBurned);
  if (data && data[1] && data[1].kgBurned) seriesA.push(data[1].kgBurned);
  if (data && data[2] && data[2].kgBurned) seriesA.push(data[2].kgBurned);
  if (data && data[3] && data[3].kgBurned) seriesA.push(data[3].kgBurned);
  if (data && data[4] && data[4].kgBurned) seriesA.push(data[4].kgBurned);

  const seriesB = [];
  if (data && data[0] && data[0].Time) seriesB.push(data[0].Time);
  if (data && data[1] && data[1].Time) seriesB.push(data[1].Time);
  if (data && data[2] && data[2].Time) seriesB.push(data[2].Time);
  if (data && data[3] && data[3].Time) seriesB.push(data[3].Time);
  if (data && data[4] && data[4].Time) seriesB.push(data[4].Time);

  // console.log(band);
  // console.log(seriesA);
  // console.log(seriesB);

  const label = band.length === 0 ? ["A"] : band;
  const time = seriesA.length === 0 ? [0] : seriesA;
  const kgb = seriesB.length === 0 ? [0] : seriesB;

  // console.log(label);
  // console.log(time);
  // console.log(kgb);

  const sumTime = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.Time,
    0
  );
  const sumkgb = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.kgBurned,
    0
  );
  // console.log(sumTime);
  // console.log(sumkgb);
  return (
    <>
      <div className="w-[400px] sm:w-[450px] h-[380px] m-auto py-3 item-center rounded shadow-lg border-2 dark:border-1 dark:border-gray-700 dark:bg-gray-800 dark:text-cyan-50">
        <ToastContainer />
        <div className="text-center font-bold text-2xl text-black dark:text-cyan-50">
          Chartsbar
        </div>
        <div className="">
          <div className="flex items-center ml-5">
            <div className="bg-[#2E96FF] w-4 h-4 rounded-full mx-2"></div>
            <p className="text-black dark:text-cyan-50">
              Total exercise time :
            </p>
            <span className="font-bold ml-1 text-black dark:text-cyan-50">
              {sumTime} Minute
            </span>
          </div>
          <div className="flex items-center ml-5">
            <div className="bg-[#02B2AF] w-4 h-4 rounded-full mx-2"></div>
            <p className="text-black dark:text-cyan-50">
              Total burn kilograms :
            </p>
            <span className="font-bold ml-1 text-black dark:text-cyan-50">
              {sumkgb.toFixed(2)} kg
            </span>
          </div>
        </div>
        <div className="dark:text-cyan-50 bg-white m-2 rounded-md">
          {" "}
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: label,
              },
            ]}
            series={[
              {
                data: time,
              },
              {
                data: kgb,
              },
            ]}
            width={420}
            height={270}
          />
        </div>
      </div>
    </>
  );
};
