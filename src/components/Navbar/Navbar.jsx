import React, { useState, useEffect  } from "react";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once
        });
      }, []);

  return (
    <nav data-aos="fade-down" className="bg-white shadow-md fixed w-full z-50 relative">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="/">
        <img
          src="https://ik.imagekit.io/jncw2kb8u/LOGO.png?updatedAt=1738224610877"
          alt="Logo"
          className="h-10 w-30"
          
        />
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-800 hover:text-blue-500">
            Home
          </a>
          <a href="/about" className="text-gray-800 hover:text-blue-500">
            About Us
          </a>
          <a href="/services" className="text-gray-800 hover:text-blue-500">
            Services
          </a>
          <a href="/blog" className="text-gray-800 hover:text-blue-500">
            Blog
          </a>
          <a href="/contact" className="text-gray-800 hover:text-blue-500">
            Contact Us
          </a>
        </div>
        <button className="hidden md:block bg-sky-700 text-white px-4 py-2 rounded-lg hover:scale-115 transition duration-300">
          +91-8968881110
        </button>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white p-4 space-y-2 shadow-lg">
          <a href="/" className="block text-gray-800 hover:text-blue-500">
            Home
          </a>
          <a href="/about" className="block text-gray-800 hover:text-blue-500">
            About Us
          </a>
          <a
            href="/services"
            className="block text-gray-800 hover:text-blue-500"
          >
            Services
          </a>
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
