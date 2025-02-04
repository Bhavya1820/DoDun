import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const about = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gray-100 h-170 px-16 py-16 md:px-12 lg:px-20 md:h-130">
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
      {/* About Section */}
      <div data-aos="fade-up-right">
        <h2 className="text-3xl md:text-6xl font-bold text-black">Who We Are!</h2>
        <p className="text-black text-xl md:text-3xl font-semibold mt-3">
          DODUN Soft Solutions - Empowering Tomorrow's Technology!
        </p>
        <p className="text-black mt-4 leading-relaxed">
          At Dodun Soft Solutions, we’re dedicated to crafting innovative IT solutions that propel businesses forward. 
          From cutting-edge software development to harnessing the power of emerging technologies like AI, 
          we prioritize client-centric solutions tailored to unique business needs. Our team of skilled professionals 
          leverages the latest tools and methodologies to deliver scalable, secure, and high-performance applications. 
          Whether it’s web and mobile development, cloud computing, or data analytics, we ensure seamless integration and optimal efficiency.
        </p>
        <button className="mt-6 bg-sky-300 text-black px-6 py-2 rounded-lg shadow-md hover: transform transition-transform duration-200 hover:scale-105">
          <a href="/about">Read More</a>
        </button>
      </div>
  
      {/* Image Section */}
      <div  data-aos="fade-up-left" className="hidden md:flex justify-center">
        <img 
          src="https://ik.imagekit.io/jncw2kb8u/annie-spratt-QckxruozjRg-unsplash.jpg?updatedAt=1738668225171" 
          alt="Company Overview" 
          className="w-full md:w-100 h-90 object-cover rounded-lg shadow-lg "
        />
      </div>
    </div>
  </div>
  

  );
};

export default about;
