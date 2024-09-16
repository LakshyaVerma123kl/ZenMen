import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Men Affected by Intimate Health Issues", "Men Not Affected"],
    datasets: [
      {
        label: "Prevalence of Intimate Health Issues in Men Globally",
        data: [45, 55],
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <Pie data={data} options={options} />
    </div>
  );
};

const Issues = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          How Common Are These
          <br />
          <span className="text-blue-600">Men's Health Issues?</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl sm:max-w-4xl mx-auto">
          Explore the prevalence of health issues affecting men, as illustrated
          by our comprehensive pie chart. Our resources provide valuable
          insights into how common these conditions are and offer guidance on
          understanding and managing them effectively.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-4">
          Global Prevalence of Intimate Health Issues
        </h3>
        <PieChart />
      </div>

      <div className="text-center mt-8">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold">
          <Link to="/resource" className="text-blue-600 hover:underline">
            Browse All Topics
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Issues;
