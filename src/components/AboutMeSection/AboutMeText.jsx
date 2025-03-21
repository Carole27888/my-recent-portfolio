import React from 'react'

const aboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-red mb-10">About Me</h2>
      <p className='text-white'>I’m Carole Mutemi, a passionate and detail-oriented full-stack developer dedicated to crafting innovative and user-centric digital solutions. With a strong problem-solving mindset and a keen eye for design, I specialize in building seamless and efficient web experiences. My approach combines creativity with technical expertise to develop scalable and high-performance applications. Always eager to learn and adapt, I thrive in dynamic environments where I can contribute to impactful projects. Whether optimizing front-end interactions or enhancing back-end functionality, I am committed to delivering exceptional results that drive success.</p> 
      <button className="border border-red rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white">My Projects</button>
    </div>

  )
}

export default aboutMeText