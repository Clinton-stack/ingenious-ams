"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box, useMediaQuery } from "@chakra-ui/react";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ChartDataLabels
);

export default function LineChart() {
  const [isPhoneScreen] = useMediaQuery("(max-width: 425px)");

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Income",
        data: [12000, 15000, 10000, 19000, 17000, 22000, 24000],
        backgroundColor: "#5DADEC",
        borderColor: "#5DADEC",
      },
      {
        label: "Running Cost",
        data: [8000, 10000, 7000, 12000, 9000, 15000, 13000],
        backgroundColor: "#EDCC1C",
        borderColor: "#EDCC1C",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Income Gen vs Running Cost",
      },
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <Box
      width="100%"
      height={isPhoneScreen ? "100vw" : "400px"}
      position="relative"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box className={isPhoneScreen ? "rotate-90" : ""} h='100%' w='100%'>
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
}
