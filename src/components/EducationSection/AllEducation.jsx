import React from 'react';
import SingleEducation from './SingleEducation';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { MdOutlineSchool } from 'react-icons/md';

const education = [
  {
    institution: 'ALX Africa',
    credential: 'Virtual Assistance Certificate',
    year: 'Graduated 2023',
    description:
      'Earned professional virtual assistance training covering support systems, productivity, and remote work skills.',
    icon: <FaCertificate />,
  },
  {
    institution: 'Garissa University',
    credential: 'Bachelor of Arts in Education',
    year: 'Graduated 2024',
    description:
      'Built a strong academic foundation through formal education studies and classroom-focused learning.',
    icon: <FaGraduationCap />,
  },
  {
    institution: 'Moringa School',
    credential: 'Diploma in Computer Science',
    year: 'Graduated 2025',
    description:
      'Completed technical training focused on computer science and practical digital problem solving.',
    icon: <MdOutlineSchool />,
  },
];

const AllEducation = () => {
  return (
    <div className="relative mt-14">
      <div className="experience-grid pointer-events-none absolute inset-0 rounded-[32px] opacity-70" />

      <div className="relative rounded-[32px] border border-lightBrown/60 bg-[#101927]/80 px-5 py-8 shadow-[0_0_60px_rgba(21,209,233,0.08)] backdrop-blur-sm sm:px-8 sm:py-10">
        <div className="mb-10 flex items-center gap-4">
          <span className="font-special text-sm uppercase tracking-[0.45em] text-cyan/70">
            // Academic Path
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-orange/40 to-transparent" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {education.map((item, index) => (
            <SingleEducation key={index} education={item} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEducation;
