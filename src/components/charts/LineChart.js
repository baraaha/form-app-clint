import React from "react";
import { Line } from "react-chartjs-2";

const labels = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [100, 200, 300, 400, 500],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [-200, -300, -400, -500, -600],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const options = {
  scales: {
    x: {
      type: "category",
    },
    y: {
      beginAtZero: true,
    },
  },
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};

export default LineChart;
