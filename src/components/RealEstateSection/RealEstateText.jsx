import React from 'react'

const RealEstateText = () => {
  return (
    <div className='flex flex-col items-center mt-[100px] text-center'>
      <p className='font-special text-sm uppercase tracking-[0.5em] text-orange mb-4'>Focus Area</p>
      <h2 className='text-4xl sm:text-5xl lg:text-6xl text-white mb-6'>
        Real Estate & Property Management (Dubai)
      </h2>
      <p className='text-lg text-center text-lightGrey max-w-[760px] leading-8'>
        Real estate is one of the areas I go deep on, alongside the broader VA and admin support I offer clients in other industries. Here's what hands-on Dubai property support looks like when I'm involved.
      </p>
      <span className='mt-5 inline-block rounded-full border border-orange px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange'>
        Currently supporting listing management and compliance documentation across multiple Dubai-based brokerages
      </span>
    </div>
  )
}

export default RealEstateText
