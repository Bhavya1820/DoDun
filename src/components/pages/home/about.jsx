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
    <div className="bg-white h-250 py-16  md:h-130">
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
      {/* About Section */}
      <div>
        <h2 className="mx-[70px] text-3xl md:text-6xl font-bold text-black">Who We Are!</h2>
        <div  data-aos="fade-up-left" className="bg-gray-100 visible md:hidden">
        <img 
          src="https://ik.imagekit.io/jncw2kb8u/annie-spratt-QckxruozjRg-unsplash.jpg?updatedAt=1738668225171" 
          alt="Company Overview" 
          className="w-full h-70  py-5 object-cover rounded-lg shadow-lg "
        />
      </div>
        <p className="mx-[70px] text-black text-xl md:text-3xl font-semibold mt-3">
          DODUN Soft Solutions - Empowering Tomorrow's Technology!
        </p>
        <p className="mx-[70px] text-black mt-4 leading-relaxed">
          At Dodun Soft Solutions, we’re dedicated to crafting innovative IT solutions that propel businesses forward. 
          From cutting-edge software development to harnessing the power of emerging technologies like AI, 
          we prioritize client-centric solutions tailored to unique business needs. Our team of skilled professionals 
          leverages the latest tools and methodologies to deliver scalable, secure, and high-performance applications. 
          Whether it’s web and mobile development, cloud computing, or data analytics, we ensure seamless integration and optimal efficiency.
        </p>
        <button className="mx-[70px] mt-6 bg-gradient-to-r from-sky-600 to-blue-800 text-white px-6 py-2 rounded-lg shadow-md hover:scale-110 transition delay-200 duration-300 ease-in-out">
          <a href="/about">Read More</a>
        </button>
      </div>
  
      {/* Image Section */}
      <div className="hidden md:flex justify-center">
        <img 
          src="https://ik.imagekit.io/jncw2kb8u/about-us.png?updatedAt=1738752698367" 
          alt="Company Overview" 
          className="w-[600px] h-[400px] object-fit shadow-lg"
        />
      </div>
    </div>
  </div>
  

  );
};

export default about;
