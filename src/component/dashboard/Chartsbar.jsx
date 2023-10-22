import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export const Chartsbar = () => {
  const data = [
    {
      _id: "Run",
      kgBurned: 0.5,
      Time: 210,
    },
    {
      _id: "Yoga",
      kgBurned: 0.2,
      Time: 45,
    },
    {
      _id: "KitaMuaythai",
      kgBurned: 0.5,
      Time: 0.4,
    },
    {
      _id: "Aerobics",
      kgBurned: 234.77,
      Time: 50,
    },
    {
      _id: "gegeg",
      kgBurned: 234.77,
      Time: 50,
    },
  ];
  // console.log(data[0]._id);

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

  // console.log(band);
  // console.log(seriesA);
  // console.log(seriesB);

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
