import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import hsExecutivePdf from '../ExperienceSection/HS EXECUTIVE.pdf'

const projects = [
    {
        name: "Year-Long Social Media Content Plan",
        year: "Content Strategy",
        align: "right",  
        image: "./images/website-img-4.jpg",
        link: "https://www.canva.com/design/DAG_z50IdHY/RGXCNKvDyZizqRtR4w9VrA/view?utm_content=DAG_z50IdHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdea04735ba",
    },
    {
        name: "Leads Generation",
        year: "Lead Generation",
        align: "left",
        image: "./images/LEADS.jpeg",
        link: "/images/LEADS GENERATION (1).pdf",
    },
    {
        name: "CRM",
        year: "HubSpot",
        align: "right",
        image: "./images/HUBSPOT.jpeg",
        link: "/images/CRM1.pdf",
    },
    {
        name: "Email Campaign Sample",
        year: "Email Marketing",
        align: "left",  
        image: "./images/website-img-2.webp",
        link: "https://www.canva.com/design/DAG_0Im-a6U/zcUzT6D9dIWoUMoNMao1WA/view?utm_content=DAG_0Im-a6U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h43c4ce2b54",
    },
    {
        name: "Social media Managing",
        year: "Service Business",
        align: "right",  
        image: "./images/smm12.png",
        link: "./images/SMMM (1).pdf",
    },
    {
        name: "Calendar Management",
        year: "Real Estate",
        align: "left",
        image: "./images/calendar.png",
        link: "#contact",
    },
    {
        name: "Executive Summary Presentation",
        // year: "Email Management",
        align: "right",
        image: "./images/_ (10).jpeg",
        link: hsExecutivePdf,
    },
    {
        name: "Client Onboarding SOP",
        year: "Operations & Admin",
        align: "left",
        image: "./images/clarity co.png",
        link: "/images/Clarity_Coaching_Co_Onboarding_SOP.pdf",
        description: "Designed and documented a full client onboarding workflow for a UK business coaching company, reducing onboarding time from 3 days to 4 hours. Includes email templates, CRM tracking system, quality checklist, and tools guide.",
        badge: "3 Days to 4 Hours",
        newTab: true,
    },
    {
        name: "Instagram Reels Growth Strategy",
        year: "Social Media Management",
        align: "right",
        image: "./images/hayek-reels.png",
        link: "/images/Hayek_Studios_Instagram_Reels_Strategy.pdf",
        description: "Developed and executed an Instagram Reels strategy for Hayek Studios, a wedding photography studio. One Reel alone generated 157,591 views, 83,858 reach, 6,581 interactions, and 10 days 20 hours of watch time.",
        badge: "157K Views",
        newTab: true,
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
                  description={project.description}
                  badge={project.badge}
                  newTab={project.newTab}
              />
          ))}
      </div>
    </div>
  )
}

export default ProjectsMain
