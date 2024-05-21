// components/GaugeChart.js
"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Image, Stack, Text, VStack } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = () => {
  const data1 = {
    datasets: [
      {
        data: [99, 1], 
        backgroundColor: ["#23C020", "#E0E0E0"],
        borderWidth: 0,
        circumference: 180,
        rotation: -90,
      },
    ],
  };
  const data2 = {
    datasets: [
      {
        data: [88, 12], 
        backgroundColor: ["#23C020", "#E0E0E0"],
        borderWidth: 0,
        circumference: 180,
        rotation: -90,
      },
    ],
  };
  const data3 = {
    datasets: [
      {
        data: [75, 25], 
        backgroundColor: ["#2060C0", "#E0E0E0"],
        borderWidth: 0,
        circumference: 180,
        rotation: -90,
      },
    ],
  };
  const data4 = {
    datasets: [
      {
        data: [67, 33], 
        backgroundColor: ["#E2B92A", "#E0E0E0"],
        borderWidth: 0,
        circumference: 180,
        rotation: -90,
      },
    ],
  };
  const data5 = {
    datasets: [
      {
        data: [67, 33], 
        backgroundColor: ["#E2B92A", "#E0E0E0"],
        borderWidth: 0,
        circumference: 180,
        rotation: -90,
      },
    ],
  };
  const options = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    cutout: "75%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "" }}>
      <Stack wrap='wrap' direction="row" w="100%" gap={3} align={{base: 'center'}}>
        <VStack w="100px" align="center">
          <Doughnut data={data1} options={options} />

          <Text mt="-50px" fontSize="8px">
            99%
          </Text>
          <Image
            src="/images/Ellipse.png"
            w="60px"
            h="auto"
            alt="Companies logo"
          />
          <Text fontSize="10px">Plumbing Finesse</Text>
          <Text fontSize="10px">$180000</Text>

        </VStack>
        <VStack w="100px" align="center">
          <Doughnut data={data2} options={options} />

          <Text mt="-50px" fontSize="8px">
            88%
          </Text>
          <Image
            src="/images/Ellipse.png"
            w="60px"
            h="auto"
            alt="Companies logo"
          />
           <Text fontSize="10px">Bolt Shockers</Text>
          <Text fontSize="10px">$180000</Text>
        </VStack>
        <VStack w="100px" align="center">
          <Doughnut data={data3} options={options} />

          <Text mt="-50px" fontSize="8px">
            75%
          </Text>
          <Image
            src="/images/Ellipse.png"
            w="60px"
            h="auto"
            alt="Companies logo"
          />
           <Text fontSize="10px">Paint Life</Text>
          <Text fontSize="10px">$180000</Text>
        </VStack>
        <VStack w="100px" align="center">
          <Doughnut data={data4} options={options} />

          <Text mt="-50px" fontSize="8px">
            67%
          </Text>
          <Image
            src="/images/Ellipse.png"
            w="60px"
            h="auto"
            alt="Companies logo"
          />
           <Text fontSize="10px">Grand Immeubles</Text>
          <Text fontSize="10px">$180000</Text>
        </VStack>
        <VStack w="100px" align="center">
          <Doughnut data={data5} options={options} />

          <Text mt="-50px" fontSize="8px">
            67%
          </Text>
          <Image
            src="/images/Ellipse.png"
            w="60px"
            h="auto"
            alt="Companies logo"
          />
           <Text fontSize="10px">Sonic Rays</Text>
          <Text fontSize="10px">$180000</Text>
        </VStack>
      </Stack>
    </div>
  );
};

export default GaugeChart;
