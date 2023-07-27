import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Barchart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Energy KwH',
        data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
        backgroundColor: 'rgba(53, 162, 235, 0.4)',
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 1,
      },
    ],
  });

  const chartOptions = {
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Energy Usage',
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white' style={{ width: '100%', height: '100%' }}>
    <Bar data={chartData} options={chartOptions} />
    </div>

  );
};

export default Barchart;