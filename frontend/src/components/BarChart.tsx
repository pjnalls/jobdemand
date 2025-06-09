import { useEffect, useRef, useState } from 'react';

import { Bar } from 'react-chartjs-2';
import Chart, { CategoryScale } from 'chart.js/auto';

import './BarChart.css';

Chart.register(CategoryScale);

import type { Table62Table1Data } from '../types';

export const BarChart = ({
  userJobs,
  setUserJobs,
}: {
  userJobs: Table62Table1Data[];
  setUserJobs: (userJobs: Table62Table1Data[]) => void;
}) => {
  const [prefersDark, setPrefersDark] = useState(false);

  useEffect(() => {
    Chart.defaults.font.size = 20;
  }, []);

  useEffect(() => {
    if (window) {
      setPrefersDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    if (prefersDark) {
      Chart.defaults.color = '#fff';
    } else {
      Chart.defaults.color = '#000';
    }
  }, [prefersDark]);

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
  const handleUpdate = () => {
    setChartData(() => ({
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
    }));
  };

  const chartRef = useRef(null);

  useEffect(() => {
    handleUpdate();
  }, [userJobs]);

  return (
    <div className="chart-container">
      <div className="chart-controls">
        <button onClick={handleUpdate}>Update Chart</button>
        <button
          onClick={() => {
            setUserJobs([]);
            window.location.href = '#menu';
            const checkboxes = document.getElementsByClassName('checkbox');
            for (const checkbox of checkboxes) {
              (checkbox as HTMLInputElement).checked = false;
            }
          }}
        >
          Start Over
        </button>
      </div>
      <div style={{ width: '100%', height: '500px' }}>
        <Bar
          style={{
            width: '100%',
          }}
          ref={chartRef}
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Employment Change % (2023-2033)',
                  color: (prefersDark && '#fff') || '#000',
                },
                ticks: {
                  color: prefersDark ? '#ccc' : '#777',
                  // @ts-expect-error - callback is not typed
                  callback: (value: number) => `${value}%`,
                },
                grid: {
                  color: prefersDark ? '#888' : '#ccc',
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Job Titles',
                  color: prefersDark ? '#fff' : '#000',
                },
                ticks: {
                  color: prefersDark ? '#ccc' : '#777',
                },
                grid: {
                  color: prefersDark ? '#888' : '#ccc',
                },
              },
            },
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
      </div>
    </div>
  );
};
