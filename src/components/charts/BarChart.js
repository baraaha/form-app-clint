import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My Dataset",
      data: [10, 20, 30],
      backgroundColor: ["red", "blue", "yellow"],
    },
  ],
};

const options = {
  // Custom options for the chart (if needed)
};

const MyDoughnutChart = () => {
  return (
    <div className="w-3/12">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default MyDoughnutChart;
