'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Center } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);

const MultiLevelDoughnutChart = () => {
  const data = {
    labels: [
      'Total Income from Asset managers',
      'Total Income Collaborators',
      'Total Income from Network services',
    ],
    datasets: [
      {
        label: 'Dataset 1',
        data: [100278000, 30000000 ],
        backgroundColor: ['#4B9EDF', '#ffff'],
        borderWidth: 1,
        cutout: '70%', 
        rotation: 100,
      },
      {
        label: 'Dataset 2',
        data: [129237000, 40000000],
        backgroundColor: ['#FF6384', '#ffff'],
        borderWidth: 1,
        cutout: '70%', 
        rotation: -70,
      },
      {
        label: 'Dataset 3',
        data: [129237000, 40000000],
        backgroundColor: ['#F4D126', '#ffff'],
        borderWidth: 1,
        cutout: '70%',
        rotation: 100, 
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
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';

            if (label) {
              label += ': ';
            }
            if (context.raw !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(context.raw);
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <Center w='100%' h='auto' p='80px'>
      <Doughnut data={data} options={options} style={{padding: '90px'}}/>
    </Center>
  );
};

export default MultiLevelDoughnutChart;
