import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'


const HeroMain = () => {
  return (
    <div className='pt-40 pb-16'>
        <div className='flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto items-center justify-between px-6 sm:px-10'>
        {/* <div className ='flex md:flex-row flex-col max-w-[1400px] mx-auto items-center justify-between relative px-10 '> */}
          <HeroText />
          <HeroPic />
          
        </div>

    </div>
  )
}

export default HeroMain


