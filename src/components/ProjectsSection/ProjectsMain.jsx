import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'

const projects = [
    {
        name: "Pizza Hut",
        year: "2025",
        align: "right",  
        image: "./images/pizz.jpeg",
        link: "https://pizzahut-project-phase2-1fns.vercel.app/",
    },
    {
        name: "Real Estate",
        year: "2025",
        align: "left",  
        image: "./images/realestate.jpeg",
        link: "https://heaven-home-2.vercel.app/",
    },
    {
        name: "Gym Project",
        year: "2025",
        align: "right",  
        image: "./images/gym.jpeg",
        link: "https://fitclub-1my.pages.dev/",
    },
    {
        name: "Pizza Hut",
        year: "2025",
        align: "left",  
        image: "./images/mywebd.jpeg",
        link: "https://pizzahut-project-phase2-1fns.vercel.app/",
    },
]

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectsText />

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
          {projects.map((project, index) => (
              <SingleProject
                  key={index}
                  name={project.name} 
                  year={project.year} 
                  align={project.align}
                  image={project.image} 
                  link={project.link} 
              />
          ))}
      </div>
    </div>
  )
}

export default ProjectsMain
