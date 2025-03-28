import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import SingleExperience from './SingleExperience'; 
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: 'Frontend Developer',
    company: 'XYZ Company',
    duration: '2024- Present',
    Responsibilities: [
      'Worked on the frontend of the website',
      'Worked with the design team to implement the design',
      'Worked on the website to make it responsive'
    ]
  },
  {
    job: 'Backend Developer',
    company: 'ABC Company',
    duration: '2023-2024',
    Responsibilities: [
      'Worked on the backend of the website',
      'Worked with the design team to implement the design',
      'Worked on the website to make it responsive'
    ]
  },
  {
    job: 'Full Stack Developer',
    company: 'DEF Company',
    duration: '2022-2023',
    Responsibilities: [
      'Worked on the frontend and backend of the website',
      'Worked with the design team to implement the design',
      'Worked on the website to make it responsive'
    ]
  }
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}> {/* Move key here */}
          <SingleExperience experience={experience} />
          {index < 2 && (  // Only show the arrow for the first two experiences
            <motion.div
              variants={fadeIn("right", 0.4)} // Add motion here for arrow animation
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperience;
