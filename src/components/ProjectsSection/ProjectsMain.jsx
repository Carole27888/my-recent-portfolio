import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'

const projects = [
    {
        name: "Year-Long Social Media Content Plan",
        year: "Content Strategy",
        align: "right",  
        image: "./images/website-img-4.jpg",
        link: "https://www.canva.com/design/DAG_z50IdHY/RGXCNKvDyZizqRtR4w9VrA/view?utm_content=DAG_z50IdHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdea04735ba",
    },
    {
        name: "Email Campaign Sample",
        year: "Email Marketing",
        align: "left",  
        image: "./images/website-img-2.webp",
        link: "https://www.canva.com/design/DAG_0Im-a6U/zcUzT6D9dIWoUMoNMao1WA/view?utm_content=DAG_0Im-a6U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h43c4ce2b54",
    },
    {
        name: "Lead Follow-Up System",
        year: "Service Business",
        align: "right",  
        image: "./images/website-img-3.jpg",
        link: "#contact",
    },
    {
        name: "Content Calendar Setup",
        year: "Real Estate",
        align: "left",
        image: "./images/website-img-1.jpg",
        link: "#contact",
    },
]

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      <ProjectsText />

      <div className="flex flex-col gap-20 max-w-full sm:max-w-[700px] md:max-w-[900px] mx-auto mt-12">
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
