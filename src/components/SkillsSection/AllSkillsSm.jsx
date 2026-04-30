import React from 'react';
import { FaCommentDots, FaCalculator, FaCreditCard, FaRocket } from "react-icons/fa";
import { SiAirtable, SiCanva, SiDropbox, SiGoogledrive, SiHubspot, SiTrello, SiAsana, SiZoho } from "react-icons/si";
import SingleSkills from './SingleSkills';

const skills = [
  { skill: "Canva", icon: SiCanva },
  { skill: "Airtable", icon: SiAirtable },
  { skill: "TextMagic", icon: FaCommentDots },
  { skill: "HubSpot", icon: SiHubspot },
  { skill: "Zoho", icon: SiZoho },
  { skill: "Go High Level", icon: FaRocket },
  { skill: "Google Drive", icon: SiGoogledrive },
  { skill: "Dropbox", icon: SiDropbox },
  { skill: "Trello", icon: SiTrello },
  { skill: "Asana", icon: SiAsana },
  { skill: "QuickBooks", icon: FaCalculator },
  { skill: "Ramp", icon: FaCreditCard },
];

const AllSkillsSm = () => {
  return (
    <div className="my-12 flex flex-wrap justify-center gap-6">
      {skills.map((item, index) => (
        <SingleSkills key={index} text={item.skill} imgSvg={<item.icon />} />
      ))}
    </div>
  );
};

export default AllSkillsSm;
