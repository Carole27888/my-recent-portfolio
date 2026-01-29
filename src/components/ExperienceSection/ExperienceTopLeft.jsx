import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[300px] mx-auto px-4'>
        <p className='text-orange font-bold uppercase text-3xl sm:text-2xl md:text-3xl font-special text-center'>Availability</p>
        <div className='flex justify-center items-center gap-4'>
            <p className='font-bold text-6xl sm:text-4xl md:text-6xl text-white'>30-40</p>
        </div>
        <p className='text-center text-white text-sm sm:text-xs md:text-sm'>Hours per week, flexible. Reliable support with clear updates, tidy systems, and strong attention to detail.</p>
        {/* <ExperienceInfo number="$10k" text="Max Budget"/> */}
    </div>
  )
}

export default ExperienceTopLeft
