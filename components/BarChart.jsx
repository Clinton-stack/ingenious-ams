'use client';
import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['Great lakes', 'Capitulate', 'Valero', 'Love Know Ltd', 'JBombardier Ass.'],
    datasets: [
      {
        label: 'Expenses',
        data: [30000, 40000, 25000, 35000, 15000],
        backgroundColor: '#FE4B4B',
      },
      {
        label: 'Income',
        data: [50000, 80000, 75000, 63000, 45000],
        backgroundColor: '#4B9EDF',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        grid: {
          display: true, // Show y-axis grid lines
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
    <div style={{ height: '250px', width: '100%', position: 'relative' }}>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BarChart;
