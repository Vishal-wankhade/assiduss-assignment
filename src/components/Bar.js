import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../App.css';

function Bar() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Sample data for the bar chart
    const data = {
      labels: ['Older', 'Jan', 'Feb', 'Mar', 'Apr', 'Jun'],
      datasets: [
        {
          label: 'Sample Bar Chart',
          backgroundColor: '#47b747',
          
          borderWidth: 0,
          borderRadius: 10,
          barThickness: 20,
          data: [10, 20, 15, 25, 30, 26],
        },
      ],
    };

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Chart configuration
    const options = {
      scales: {
        x: {
          beginAtZero: true,
          gridLines: {
            display:false,
        },
        },
        y: {
          display: false, 
          gridLines: {
            display: false,
        },// Hide y-axis labels
        },
      },
      elements: {
        bar: {
          width:15,
          borderWidth: 0.5, // Adjust bar border width
          borderRadius: 5, // Adjust bar border radius
        },
      },
      layout: {
        display:"none",
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
      plugins: {
        legend: {
          display: false, // Hide legend
        },
      },
    };

    // Create the chart
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className='barchart'>
      <div className='filter'>
        <h3>Invoiced owned to you</h3>
        <div className='bar-buttons'>
          <p>Next Sales Invoice</p>
        </div>
      </div>
      <div className='graph2'>
        <canvas ref={chartRef} className='canva2'></canvas>
      </div>
    </div>
  );
}

export default Bar;
