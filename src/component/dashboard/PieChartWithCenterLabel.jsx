import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function PieChartWithCenterLabel() {
  const [dataSum, setDataSum] = useState([]);
  const token = localStorage.getItem("token");
  const apiKey = import.meta.env.VITE_API;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiKey}/api/activity/chart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response) {
          return toast.error("error");
        }
        // console.log(response.data.data);
        setDataSum(response.data?.data);
      } catch (error) {
        toast.error(error);
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
    height: 250,
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
    <div className="w-[400px] dark:border-gray-700  sm:w-[450px] h-[380px] justify-center m-auto py-5 item-center rounded shadow-lg border-2 dark:border-1 dark:bg-gray-800 dark:text-cyan-50">
      <ToastContainer />
      <div className="flex justify-center items-center">
        <h1 className="text-center mr-1 mb-5 font-bold text-2xl text-black dark:text-cyan-50">
          Calories Burned{" "}
        </h1>
        <img
          className="w-[22px] mb-5"
          src="https://cdn-icons-png.flaticon.com/512/7246/7246702.png"
          alt=""
        />
      </div>
      <div className="bg-white py-5 m-2 rounded-md">
        {" "}
        <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
          <PieCenterLabel>Calories : {sumCalories.toFixed(2)}</PieCenterLabel>
        </PieChart>
      </div>
    </div>
  );
}
