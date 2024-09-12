import React, { useState } from "react";

const Resource = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    {
      name: "Penis Lumps",
      info: "Lumps on the penis can be caused by various conditions, including infections or cysts.",
    },
    {
      name: "Scrotal Lumps",
      info: "Lumps in the scrotum might be benign or indicate conditions like hernias or tumors.",
    },
    {
      name: "Premature Ejaculation",
      info: "Premature ejaculation is when ejaculation occurs sooner than desired during intercourse.",
    },
    {
      name: "Fordyce Spots",
      info: "Fordyce spots are small, painless bumps on the penis caused by enlarged oil glands.",
    },
    {
      name: "Steroids Misuse",
      info: "Misuse of steroids can lead to severe health issues including hormonal imbalances.",
    },
    {
      name: "Substance Use Disorder",
      info: "Substance use disorder involves the problematic use of drugs or alcohol affecting overall health.",
    },
    {
      name: "Painful Ejaculation",
      info: "Painful ejaculation can be caused by infections or inflammation in the reproductive organs.",
    },
    {
      name: "Hormones",
      info: "Hormonal imbalances can affect sexual health and function.",
    },
    {
      name: "Prostate Issues",
      info: "Prostate issues can include benign prostatic hyperplasia or prostatitis, affecting urination.",
    },
    {
      name: "Erectile Dysfunction",
      info: "Erectile dysfunction is the inability to achieve or maintain an erection sufficient for intercourse.",
    },
    {
      name: "Low Testosterone",
      info: "Low testosterone can cause reduced libido, fatigue, and mood changes.",
    },
    {
      name: "Testicular Pain",
      info: "Testicular pain can result from injuries, infections, or other medical conditions.",
    },
    {
      name: "Urinary Tract Infections",
      info: "UTIs can affect the urinary system, causing discomfort or pain during urination.",
    },
  ];

  const handleTopicClick = (topic) => {
    setSelectedTopic(selectedTopic === topic ? null : topic);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Learn More About Men's Private Health
          <br />
          <span className="text-blue-600">And Symptoms</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl sm:max-w-4xl mx-auto">
          Explore a range of private health topics and symptoms that affect men.
          Our comprehensive resources are here to help you understand and manage
          these issues effectively.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
        {topics.map((topic, index) => (
          <div key={index} className="flex flex-col items-center">
            <button
              onClick={() => handleTopicClick(topic.name)}
              className="bg-white text-gray-800 border border-gray-300 rounded-lg px-4 py-2 sm:px-6 sm:py-3 shadow-lg hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105"
            >
              {topic.name}
            </button>
            {selectedTopic === topic.name && (
              <div className="mt-2 text-center">
                <p className="text-gray-600">{topic.info}</p>
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

export default Resource;
