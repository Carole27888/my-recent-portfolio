const SingleSkills = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-red">
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
    </div>
  );
};

export default SingleSkills;