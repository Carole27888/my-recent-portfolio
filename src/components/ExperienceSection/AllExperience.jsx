import React from 'react';
import SingleExperience from './SingleExperience';

const experiences = [
  {
    year: '2023',
    title: 'Stepped Into Client Support',
    label: 'Red Espionage, Tennessee',
    description:
      'Started with the quiet backbone work every business needs: inbox support, follow-ups, organized files, and task tracking that kept the day from slipping through the cracks.',
    skills: ['Inbox management', 'Client follow-ups', 'Admin support'],
  },
  {
    year: '2024',
    title: 'Found My Rhythm In Content Systems',
    label: 'From admin to audience-facing support',
    description:
      'Moved beyond coordination into content calendars, Canva assets, and posting workflows. I liked turning scattered ideas into a schedule that actually moved.',
    skills: ['Content scheduling', 'Canva support', 'Workflow setup'],
  },
  {
    year: '2025 - Current',
    title: 'Still Growing At Hayek Studios',
    label: 'Hayek Studios, New York',
    description:
      'I am still at Hayek Studios, supporting both social media and operations. The role keeps stretching in the best way: engagement support, lead follow-ups, cleaner SOPs, and dependable updates that help the business move without chaos.',
    skills: [
      'Social media support',
      'Lead management',
      'SOP-driven execution',
      'Clear communication',
      'Consistency',
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="relative mt-14">
      <div className="experience-grid pointer-events-none absolute inset-0 rounded-[32px] opacity-70" />
      <div className="absolute left-5 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-cyan to-transparent sm:left-7" />

      <div className="relative rounded-[32px] border border-lightBrown/60 bg-[#101927]/80 px-5 py-8 shadow-[0_0_60px_rgba(21,209,233,0.08)] backdrop-blur-sm sm:px-8 sm:py-10">
        <div className="mb-10 flex items-center gap-4">
          <span className="font-special text-sm uppercase tracking-[0.45em] text-cyan/70">
            // Timeline
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan/40 to-transparent" />
        </div>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((experience, index) => (
            <SingleExperience key={index} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllExperience;
