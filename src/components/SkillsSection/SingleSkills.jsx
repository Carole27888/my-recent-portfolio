const SingleSkills = ({ title, items }) => {
  return (
    <article className="group rounded-[24px] border border-lightBrown/50 bg-[rgba(12,18,30,0.78)] p-6 shadow-[0_0_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-orange/50 hover:shadow-[0_0_35px_rgba(251,151,24,0.12)]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-orange/20 bg-orange/10">
        <div className="h-4 w-4 rounded-full bg-gradient-to-br from-orange to-cyan shadow-[0_0_18px_rgba(251,151,24,0.4)]" />
      </div>
      <h3 className="text-2xl font-semibold text-white transition duration-300 group-hover:text-lightOrange sm:text-[1.7rem]">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3 text-base leading-7 text-lightGrey sm:text-lg">
            <span className="mt-2 h-3 w-3 shrink-0 rounded-full border border-orange bg-transparent shadow-[0_0_10px_rgba(251,151,24,0.35)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default SingleSkills;
