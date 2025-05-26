import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[300px] mx-auto px-4'>
        <p className='text-orange font-bold uppercase text-3xl sm:text-2xl md:text-3xl font-special text-center'>Since 2024</p>
        <div className='flex justify-center items-center gap-4'>
            {/* <ExperienceInfo number="2.5" text="Years" /> */}
            <p className='font-bold text-6xl sm:text-4xl md:text-6xl text-white'>-</p>
            {/* <ExperienceInfo number="5" text="Websites"/> */}
        </div>
        <p className='text-center text-white text-sm sm:text-xs md:text-sm'>I have been crafting digital experiences that blend logic with creativity, continuously honing my coding skills and delivering impactful solutions.</p>
        {/* <ExperienceInfo number="$10k" text="Max Budget"/> */}
    </div>
  )
}

export default ExperienceTopLeft