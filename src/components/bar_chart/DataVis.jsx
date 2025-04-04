import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './DataVis.module.css';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Green', 'Not Green', 'Neutral'],
  datasets: [
    {
      label: 'Energy Breakdown',
      data: [16177, 5194, 2354], // Your data values for each category
      backgroundColor: ['#02B782', '#FF6D6D', '#D9D9D9'], // Assign colors for each bar
      borderColor: ['#02B782', '#FF6D6D', '#D9D9D9'],
      borderWidth: 1,
      barThickness: 40, // Set the bar thickness (width)
      categoryPercentage: .2, // Maximize the use of space for each category
      barPercentage: 0.8,  // Control the width of the bars relative to the category
    },
  ],
};

const options = {
  responsive: true,
  layout: {
    padding: {
      top: 20,    // Space above the chart
      right: 20,  // Space to the right
      bottom: 30, // ✅ Adds space below, pushing labels away
      left: 20,   // Space to the left
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend if not needed
    },
    tooltip: {
      callbacks: {
        title: () => null, // Removes extra title in tooltip
        label: function (tooltipItem) {
          return tooltipItem.raw; // Only show value
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide grid lines
      },
      ticks: {
        padding: 10, // ✅ Pushes X-axis labels away from the chart
      },
    },
    y: {
      display: false, // Hide Y-axis if not needed
    },
  },
};


const DataVis = ({ stats }) => (

  

  <div className={styles.dataVisContainer}>
    <Bar data={data} options={options} />
  </div>
);

export default DataVis;
