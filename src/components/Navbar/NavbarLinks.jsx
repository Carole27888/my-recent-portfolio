import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const scrollLinks = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Education", section: "education" },
  { link: "Services", section: "experience" },
  { link: "Portfolio", section: "projects" },
  { link: "Testimonials", section: "testimonials" },
  { link: "Contact", section: "contact" },
];

const linkClass = "cursor-pointer text-white hover:text-cyan transition-all duration-500";

const NavbarLinks = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <ul className="flex flex-col lg:flex-row gap-5 text-white font-body text-center text-lg lg:text-base bg-cyan/30 backdrop-blur-lg lg:bg-black w-full lg:w-auto py-3 rounded-2xl lg:rounded-none px-4 lg:px-0">
      {scrollLinks.map((item, index) => (
        <li key={index} className="group">
          {isHome ? (
            <ScrollLink
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
              to={item.section}
              className={linkClass}
            >
              {item.link}
            </ScrollLink>
          ) : (
            <a href={`/#${item.section}`} className={linkClass}>
              {item.link}
            </a>
          )}
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500" />
        </li>
      ))}

      <li className="group">
        <RouterLink to="/blog" className={linkClass}>
          Blog
        </RouterLink>
        <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500" />
      </li>
    </ul>
  );
};

export default NavbarLinks;
