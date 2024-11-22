import higher from '../assets/higher.svg'
import lower from '../assets/lower.svg'
import Dropdown from '../assets/drop_down.svg'
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const BloodPressureChart = () => {
  const data = {
    labels: ["Oct, 2023", "Nov, 2023", "Dec, 2023", "Jan, 2024", "Feb, 2024", "Mar, 2024"],
    datasets: [
      {
        label: "Systolic",
        data: [120, 118, 160, 110, 150, 159],
        borderColor: "#E27D9A",
        backgroundColor: "black",
        tension: 0.4,
        pointBackgroundColor: "#E27D9A",
      },
      {
        label: "Diastolic",
        data: [110, 66, 109, 92, 72, 99],
        borderColor: "#A594F9",
        backgroundColor: "#A594F9",
        tension: 0.4,
        pointBackgroundColor: "#A594F9",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="container-fluid d-flex chart">
      <div className="p-4 col-9">
        <div className='container-fluid d-flex'>
                <div className='col-9 me-7 align-items-start'><p className='text3 py-2 pl-5 mb-3'>Blood Pressure</p></div>
                <div className='col-3  align-items-end py-2 text1'>Last 6 months <img src={Dropdown}/></div>
            </div>
        <Line data={data} options={options} />
      </div>
      <div className='col-3'>
        <div className='my-5'>
        <li className='text8 list-unstyled'>Systolic</li>
        <li className='text9 list-unstyled'>160</li>
        <li className='text1 list-unstyled'><img src={higher}/> Higher than average</li>
        </div>
        <div>
        <li className='text8 list-unstyled'>Diastolic</li>
        <li className='text9 list-unstyled'>78</li>
        <li className='text1 list-unstyled'><img src={lower}/> Lower than average</li>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
