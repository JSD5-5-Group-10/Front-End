import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import axios from "axios";

export default function PieChartWithCenterLabel() {
  const [dataSum, setDataSum] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend-group10.onrender.com/api/activity/chart",
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

  // console.log();

  const data = [
    {
      value: dataSum && dataSum[0] ? dataSum[0].value : 0,
      label: dataSum && dataSum[0] ? dataSum[0]._id : undefined,
    },
    {
      value: dataSum && dataSum[1] ? dataSum[1].value : 0,
      label: dataSum && dataSum[1] ? dataSum[1]._id : undefined,
    },
    {
      value: dataSum && dataSum[2] ? dataSum[2].value : 0,
      label: dataSum && dataSum[2] ? dataSum[2]._id : undefined,
    },
    {
      value: dataSum && dataSum[3] ? dataSum[3].value : 0,
      label: dataSum && dataSum[3] ? dataSum[3]._id : undefined,
    },
    {
      value: dataSum && dataSum[4] ? dataSum[4].value : 0,
      label: dataSum && dataSum[4] ? dataSum[4]._id : undefined,
    },
  ];

  const size = {
    width: 400,
    height: 300,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 18,
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <>
        <StyledText x={left + width / 2} y={top + height / 2}>
          {children}
        </StyledText>
      </>
    );
  }

  const sumCalories = dataSum.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  );

  return (
    <div className="w-[450px] m-auto py-3 item-center rounded shadow-lg border-2 ">
      <div className="flex justify-center items-center">
        <h1 className="text-center mr-1 font-bold text-xl">Calories Burned </h1>
        <img
          className="w-[22px]"
          src="https://cdn-icons-png.flaticon.com/512/7246/7246702.png"
          alt=""
        />
      </div>
      <PieChart series={[{ data, innerRadius: 90 }]} {...size}>
        <PieCenterLabel>Calories : {sumCalories}</PieCenterLabel>
      </PieChart>
    </div>
  );
}
