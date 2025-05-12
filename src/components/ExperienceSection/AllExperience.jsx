import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import SingleExperience from './SingleExperience'; 
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: 'Freelance Frontend Developer',
    company: 'Creative Freelancing',
    duration: '2024 - Present',
    Responsibilities: [
      'Developed responsive web applications for diverse clients',
      'Collaborated with designers to create user-friendly interfaces',
      'Implemented performance optimizations and accessibility improvements'
    ]
  },
  {
    job: 'Freelance Backend Developer',
    company: 'Innovative Freelance Solutions',
    duration: '2024 - Present',
    Responsibilities: [
      'Built scalable backend APIs and services',
      'Integrated third-party services and databases',
      'Ensured security and data integrity in applications'
    ]
  },
  {
    job: 'Full Stack Freelance Developer',
    company: 'Freelance Tech Ventures',
    duration: '2024 - Present',
    Responsibilities: [
      'Handled end-to-end development of web projects',
      'Managed deployment and maintenance of client websites',
      'Provided technical consulting and support'
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
