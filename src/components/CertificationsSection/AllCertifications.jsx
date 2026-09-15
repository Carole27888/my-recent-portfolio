import React from 'react';
import SingleCertification from './SingleCertification';
import { certifications } from './certificationsData';

const AllCertifications = () => {
  return (
    <div className="relative mt-14">
      <div className="experience-grid pointer-events-none absolute inset-0 rounded-[32px] opacity-70" />

      <div className="relative rounded-[32px] border border-lightBrown/60 bg-[#101927]/80 px-5 py-8 shadow-[0_0_60px_rgba(21,209,233,0.08)] backdrop-blur-sm sm:px-8 sm:py-10">
        <div className="mb-10 flex items-center gap-4">
          <span className="font-special text-sm uppercase tracking-[0.45em] text-cyan/70">
            // Proof Of Work
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan/40 to-transparent" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification, index) => (
            <SingleCertification key={index} certification={certification} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCertifications;
