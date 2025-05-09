import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2023</p>
        <div className='flex justify-center items-center gap-4'>
            <ExperienceInfo number="2.5" text="Years" />
            <p className='font-bold text-6xl text-white'>-</p>
            <ExperienceInfo number="5" text="Websites"/>
        </div>
        <p className='text-center text-white'>With two years of coding under my belt, I've been crafting digital experiences that blend logic with creativity.</p>
        <ExperienceInfo number="$10k" text="Max Budget"/>
    </div>
  )
}

export default ExperienceTopLeft