import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SingleEducation = ({ education, icon }) => {
  return (
    <motion.article
      variants={fadeIn('up', 0.15)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="group rounded-[24px] border border-lightBrown/50 bg-[rgba(12,18,30,0.78)] p-6 shadow-[0_0_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-orange/50 hover:shadow-[0_0_35px_rgba(251,151,24,0.12)]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-orange/20 bg-orange/10 text-2xl">
        <span>{icon}</span>
      </div>

      <h3 className="text-2xl font-semibold text-white transition duration-300 group-hover:text-lightOrange sm:text-[1.7rem]">
        {education.institution}
      </h3>

      <p className="mt-2 text-base font-semibold text-orange sm:text-lg">
        {education.credential}
      </p>

      <p className="mt-1 text-sm uppercase tracking-[0.25em] text-cyan/80">
        {education.year}
      </p>

      <p className="mt-4 text-base leading-8 text-lightGrey sm:text-lg">
        {education.description}
      </p>
    </motion.article>
  );
};

export default SingleEducation;
