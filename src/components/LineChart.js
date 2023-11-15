import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [randomizedData, setRandomizedData] = useState([100.4, 140.8, 110.8, 150.4, 110.6, 160.2,105]);

  useEffect(() => {
    // Ensure the chartRef is not null before trying to create or destroy the chart
    if (chartRef.current) {
      // Destroy the previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Jun 2016", "Jul 2016", "Aug 2016", "Sep 2016", "Oct 2016", "Nov 2016","Dec 2016"],
          datasets: [{
            label: "Money",
            backgroundColor: 'transparent',
            borderColor: '#44ac56',
            data: randomizedData,
            lineTension: 0.4,
            showLine: true, // Hide the dots
            pointRadius: 0, // Set the pointRadius to 0 to hide the dots
          }]
        },
        options: {
          layout: {
            padding: 10,
            width: 500,
            height: 400,
            display:false,
          },
          legend: {
            display: false, // Hide the legend
          },
          title: {
            display: true,
            text: 'Precipitation in Toronto'
          },
          scales: {
            y: {
              display: false,
            },
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Month of the Year'
              }
            }]
          }
        }
      });
    }
  }, [randomizedData]); // Re-render the chart when the data changes

  const handleRandomizeData = () => {
    // Randomize the data and set it to the state
    const newData = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 100);
    setRandomizedData(newData);
  };

  return (
    <div className='linechart'>
      <div className='filter'>
        <h3>Checking Account</h3>
        <div className='filter-buttons'>
          <button onClick={handleRandomizeData}>Randomize Data</button>
        </div>
      </div>
      <div className='graph'>
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>
    </div>
  );
};

export default LineChart;
