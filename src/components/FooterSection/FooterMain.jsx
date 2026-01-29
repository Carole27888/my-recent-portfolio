import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About",
      section: "about",
    },
    {
      name: "Tools",
      section: "skills",
    },
    {
      name: "Services",
      section: "experience",
    },
    {
      name: "Portfolio",
      section: "projects",
    },
    {
      name: "Testimonials",
      section: "testimonials",
    },
  ];

  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="hidden md:flex justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-lightGrey ">Virtual Assistant & SMM</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © {currentYear} Virtual Assistant & Social Media Manager | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
