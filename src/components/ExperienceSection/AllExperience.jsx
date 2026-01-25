import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import SingleExperience from './SingleExperience'; 
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: 'Software Developer',
    company: 'Labedan IT Solutions',
    duration: 'June 2025 – Feb 2026',
    Responsibilities: [
      'Build enterprise full-stack systems with Next.js, TypeScript, Node.js, Express, and MongoDB',
      'Architect auth, validation, routing, and role-based logic for complex workflows',
      'Implement PDF engines, multi-step approvals, and automation tooling'
    ]
  },
  {
    job: 'Backend Developer',
    company: 'Enlabeler (Remote)',
    duration: 'April 2024 – August 2024',
    Responsibilities: [
      'Developed automation pipelines for AI/ML training datasets',
      'Built ingestion, validation, and annotation management scripts',
      'Designed REST APIs and data queries for analysis and QA'
    ]
  },
  {
    job: 'Software Developer',
    company: 'NexaTech Digital Solutions (Contract)',
    duration: 'January 2024 – March 2024',
    Responsibilities: [
      'Built full-stack apps with React/Next.js, Node.js, SQL, and MongoDB',
      'Designed optimized APIs, schemas, and workflow automation',
      'Implemented dashboards, scheduled jobs, and integrations'
    ]
  }
];

const AllExperience = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
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
              <FaArrowRight className="hidden lg:block text-6xl text-orange" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperience;
