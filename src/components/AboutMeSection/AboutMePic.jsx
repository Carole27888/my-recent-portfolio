const AboutMeImage = () => {
  return (
    <div className="relative w-full max-w-[300px] h-[360px] sm:h-[420px] md:h-[500px] mx-auto">
      <div className="absolute inset-0 rounded-[100px] overflow-hidden">
        <img
          src="./images/Futurism.jpeg"
          alt="About Me Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-full w-[85%] bg-red absolute bottom-[-30px] left-[-20px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
