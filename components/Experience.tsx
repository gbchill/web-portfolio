import React from "react";
import { workExperience } from "@/data";
import { Timeline } from "@/components/ui/Timeline";

const Experience = () => {
  const timelineData = workExperience.map((card) => ({
    // For the timeline sidebar, we'll use company names
    title: getCompanyName(card.title, card.desc),
    
    content: (
      <div className="flex flex-col lg:flex-row lg:items-center p-4 md:p-6 lg:p-8 gap-4 lg:gap-6">
        <img
          src={card.thumbnail}
          alt={card.title}
          className="lg:w-32 md:w-24 w-20 rounded-lg shadow-lg"
        />
        <div className="lg:ms-6">
          {/* Display position title */}
          <h1 className="text-start text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            {/* Check if it's DevX Solutions and show Full Stack Engineer instead */}
            {card.title === "DevX Solutions" ? "Full Stack Engineer" :
             card.title === "The AI Society at ASU" ? "Technical Officer" : card.title}
          </h1>
          {/* Display company name */}
          <h4 className="text-start text-lg md:text-xl font-semibold text-blue-500 dark:text-blue-400 mt-1">
            {getCompanyName(card.title, card.desc)}
          </h4>
          <h5 className="text-start text-md md:text-md font-bold text-gray-900 dark:text-white mt-2">
            {card.time}
          </h5>
          <p className="text-start text-gray-700 dark:text-gray-300 mt-3">
            {card.desc}
          </p>
        </div>
      </div>
    ),
  }));

  // Helper function to extract company name with proper TypeScript typing
  function getCompanyName(title: string, desc: string): string {
    // For specific entries, extract company name
    if (title === "Software Developer Intern") return "GBCS Group";
    if (title === "Frontend Engineer Intern") return "Duet";
    if (title === "Java Tutor") return "Freelance";
    if (title === "DevX Solutions") return "DevX Solutions";
    if (title === "Software Engineering Intern") return "Medtronic";
    if (title === "The AI Society at ASU") return "The AI Society at ASU";

    // Fallback to searching in the description
    const descWords = desc.split(' ');
    for (let i = 0; i < descWords.length; i++) {
      if (descWords[i].charAt(0) === descWords[i].charAt(0).toUpperCase() &&
          descWords[i].length > 2 &&
          !["I", "API", "CSS", "UI", "UX", "HR"].includes(descWords[i])) {
        return descWords[i];
      }
    }

    // Final fallback
    return "Company";
  }

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