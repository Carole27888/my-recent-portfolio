import React from 'react'

const SingleExperience = ({ experience }) => {  // Pass experience as a prop
  return (
    <div className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-red border-dashed rounded-2xl mt-12 p-4">
        <p className='font-bold text-cyan'>{experience.job}</p>
        <p className='text-red'>{experience.company}</p>
        <p className='grey'>{experience.duration}</p>
        <ul className='list-disc mt-4 pl-4 text-white'>
            {experience.Responsibilities.map((item, index) => {
                return (
                    <li key={index}>{item}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default SingleExperience;
