'use client';
import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, DoughnutController, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, DoughnutController, CategoryScale, LinearScale, Title, Tooltip, Legend);
const DonutChart = () => {
  
  const chartRef = useRef(null);

  const data = {
    labels: ['Clint Views', 'Afven Pharma.', 'Tims Brothels', 'Mikes Bar', 'Joes Garage'],
    datasets: [
      {
        label: 'Top Assets',
        data: [30000, 40000, 25000, 63000, 45000],
        backgroundColor: ['#F4D126', '#FE4B4B', '#4B9EDF', '#1A535C', '#5C1A55'],
        borderWidth: 0.7,
        cutout: '80%',
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 10, // Adjust the width of the legend box
          padding: 10, // Add padding around the legend labels
          font: {
            size: 12, // Set the font size for legend labels
          },
        },
      },
    },
  };

  const handleResize = () => {
    if (chartRef.current) {
      chartRef.current.update(); // Correctly update the chart instance
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ height: 'auto', width: 'auto' }}>
      <Doughnut ref={chartRef} data={data} options={options}/>
    </div>
  );
};

export default DonutChart;


