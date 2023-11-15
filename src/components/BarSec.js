import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarSec = () => {
  const data = {
    labels: ["Aug", "Oct", "Sep", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: 'In',
        backgroundColor: "rgba(3,187,126,255)",
        data: [30, 59, 40, 56, 58, 50],
        barThickness: 20,
      },
      {
        label: 'Out',
        backgroundColor: "#48b748",
        data: [12, 59, 18, 56, 58, 45],
        barThickness: 20,
      },
      
    ],
  };

  const options = {
    padding:50,
    tooltips: {
      displayColors: true,
      callbacks: {
        mode: 'x',
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        display:false,
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      },
    },
    elements: {
      bar: {
        width:10,
        borderWidth: 0.2, // Adjust bar border width
        borderRadius: 5, // Adjust bar border radius
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
    },
  };

  return (
    <div className='BarSec' >
      <div className='filter'><h3 className='cash'>Total Cash Flow</h3></div>
      <Bar data={data} options={options} className='graph3' style={{height:"100"}}/>
    </div>
  );
};

export default BarSec;
