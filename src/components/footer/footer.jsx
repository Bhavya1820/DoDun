import React from 'react'
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-gray-100 py-10 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 -px-30 md:px-20">
        <div>
          <img
            src="https://ik.imagekit.io/jncw2kb8u/LOGO.png?updatedAt=1738224610877"
            alt="Logo"
            className="h-20 mx-5"
          />
          <p className="text-gray-600 text-sm mx-5">
            We are more than just an IT services provider. We are a team of dedicated professionals who
            strive to provide our clients with top-notch solutions and services to help them achieve their business goals.
          </p>
          <h3 className="mt-4 mx-5 font-bold">Follow Us</h3>
          <div className="flex space-x-4 mt-2 mx-5">
            <a href="#" className="text-blue-500 text-lg"><FaFacebook /></a>
            <a href="#" className="text-pink-500 text-lg"><FaInstagram /></a>
            <a href="#" className="text-blue-700 text-lg"><FaLinkedin /></a>
            <a href="#" className="text-green-500 text-lg"><FaWhatsapp /></a>
          </div>
        </div>
        <div className='mt-10 mx-5'>
          <h3 className="font-bold">Quick Navigation</h3>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="/services" className="hover:text-blue-500">Service</a></li>
            <li><a href="/blog" className="hover:text-blue-500">Blog</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact Us</a></li>
          </ul>
        </div>
        <div className='mt-10 mx-5'>
          <h3 className="font-bold">Our Services</h3>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li><a href="#home" className="hover:text-blue-500">Digital Marketing</a></li>
            <li><a href="#about" className="hover:text-blue-500">Designing</a></li>
            <li><a href="#blog" className="hover:text-blue-500">Development</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Hosting</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Animated Videos</a></li>
          </ul>
        </div>
        <div className='mt-10 mx-5'>
          <h3 className="font-bold">Contact Us</h3>
          <p className="text-gray-600 mt-2">
            <strong>Address:</strong> GM Plaza, Phase -7 Industrial Sector-73, Mohali, India
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> dodunsoftsolutions@gmail.com
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Phone No:</strong> +91-8968881110
          </p>
        </div>
      </div>
    </footer>
  )
}

export default footer