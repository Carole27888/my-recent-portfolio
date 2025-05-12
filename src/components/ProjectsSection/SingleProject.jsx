import React from 'react';
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <div>
      <div className={`flex w-full sm:flex-col-reverse items-center gap-4 sm:gap-2 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-between sm:flex-col`} >
        {/* Project Title */}
        <div className="flex flex-col items-start gap-2 sm:items-center sm:text-center">
          <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
          <h2
            className={`text-xl font-thin text-white font-special sm:text-center ${
              align === "left" ? "md:text-left" : "md:text-right"
            }`}
          >
            {year}
          </h2>
          <a
            href={link}
            className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-center ${
              align === "left" ? "md:justify-start" : "md:justify-end"
            }`}
          >
            view<HiArrowTopRightOnSquare />
          </a>
        </div>
        
        
        <div className="max-h-[220px] max-w-full sm:max-w-[300px] md:max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-red">
          <div className="w-full h-full opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
          <img src={image} alt="website image" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
