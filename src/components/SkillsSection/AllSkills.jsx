import React from 'react';
import { FaCommentDots, FaCreditCard, FaRocket, FaBasketballBall } from "react-icons/fa";
import ToolLogo from './ToolLogo';
import SingleSkills from './SingleSkills';

const skills = [
  { skill: "Canva", logo: "./images/tools/canva.svg" },
  { skill: "Airtable", logo: "./images/tools/airtable.svg" },
  { skill: "TextMagic", icon: FaCommentDots },
  { skill: "JustCall", logo: "./images/justcall-logo.png" },
  { skill: "Slack", logo: "./images/tools/slack.svg" },
  { skill: "HubSpot", logo: "./images/tools/hubspot.svg" },
  { skill: "Zoho", logo: "./images/tools/zoho.svg" },
  { skill: "Go High Level", icon: FaRocket },
  { skill: "SportsPlus", icon: FaBasketballBall },
  { skill: "Google Drive", logo: "./images/tools/google-drive.svg" },
  { skill: "Dropbox", logo: "./images/tools/dropbox.svg" },
  { skill: "Trello", logo: "./images/tools/trello.svg" },
  { skill: "Asana", logo: "./images/tools/asana.svg" },
  { skill: "ClickUp", logo: "./images/tools/clickup.svg" },
  { skill: "Clockify", logo: "./images/tools/clockify.svg" },
  { skill: "QuickBooks", logo: "./images/tools/quickbooks.svg" },
  { skill: "Ramp", icon: FaCreditCard },
  { skill: "Stripe", logo: "./images/tools/stripe.svg" },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-wrap gap-4 max-w-[1200px] mx-auto">
        {skills.map((item, index) => (
          <SingleSkills key={index} text={item.skill} imgSvg={item.logo ? <ToolLogo src={item.logo} name={item.skill} /> : <item.icon />} />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
