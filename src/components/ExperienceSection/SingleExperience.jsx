import React from 'react'

const SingleExperience = ({ experience }) => {  // Pass experience as a prop
  return (
    <div className="md:min-h-[350px] md:w-[260px] sm:w-full border-2 border-red border-dashed rounded-2xl mt-12 p-5 flex flex-col gap-2">
        <p className='font-bold text-cyan'>{experience.job}</p>
        <p className='text-red'>{experience.company}</p>
        <p className='text-grey'>{experience.duration}</p>
        <ul className='list-disc mt-3 pl-4 text-white space-y-2'>
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
