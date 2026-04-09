import React from 'react';
import SingleSkills from './SingleSkills';
import { skillsCards } from './skillsData';

const AllSkills = () => {
  return (
    <div className="w-full">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillsCards.map((item, index) => (
          <SingleSkills key={index} title={item.title} items={item.items} />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
