import React from 'react';
import { FaCommentDots, FaCalculator, FaCreditCard, FaRocket, FaBasketballBall } from "react-icons/fa";
import { SiAirtable, SiCanva, SiDropbox, SiGoogledrive, SiHubspot, SiTrello, SiAsana, SiZoho, SiSlack, SiClickup, SiClockify, SiStripe } from "react-icons/si";
import JustCallIcon from './JustCallIcon';
import SingleSkills from './SingleSkills';

const skills = [
  { skill: "Canva", icon: SiCanva },
  { skill: "Airtable", icon: SiAirtable },
  { skill: "TextMagic", icon: FaCommentDots },
  { skill: "JustCall", icon: JustCallIcon },
  { skill: "Slack", icon: SiSlack },
  { skill: "HubSpot", icon: SiHubspot },
  { skill: "Zoho", icon: SiZoho },
  { skill: "Go High Level", icon: FaRocket },
  { skill: "SportsPlus", icon: FaBasketballBall },
  { skill: "Google Drive", icon: SiGoogledrive },
  { skill: "Dropbox", icon: SiDropbox },
  { skill: "Trello", icon: SiTrello },
  { skill: "Asana", icon: SiAsana },
  { skill: "ClickUp", icon: SiClickup },
  { skill: "Clockify", icon: SiClockify },
  { skill: "QuickBooks", icon: FaCalculator },
  { skill: "Ramp", icon: FaCreditCard },
  { skill: "Stripe", icon: SiStripe },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-wrap gap-4 max-w-[1200px] mx-auto">
        {skills.map((item, index) => (
          <SingleSkills key={index} text={item.skill} imgSvg={<item.icon />} />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
