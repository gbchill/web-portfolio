"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import dynamic from 'next/dynamic';

// Dynamically import PinContainer with SSR disabled
const PinContainer = dynamic(() =>
  import("./ui/Pin").then((mod) => mod.PinContainer),
  { ssr: false }
);

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-blue-500">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] my-8"
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-white dark:bg-[#13162D]">
                  <img
                    src={item.img}
                    alt="cover"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-4 mb-4 text-black dark:text-[#BEC1DD]">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border shadow-lg border-white/[.2] rounded-full bg-white dark:bg-gray-900 lg:w-10 lg:h-10 w-10 h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-blue-500">
                    Check Github
                  </p>
                  <FaLocationArrow className="ms-3" color="white" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
