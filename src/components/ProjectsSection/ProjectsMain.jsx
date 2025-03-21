import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'

const projects = [
    {
        name: "Pizza Hut",
        year: "2025",
        align: "Right",
        image: "./images/_(20).jpeg",
        link: "https://pizzahut-project-phase2-1fns.vercel.app/",

    },
    {
        name: "Pizza Hut",
        year: "2025",
        align: "Left",
        image: "./images/Laptop mockup(1).jpeg",
        link: "https://pizzahut-project-phase2-1fns.vercel.app/",
    },
    {
        name: "Pizza Hut",
        year: "2025",
        align: "Right",
        image: "./images/Laptop mockup.jpeg",
        link: "https://pizzahut-project-phase2-1fns.vercel.app/",
    },
    {
        name: "Pizza Hut",
        year: "2025",
        align: "Left",
        image: "./images/mywebd.jpeg",
        link: "https://pizzahut-project-phase2-1fns.vercel.app/",
    },
]




const ProjectsMain = () => {
  return (
    <div>
        <ProjectsText />

        <div>
            <SingleProject />
        </div>
    </div>
  )
}

export default ProjectsMain