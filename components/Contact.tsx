import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data/index";
import MagicButton from "./MagicButton";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Contact <span className="text-blue-500">Me</span> 
        </h1>
        <p className="dark:text-white font-md text-gray-700 md:mt-10 my-5 text-center">
        Always open to connecting and exploring new opportunities.
        </p>
        <a href="mailto:georgebadulescu123@gmail.com">
          <MagicButton
            title="Let's connect"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 George Badulescu
        </p>

        <div className="flex items-center md:gap-3 gap-6">
        <a
  className="bg-white shadow-lg p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-black-400 border border-white/[.2] dark:text-white/60 text-[1.35rem]"
  href="https://linkedin.com/in/george-badu"
  target="_blank"
>
  <BsLinkedin />
</a>

<a
  className="bg-white shadow-lg p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-black-400 dark:text-white/60 border border-white/[.2] text-[1.35rem]"
  href="https://github.com/gbchill"
  target="_blank"
>
  <FaGithubSquare />
</a>

        </div>
      </div>
    </footer>
  );
};

export default Contact;