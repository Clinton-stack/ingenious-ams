"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function PieChart() {
  const data = {
    labels: [
      "Spectranet",
      "Surge Security",
      "Inegnious Tech",
      "Jife Inc",
      "Amazon",
      "AlH international",
    ],
    datasets: [
      {
        label: "Income generated by each company",
        data: [970000, 2000000, 430000, 300000, 500000, 1000000],
        backgroundColor: [
          "#F4D226",
          "#19BE0A",
          "#631C5B",
          "#1C5962",
          "#FE4C4C",
          "#4EA2E0",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 30, // Adjust the width of the legend box
          padding: 10, // Add padding around the legend labels
          font: {
            size: 12, // Set the font size for legend labels
          },
        },
      },
      datalabels: {
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce(
            (acc, curr) => acc + curr,
            0
          );
          const percentage = ((value / total) * 100).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
        font: {
          weight: "bold",
          size: 12,
        },
      },
    },
  };

  return (
    <div style={{ height: "350px", width: "100%" }}>
      <Pie data={data} options={options} />
    </div>
  );
}