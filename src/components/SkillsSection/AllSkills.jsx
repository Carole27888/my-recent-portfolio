import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import SingleSkills from './SingleSkills';


const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "React JS",
    icon: RiReactjsLine,
  },
  {
    skill: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    skill: "Git",
    icon: FaGit,
  },
  {
    skill: "GitHub",
    icon: FaGithub,
  },
  {
    skill: "Figma",
    icon: FaFigma,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "Flask",
    icon: FaFlask,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
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