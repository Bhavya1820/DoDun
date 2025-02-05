import React, { useState, useEffect  } from "react";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Digital Marketing",
    subMenu: [
      { title: "SEO", link: "/Seo" },
      { title: "Pay Per Click", link: "/Ppc" },
      { title: "Content Marketing", link: "/ContentMarketing" },
      { title: "Social Media Marketing", link: "/SocialMediaMarketing" },
      { title: "Email Marketing", link: "/EmailMarketing" },
    ],
  },
  {
    title: "Designing",
    subMenu: [
      { title: "Web Designing", link: "/WebDesigning" },
      { title: "UI/UX Designing", link: "/UiUxDesigning" },
      { title: "Graphic Designing", link: "/GraphicDesigning" },
      { title: "Logo Designing", link: "/LogoDesigning" },
      { title: "Video Editing", link: "/VideoEditing" },
    ],
  },
  {
    title: "Development",
    subMenu: [
      { title: "iOS App Development", link: "/IosAppDevelopment" },
      { title: "Android App Development", link: "/AndroidAppDevelopment" },
      { title: "Web Development", link: "/WebDevelopment" },
      { title: "Windows Development", link: "/WindowsDevelopment" },
    ],
  },
  { title: "Hosting", link: "/Hosting" },
  { title: "Animated Videos", link: "/AnimatedVideos" },
];


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [is_Open, setIs_Open] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggle_Dropdown = () => {
    setIs_Open(!is_Open);
  };

  useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once
        });
      }, []);

  return (
    <nav className="relative w-full z-50 bg-white border-b border-gray-300 ">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="/">
        <img
          src="https://ik.imagekit.io/jncw2kb8u/image.png?updatedAt=1738665004511"
          alt="Logo"
          className="h-20 w-50"
          
        />
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-black hover:text-blue-500">
            Home
          </a>
          <a href="/about" className="text-black hover:text-blue-500">
            About Us
          </a>
          <div className="relative inline-block text-left hover:cursor-pointer">
      <button
        className=" text-black rounded-lg flex items-center gap-2 hover:text-blue-500"
        onClick={toggleDropdown}
      >
        Services <ChevronDown size={16} />
        </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-56">
        {services.map((service, index) => (
          <div key={index} className="relative">
            {service.subMenu ? (
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
              >
                {service.title} <ChevronRight size={14} />
                {openDropdown === index && (
                  <div className="absolute left-full top-0 mt-0 w-56 bg-white border rounded-lg shadow-lg">
                    {service.subMenu.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sub.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={service.link}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {service.title}
              </Link>
            )}
          </div>
        ))}
      </div>
      )}
    </div>
          <a href="/blog" className="text-black hover:text-blue-500">
            Blog
          </a>
          <a href="/contact" className="text-black hover:text-blue-500">
            Contact Us
          </a>
        </div>
        <button className="hidden md:block border-2 border-balck text-balck px-4 py-2 rounded-lg hover:scale-115 transition duration-300">
          +91-8968881110
        </button>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-200 p-4 space-y-2 shadow-lg">
          <a href="/" className="block text-gray-800 hover:text-blue-500">
            Home
          </a>
          <a href="/about" className="block text-gray-800 hover:text-blue-500">
            About Us
          </a>
          <div className="relative inline-block text-left hover:cursor-pointer">
      <button
        className="text-black rounded-lg flex items-center gap-2 hover:text-blue-500 focus:outline-none"
        onClick={toggle_Dropdown}
      >
        Services <ChevronDown size={16} />
      </button>
      {is_Open && (
        <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-50 z-50">
          {services.map((service, index) => (
            <div key={index} className="relative">
              {service.subMenu ? (
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                  onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                >
                  {service.title} <ChevronRight size={14} />
                  {openDropdown === index && (
                    <div className="absolute left-full top-0 mt-0 w-50 bg-white border rounded-lg shadow-lg z-50">
                      {service.subMenu.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sub.link}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={service.link}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {service.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>

          <a href="/blog" className="block text-gray-800 hover:text-blue-500">
            Blog
          </a>
          <a
            href="/contact"
            className="block text-gray-800 hover:text-blue-500"
          >
            Contact Us
          </a>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
            +91-8968881110
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
