import React from 'react';
import SingleSkills from './SingleSkills';
import { skillsCards } from './skillsData';

const AllSkillsSm = () => {
  return (
    <div className="my-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {skillsCards.map((item, index) => (
        <SingleSkills key={index} title={item.title} items={item.items} />
      ))}
    </div>
  );
};

export default AllSkillsSm;
