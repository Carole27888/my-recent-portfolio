import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SingleCertification = ({ certification }) => {
  return (
    <motion.a
      href={certification.image}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn('up', 0.15)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="group block overflow-hidden rounded-[24px] border border-lightBrown/50 bg-[rgba(12,18,30,0.78)] shadow-[0_0_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_0_35px_rgba(21,209,233,0.12)]"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#0b1220]">
        <img
          src={certification.image}
          alt={`${certification.title} certificate from ${certification.issuer}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan/80">
          {certification.date}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-white transition duration-300 group-hover:text-lightOrange sm:text-2xl">
          {certification.title}
        </h3>

        <p className="mt-1 text-base font-semibold text-orange">
          {certification.issuer}
        </p>

        {certification.description && (
          <p className="mt-3 text-sm leading-7 text-lightGrey">
            {certification.description}
          </p>
        )}

        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-all duration-300 group-hover:text-orange">
          View full certificate →
        </span>
      </div>
    </motion.a>
  );
};

export default SingleCertification;
