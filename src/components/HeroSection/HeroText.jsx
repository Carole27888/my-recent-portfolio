// import React from 'react'

// const HeroText = () => {
//   return (
//     <div className =  'flex flex-col gap-4 h-full justify-center md:text-left sm:text-center ml-4'>
//         <h2 className= 'lg:text-2xl sm:text-xl uppercase text-cyan'>FULL STACK WEB DEVELOPER</h2>
//         <h1 className= 'md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-red'>CAROLE MUTEMI</h1>
//         <p className='text-lg mt-4 text-white'>Innovative full-stack developer crafting seamless,high-performance <br/>web experiences with precision and creativity.</p>
//     </div>
//   )
// }

// export default HeroText
import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center md:ml-10 sm:ml-4'>
        <h2 className='lg:text-2xl sm:text-xl uppercase text-cyan'>
          FULL STACK WEB DEVELOPER
        </h2>
        <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-red'>
          CAROLE MUTEMI
        </h1>
        <p className='text-lg mt-4 text-white'>
          Innovative full-stack developer crafting seamless, high-performance
          <br /> web experiences with precision and creativity.
        </p>
    </div>
  )
}

export default HeroText;
