import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Mental = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    {
      name: "Anxiety",
      info: "Anxiety disorders involve excessive worry or fear about everyday situations. Common symptoms include restlessness, rapid heartbeat, and difficulty concentrating.",
    },
    {
      name: "Depression",
      info: "Depression is a mood disorder characterized by persistent feelings of sadness, loss of interest in activities, and changes in sleep or appetite. It can affect daily functioning and overall well-being.",
    },
    {
      name: "Stress",
      info: "Stress is a response to demands or pressures from the environment. Chronic stress can lead to physical and mental health problems, including headaches, anxiety, and fatigue.",
    },
    {
      name: "Insomnia",
      info: "Insomnia is a sleep disorder that involves difficulty falling or staying asleep. It can result in daytime drowsiness, irritability, and difficulty concentrating.",
    },
    {
      name: "Bipolar Disorder",
      info: "Bipolar disorder is a mental health condition characterized by extreme mood swings, including emotional highs (mania) and lows (depression). It can impact daily life and relationships.",
    },
    {
      name: "PTSD",
      info: "Post-Traumatic Stress Disorder (PTSD) develops after experiencing or witnessing a traumatic event. Symptoms include flashbacks, nightmares, and severe anxiety.",
    },
  ];

  const handleTopicClick = (topic) => {
    setSelectedTopic(selectedTopic === topic ? null : topic);
  };

  const data = {
    labels: [
      "Anxiety (20%)",
      "Depression (25%)",
      "Stress (25%)",
      "Insomnia (15%)",
      "Bipolar Disorder (5%)",
      "PTSD (10%)",
    ],
    datasets: [
      {
        label: "Global Prevalence of Mental Health Issues in Men",
        data: [20, 25, 25, 15, 5, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.label || "";
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 py-16 px-6 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Learn More About Men's Mental Health
          <span className="block text-blue-600">And Well-being</span>
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Explore the global prevalence of mental health issues among men and
          understand the most common conditions.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="w-full max-w-md">
          <Pie data={data} options={options} />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
        {topics.map((topic, index) => (
          <div
            key={index}
            onClick={() => handleTopicClick(topic.name)}
            className={`flex flex-col items-center cursor-pointer p-4 rounded-lg shadow-md border ${
              selectedTopic === topic.name ? "bg-blue-100" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold">{topic.name}</h3>
            {selectedTopic === topic.name && (
              <div className="mt-2 text-center">
                <p className="text-gray-700">{topic.info}</p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline mt-1"
                  onClick={(e) => {
                    e.preventDefault();
                    // Logic to open detailed information or redirect to a detailed page
                  }}
                >
                  Click to know more
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mental;
