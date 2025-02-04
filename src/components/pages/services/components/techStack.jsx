import React from 'react'
import { useState, useEffect } from 'react';

const techStack = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://ik.imagekit.io/jncw2kb8u/technologies-5.png?updatedAt=1738577529737",
    "https://ik.imagekit.io/jncw2kb8u/technologies-4.png?updatedAt=1738577529740",
    "https://ik.imagekit.io/jncw2kb8u/technologies-1.png?updatedAt=1738577",
    "https://ik.imagekit.io/jncw2kb8u/technologies-2.png?updatedAt=1738577529157",
    "https://ik.imagekit.io/jncw2kb8u/technologies-3.png?updatedAt=1738577529099",
    "https://ik.imagekit.io/jncw2kb8u/technologies.png?updatedAt=1738577528786"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  
  return (
    <>
     <div className="px-4 py-12 bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 text-gray-900">
      <h2 className="text-xl font-semibold text-center mb-2 text-blue-600">Technology Stack</h2>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">We Work With</h1>
      <p className="text-center text-lg mb-8 text-gray-700">
        At DODUN Soft Solutions, we harness the power of cutting-edge technologies to deliver exceptional web development services.
      </p>

      {/* Slider Container */}
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={img}
                alt={`Technology ${index + 1}`}
                className="w-20 h-20 object-contain rounded-lg shadow-md border-4 border-blue-500"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default techStack