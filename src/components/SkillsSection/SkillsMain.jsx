// import React from 'react';
// import SkillsText from './SkillsText';
// import AllSkills from './AllSkills';
// import AllSkillsSm from './AllSkillsSm';

// const SkillsMain = () => {
//   return (
//     <div id="skills">
//       <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
//         <SkillsText />
//       </div>

      
//       <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
//         <AllSkills />
//       </div>
//       <div className="sm:block lg:hidden">
//         <AllSkillsSm />
//       </div>
//     </div>
//   );
// }

// export default SkillsMain;
import React from 'react';
import SkillsText from './SkillsText';
import AllSkills from './AllSkills';
import AllSkillsSm from './AllSkillsSm';

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <SkillsText />
      </div>

      {/* Large screens */}
      <div className="lg:block sm:hidden mt-12">
        <AllSkills />
      </div>

      {/* Small screens */}
      <div className="sm:block lg:hidden mt-12">
        <AllSkillsSm />
      </div>
    </div>
  );
};

export default SkillsMain;
