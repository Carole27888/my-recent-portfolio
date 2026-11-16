const ToolLogo = ({ src, name }) => (
  <img
    src={src}
    alt={`${name} logo`}
    className="h-[1em] w-[1em] object-contain"
  />
);

export default ToolLogo;
