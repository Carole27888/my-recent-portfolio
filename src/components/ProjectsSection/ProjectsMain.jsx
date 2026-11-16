import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import hsExecutivePdf from '../ExperienceSection/HS EXECUTIVE.pdf'

const projects = [
    {
        name: "Social media Managing",
        year: "Service Business",
        align: "right",
        image: "./images/sm13.png",
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
        name: "Client Onboarding SOP",
        year: "Operations & Admin",
        align: "right",
        image: "./images/onboarding.png",
        link: "/images/WM_Client_Onboarding_SOP_Portfolio.pdf",
        description: "Designed and documented a full client onboarding workflow for a UK business coaching company, reducing onboarding time from 3 days to 4 hours. Includes email templates, CRM tracking system, quality checklist, and tools guide.",
        badge: "3 Days to 4 Hours",
        newTab: true,
    },
    {
        name: "Instagram Reels Growth Strategy",
        year: "Social Media Management",
        align: "left",
        image: "./images/rell stra.png",
        link: "/images/WM_Instagram_Reels_Strategy_Portfolio.pdf",
        description: "Developed and executed an Instagram Reels strategy for Hayek Studios, a wedding photography studio. One Reel alone generated 157,591 views, 83,858 reach, 6,581 interactions, and 10 days 20 hours of watch time.",
        badge: "157K Views",
        newTab: true,
    },
    {
        name: "CRM",
        year: "HubSpot",
        align: "right",
        image: "./images/HUBSPOT.jpeg",
        link: "/images/WM_CRM_Portfolio (1).pdf",
    },
    {
        name: "Email Campaign Sample",
        year: "Email Marketing",
        align: "left",
        image: "./images/website-img-2.webp",
        link: "https://www.canva.com/design/DAG_0Im-a6U/zcUzT6D9dIWoUMoNMao1WA/view?utm_content=DAG_0Im-a6U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h43c4ce2b54",
    },
    {
        name: "Executive Summary Presentation",
        // year: "Email Management",
        align: "right",
        image: "./images/_ (10).jpeg",
        link: hsExecutivePdf,
    },
    {
        name: "Year-Long Social Media Content Plan",
        year: "Content Strategy",
        align: "left",
        image: "./images/website-img-4.jpg",
        link: "https://www.canva.com/design/DAG_z50IdHY/RGXCNKvDyZizqRtR4w9VrA/view?utm_content=DAG_z50IdHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdea04735ba",
    },
    {
        name: "Leads Generation",
        year: "Lead Generation",
        align: "right",
        image: "./images/LEADS.jpeg",
        link: "public/images/WM_Leads_Generation_Portfolio (1).pdf",
    },
    {
        name: "Real Estate Listing & Compliance Support",
        year: "Real Estate Operations (Dubai)",
        align: "left",
        image: "./images/realestate.jpeg",
        link: "#contact",
        description: "Supported Dubai-based real estate brokerages with listing management across Bayut and Property Finder, rental transaction documentation, and owner transfer paperwork, working within DED, ORN, and BRN compliance requirements.",
        badge: "Bayut & Property Finder",
    },
    {
        name: "Dispatch Academy",
        year: "Remote Truck Dispatch Course",
        align: "right",
        image: "./images/dispatch-academy.png",
        link: "https://truck-disoatching.vercel.app/",
        description: "Built a self-paced, 10-module course teaching the fundamentals of remote truck dispatching, from load boards and broker negotiations to documentation and rate calculation, drawing on hands-on experience with the tools involved.",
        badge: "10 Modules",
        newTab: true,
    },
    {
        name: "Fixing a Looping RSVP Reminder Workflow",
        year: "GoHighLevel Automation",
        align: "left",
        image: "./images/ghl-rsvp-reminder-fix-thumb.png",
        link: "/images/ghl-rsvp-reminder-fix.png",
        description: "Found why parents were getting repeated RSVP texts: on Mondays, the Afterschool and Private Training paths waited only 30 minutes after each reminder, then looped back and resent until 5pm. Changed the wait to 1 day so each family now gets one reminder per week, and confirmed the setup with management.",
        badge: "Repeated Texts Fixed",
        newTab: true,
    },
    {
        name: "Workflow Execution Log Troubleshooting",
        year: "GoHighLevel Troubleshooting",
        align: "right",
        image: "./images/ghl-execution-logs-thumb.png",
        link: "/images/ghl-execution-logs.png",
        description: "Traced an error in a subscription payment workflow through the execution logs. The Assign User step failed because the contact was already assigned to a user, which explained the error while every other step ran as expected.",
        badge: "Root Cause Found",
        newTab: true,
    },
    {
        name: "Failed Payment Investigation",
        year: "Stripe Payments in GoHighLevel",
        align: "left",
        image: "./images/ghl-stripe-failed-payment-thumb.png",
        link: "/images/ghl-stripe-failed-payment.png",
        description: "Reviewed a failed payment link charge through the Stripe transaction record in GoHighLevel. The error showed the charge was declined on the customer's account, separating a billing issue from a workflow issue.",
        badge: "Stripe",
        newTab: true,
    },
    {
        name: "Payment Update SMS Sequence",
        year: "GoHighLevel SMS Workflows",
        align: "right",
        image: "./images/ghl-payment-sms-sequence-thumb.png",
        link: "/images/ghl-payment-sms-sequence.png",
        description: "Multi-branch workflow that sends payment update texts through JustCall, creates tasks to add accounts on SportsPlus, updates contact fields, removes trial class tags and follows up with a SportsPlus verification text one hour later.",
        badge: "JustCall + SportsPlus",
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
