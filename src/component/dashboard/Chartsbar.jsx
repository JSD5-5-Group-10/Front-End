import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";
import axios from "axios";
export const Chartsbar = () => {

  // const data = [
  //   {
  //     _id: "Run",
  //     kgBurned: 0,
  //     Time: 0,
  //   },
  //   {
  //     _id: "Yoga",
  //     kgBurned: 0,
  //     Time: 0,
  //   },
  //   {
  //     _id: "KitaMuaythai",
  //     kgBurned: 0,
  //     Time: 0,
  //   },
  //   {
  //     _id: "Aerobics",
  //     kgBurned: 0,
  //     Time: 0,
  //   },
  //   {
  //     _id: "weight",
  //     kgBurned: 0,
  //     Time: 0,
  //   },
  // ];
  // console.log(data[0]._id);

  const [dataSum, setDataSum] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://back-end-tp-test.onrender.com/api/activity/chart2",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        if (!response) {
          return console.log("error");
        }
        console.log(response.data.data);
        setDataSum(response.data?.data);
      } catch (error) {
        console.log(error);
      }
      if (!token) {
        return navigate("/login");
      }
    };
    fetchData();
  }, [token]);
  console.log(dataSum)

  const stringValue = data[0]?.kgBurned.toLocaleString();
  // console.log(stringValue);
  // console.log(typeof stringValue);

  const band = [];
  if (data && data[0] && data[0]._id) band.push(data[0]._id.toLocaleString());
  if (data && data[1] && data[1]._id) band.push(data[1]._id.toLocaleString());
  if (data && data[2] && data[2]._id) band.push(data[2]._id.toLocaleString());
  if (data && data[3] && data[3]._id) band.push(data[3]._id.toLocaleString());
  if (data && data[4] && data[4]._id) band.push(data[4]._id.toLocaleString());

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

  console.log(band);
  console.log(seriesA);
  console.log(seriesB);

  return (
    <>
      <div className="w-[400px] sm:w-[450px] m-auto py-3 item-center rounded shadow-lg border-2 ">
        <div className="text-center mr-1 font-bold text-xl">Chartsbar</div>
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: band,
            },
          ]}
          series={[
            {
              data: seriesA,
            },
            {
              data: seriesB,
            },
          ]}
          width={420}
          height={350}
        />
      </div>
    </>
  );
};
