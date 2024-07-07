// src/PieChart.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  principal: number;
  interest: number;
}

const PieChart: React.FC<PieChartProps> = ({ principal, interest }) => {
  const data = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        label: 'Loan Amount and Interest',
        data: [principal, interest],
        backgroundColor: [
            'rgba(54, 162, 235, 0.8)',   // Dark blue
            'rgba(255, 159, 64, 0.7)',   // Dark orange
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',    // Dark blue
            'rgba(255, 159, 64, 1)',    // Dark orange
          ],
          
          
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='PieChart'>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
