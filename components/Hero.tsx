import React from 'react'

import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>   
        {/* Removed hardcoded background classes */}
        <div className="h-screen w-full flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
             

                <TextGenerateEffect 
                  className='text-center text-[40px] md:text-5xl lg:text-6xl'
                  words="Bringing Ideas to Life Through Innovative Development"
                />
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                  Hi, I&apos;m George Badulescu, a Computer Science student at Arizona State University, passionate about transforming innovative concepts into seamless user experiences.
                </p>

                <a href="#about">
                    <MagicButton
                      title = "Show my work"
                      icon = {<FaLocationArrow/>}
                      position='right'
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero;
