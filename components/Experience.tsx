import React from "react";
import { workExperience } from "@/data";
import { Timeline } from "@/components/ui/Timeline";


const Experience = () => {
  const timelineData = workExperience.map((card) => ({
    title: card.title,
    content: (
      <div className="flex flex-col lg:flex-row lg:items-center p-4 md:p-6 lg:p-8 gap-4 lg:gap-6">
        <img
          src={card.thumbnail}
          alt={card.title}
          className="lg:w-32 md:w-24 w-20 rounded-lg shadow-lg"
        />
        <div className="lg:ms-6">
          <h1 className="text-start text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            {card.title}
          </h1>
          <h5 className="text-start text-md md:text-md font-bold text-gray-900 dark:text-white">
            {card.time}
          </h5>
          <p className="text-start text-gray-700 dark:text-gray-300 mt-3">
            {card.desc}
          </p>
        </div>
      </div>
    ),
  }));

  return (
    <div className="py-16 lg:py-20 w-full bg-gray-50 dark:bg-gray-900"
    id="experience">
       <h1 className="heading text-center mb-12 text-gray-900 dark:text-white">
        About <span className="text-blue-500">Work Experience</span>
      </h1>

      <div className="w-full mt-12">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default Experience;
