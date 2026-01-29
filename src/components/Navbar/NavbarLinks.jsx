import { Link } from "react-scroll";

const links = [
  { link: "About", section: "about" },
  { link: "Tools", section: "skills" },
  { link: "Services", section: "experience" },
  { link: "Portfolio", section: "projects" },
  { link: "Testimonials", section: "testimonials" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col lg:flex-row gap-6 text-white font-body absolute lg:static top-[120%] left-[50%] -translate-x-[50%] lg:translate-x-0 text-center text-xl lg:text-md bg-cyan/30 backdrop-blur-lg lg:bg-black w-full lg:w-auto py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-100} 
              to={link.section} 
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
