import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SingleExperience = ({ experience }) => {
  return (
    <motion.article
      variants={fadeIn('up', 0.15)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="relative pl-11 sm:pl-16"
    >
      <span className="absolute left-[11px] top-1 h-4 w-4 rounded-full border-2 border-cyan bg-[#101927] shadow-[0_0_16px_rgba(21,209,233,0.55)] sm:left-[19px]" />

      <div className="rounded-[24px] border border-lightBrown/50 bg-[rgba(12,18,30,0.72)] px-5 py-5 shadow-[0_0_30px_rgba(0,0,0,0.18)] transition duration-300 hover:border-cyan/50 hover:-translate-y-1">
        <p className="mb-3 font-special text-sm uppercase tracking-[0.35em] text-cyan">
          {experience.year}
        </p>

        <h3 className="text-2xl font-semibold text-white sm:text-[2rem]">
          {experience.title}
        </h3>

        <p className="mt-2 text-base font-semibold text-orange sm:text-lg">
          {experience.label}
        </p>

        <p className="mt-4 max-w-3xl text-base leading-8 text-lightGrey sm:text-lg">
          {experience.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {experience.skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full border border-cyan/30 px-3 py-1 text-sm text-cyan/90"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default SingleExperience;
