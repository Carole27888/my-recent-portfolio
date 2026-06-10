import React from 'react';
import SingleExperience from './SingleExperience';

const experiences = [
  {
    year: '2023',
    title: 'Stepped Into Client Support',
    label: 'Client support role',
    description:
      'Started with the quiet backbone work every business needs: inbox support, follow-ups, organized files, and task tracking that kept the day from slipping through the cracks.',
    skills: ['Inbox management', 'Client follow-ups', 'Admin support'],
  },
  {
    year: '2024',
    title: 'Supported Red Espionage',
    label: 'Brand support and content coordination',
    description:
      'Worked with Red Espionage in 2024, supporting content planning, coordination, and day-to-day execution that helped keep the brand moving cleanly.',
    skills: ['Content planning', 'Brand coordination', 'Execution support'],
  },
  {
    year: 'April 2026 - Current',
    title: 'Building The Systems At Clarity Coaching Co',
    label: 'Virtual Assistant — Operations & Client Onboarding',
    description:
      'Designed and own the full client onboarding system, cutting the time from first inquiry to first session from three days to under four hours. Managing CRM records in Airtable, handling all client communications, scheduling discovery calls, coordinating contracts and payments, and keeping operations running without the coach having to chase a single thing.',
    skills: [
      'Client onboarding',
      'SOP design',
      'Airtable CRM',
      'Email communications',
      'Calendly scheduling',
      'Stripe payments',
    ],
  },
  {
    year: '2025 - Current',
    title: 'Still Growing At Hayek Studios',
    label: 'Ongoing client support role',
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
  // {
  //   year: '2025 - Current',
  //   title: 'Supporting Operations At Sun Shine Properties LLC',
  //   label: 'Virtual Assistant — Real Estate Operations (Dubai)',
  //   description:
  //     'Providing virtual assistant support for a Dubai-based real estate company, managing client communications, coordinating property viewings, handling documentation, and keeping the back end organized so the sales team can focus on closing deals.',
  //   skills: [
  //     'Client communications',
  //     'Appointment scheduling',
  //     'Document management',
  //     'CRM management',
  //     'Admin support',
  //   ],
  // },
  // {
  //   year: '2025 - Current',
  //   title: 'Running Content & Operations At CLK Properties Dubai',
  //   label: 'Social Media Manager & Virtual Assistant (Dubai)',
  //   description:
  //     'Managing social media presence and virtual assistant duties for a Dubai real estate brand. Creating and scheduling property content, engaging with leads across platforms, handling inbox management, and supporting the team with day-to-day operational tasks that keep the business running smoothly.',
  //   skills: [
  //     'Social media management',
  //     'Content creation',
  //     'Lead engagement',
  //     'Inbox management',
  //     'Real estate marketing',
  //     'Admin support',
  //   ],
  // },
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
