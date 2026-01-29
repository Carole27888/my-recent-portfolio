import React from 'react';
import { FaCommentDots } from "react-icons/fa";
import { SiAirtable } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiDropbox } from "react-icons/si";
import { SiGoogledrive } from "react-icons/si";
import { SiHubspot } from "react-icons/si";
import { SiZoho } from "react-icons/si";

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

const AllSkillsSm = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="text-5xl text-orange " />
            <p className="text-center mt-4 text-lg font-medium text-white">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSm;
