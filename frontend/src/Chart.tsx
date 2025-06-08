import { useEffect, useState } from 'react';

import { Bar } from 'react-chartjs-2';
import Chart, { CategoryScale } from 'chart.js/auto';

Chart.register(CategoryScale);

import type { Table62Table1Data } from './types';

export const BarChart = ({ userJobs }: { userJobs: Table62Table1Data[] }) => {
  useEffect(() => {
    Chart.defaults.font.size = 20;
  }, []);

  const [chartData, setChartData] = useState<{
    type: 'bar' | 'line' | 'pie' | 'doughnut';
    labels: string[];
    options: {
      scales: {
        y: {
          title: {
            display: boolean;
            text: string;
          };
        };
      };
    };
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
      hoverBackgroundColor: string;
      hoverBorderColor: string;
    }[];
  }>({
    type: 'bar',
    labels: [],
    datasets: [],
    options: {
      scales: {
        y: {
          title: {
            display: true,
            text: 'Employment Change % (2023-2033)',
          },
        },
      },
    },
  });

  useEffect(() => {
    setChartData({
      type: 'bar',
      labels: userJobs.map((job) =>
        job['2023 National Employment Matrix title'].length > 20
          ? job['2023 National Employment Matrix title'].substring(0, 20) +
            '...'
          : job['2023 National Employment Matrix title']
      ),
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: 'Employment Change % (2023-2033)',
            },
          },
        },
      },
      datasets: [
        {
          label: 'Employment Change % (2023-2033)',
          data: userJobs.map(
            (job: Table62Table1Data) =>
              +job['Employment change, percent, 2023–33']
          ),

          backgroundColor: 'rgba(99, 125, 255, 0.2)',
          borderColor: 'rgba(99,125, 255, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(99, 125, 255, 0.4)',
          hoverBorderColor: 'rgba(99, 125, 255, 1)',
        },
      ],
    });
  }, [userJobs]);

  return (
    <Bar
      style={{
        width: '100%',
      }}
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            font: {
              size: 24,
            },
          },
        },
      }}
    />
  );
};
