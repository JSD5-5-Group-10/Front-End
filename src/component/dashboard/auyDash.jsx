import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const chartSetting = {
  xAxis: [
    {
      label: "Time (mm)",
    },
  ],
  width: 500,
  height: 400,
};

const valueFormatter = (value) => `${value} minute`;

export default function HorizontalBars() {
  const [dataSum, setDataSum] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_API;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiKey}/api/activity/chart3`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        if (!response) {
          return console.log("error");
        }
        console.log(response.data);
        setDataSum(response.data?.data);
      } catch (error) {
        console.log(error);
        console.log("erorrrrrrrrrrrrrrrrrrrrrrrrr");
      }
      if (!token) {
        return navigate("/login");
      }
    };
    fetchData();
  }, [token]);

  const datasets = [
    {
      value: dataSum && dataSum[0] ? dataSum[0].Time : null,

      label: dataSum && dataSum[0] ? dataSum[0]._id : undefined,
    },
    {
      value: dataSum && dataSum[1] ? dataSum[1].Time : null,
      label: dataSum && dataSum[1] ? dataSum[1]._id : undefined,
    },
    {
      value: dataSum && dataSum[2] ? dataSum[2].Time : null,
      label: dataSum && dataSum[2] ? dataSum[2]._id : undefined,
    },
    {
      value: dataSum && dataSum[3] ? dataSum[3].Time : null,
      label: dataSum && dataSum[3] ? dataSum[3]._id : undefined,
    },
    {
      value: dataSum && dataSum[4] ? dataSum[4].Time : null,
      label: dataSum && dataSum[4] ? dataSum[4]._id : undefined,
    },
  ];

  let fecthValue1 = {};
  let fecthValue2 = {};
  let fecthValue3 = {};
  let fecthValue4 = {};
  let fecthValue5 = {};

  if (dataSum && dataSum[0]) {
    fecthValue1.value = dataSum[0].Time;
    fecthValue1.label = dataSum[0]._id;
  } else {
    fecthValue1 = "";
  }

  if (dataSum && dataSum[1]) {
    fecthValue2.value = dataSum[1].Time;
    fecthValue2.label = dataSum[1]._id;
  } else {
    fecthValue2 = "";
  }

  if (dataSum && dataSum[2]) {
    fecthValue3.value = dataSum[2].Time;
    fecthValue3.label = dataSum[2]._id;
  } else {
    fecthValue3 = "";
  }

  if (dataSum && dataSum[3]) {
    fecthValue4.value = dataSum[3].Time;
    fecthValue4.label = dataSum[3]._id;
  } else {
    fecthValue4 = "";
  }

  if (dataSum && dataSum[4]) {
    fecthValue5.value = dataSum[4].Time;
    fecthValue5.label = dataSum[4]._id;
  } else {
    fecthValue5 = "";
  }

  const acountAllData = [];
  if (fecthValue1 !== "") acountAllData.push(fecthValue1);
  if (fecthValue2 !== "") acountAllData.push(fecthValue2);
  if (fecthValue3 !== "") acountAllData.push(fecthValue3);
  if (fecthValue4 !== "") acountAllData.push(fecthValue4);
  if (fecthValue5 !== "") acountAllData.push(fecthValue5);

  console.log(acountAllData);

  return (
    <BarChart
      dataset={datasets}
      yAxis={[{ scaleType: "band", dataKey: "label" }]}
      series={[{ dataKey: "value", label: "Duration Time", valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
