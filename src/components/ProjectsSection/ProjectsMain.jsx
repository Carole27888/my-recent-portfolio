import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'

const projects = [
    {
        name: "Pizza Hut",
        year: "2025",
        align: "right",  // Use lowercase
        image: "./images/formyweb.jpeg",
        link: "https://pizzahut-project-phase2-1fns.vercel.app/",
    },
    {
        name: "Pizza Hut",
        year: "2025",
        align: "left",  // Use lowercase
        image: "./images/webbsite.jpeg",
        link: "https://pizzahut-project-phase2-1fns.vercel.app/",
    },
    {
        name: "Pizza Hut",
        year: "2025",
        align: "right",  // Use lowercase
        image: "./images/Laptop mockup.jpeg",
        link: "https://pizzahut-project-phase2-1fns.vercel.app/",
    },
    {
        name: "Pizza Hut",
        year: "2025",
        align: "left",  // Use lowercase
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
                  align={project.align} // Ensure align is correctly passed as 'left' or 'right'
                  image={project.image} 
                  link={project.link} 
              />
          ))}
      </div>
    </div>
  )
}

export default ProjectsMain
