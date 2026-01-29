import React from 'react';
import { FaCommentDots } from "react-icons/fa";
import { SiAirtable } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiDropbox } from "react-icons/si";
import { SiGoogledrive } from "react-icons/si";
import { SiHubspot } from "react-icons/si";
import { SiZoho } from "react-icons/si";
import SingleSkills from './SingleSkills';


const skills = [
  {
    skill: "Canva",
    icon: SiCanva,
  },
  {
    skill: "Airtable",
    icon: SiAirtable,
  },
  {
    skill: "TextMagic",
    icon: FaCommentDots,
  },
  {
    skill: "HubSpot",
    icon: SiHubspot,
  },
  {
    skill: "Zoho",
    icon: SiZoho,
  },
  {
    skill: "Google Drive",
    icon: SiGoogledrive,
  },
  {
    skill: "Dropbox",
    icon: SiDropbox,
  },
];

const AllSkills = () => {
  return (
    <div>
        <div className="flex items-center justify-center relative gap-1 max-w-[1200px] mx-auto">

        {skills.map((item, index) => {
          return (
            
              <SingleSkills
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
