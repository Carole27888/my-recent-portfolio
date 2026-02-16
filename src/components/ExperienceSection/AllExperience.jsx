import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import SingleExperience from './SingleExperience'; 
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: 'Virtual Assistant',
    company: 'Red Espionage',
    duration: 'February 2023 - May 2024',
    Responsibilities: [
      'Inbox support, client follow-ups, and admin tasks',
      'File organization and CRM updates',
      'Content scheduling and basic Canva design',
      'Social media inbox and engagement support'
    ]
  },
  {
    job: 'VA & Social Media Manager',
    company: 'Hayek Studios',
    duration: 'June 2024 - Present',
    Responsibilities: [
      'Content calendar planning and scheduling',
      'DM outreach and lead follow-ups',
      'Weekly updates and SOP-based workflows',
      'SMM role: posting, engagement, and community replies'
    ]
  },
  {
    job: 'Process Highlights',
    company: 'How I Work',
    duration: 'Ongoing',
    Responsibilities: [
      'Align on goals, voice, and SOPs',
      'Set up calendars, CRM fields, and folders',
      'Deliver clear updates and next steps'
    ]
  }
];

const AllExperience = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < 2 && (
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRight className="hidden lg:block text-6xl text-orange" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperience;
