import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const service = () => {
  const services = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/dec.png?updatedAt=1738331375937",
      title: "Development",
      description:
        "Create stunning websites that attract the right visitors and turn them into loyal customers.",
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/mar.png?updatedAt=1738331375926",
      title: "Digital Marketing",
      description:
        "Enhance your brand’s visibility and reputation with our expert digital marketing strategies.",
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/host.png?updatedAt=1738331375821",
      title: "Hosting Provider",
      description:
        "Reliable hosting services to keep your website fast, secure, and always online.",
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/des.png?updatedAt=1738331375631",
      title: "Designing",
      description:
        "Visual designs that speak volumes about your brand’s creativity and professionalism.",
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/ani.png?updatedAt=1738331375927",
      title: "Animated Videos",
      description:
        "Animated videos use rapidly displayed images or graphics to create the illusion of movement.",
    },
  ];

  useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once
      });
    }, []);


  return (
    <div  className="bg-white py-10 px-6 ">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
      Our Services
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-sky-400 shadow-lg rounded-xl p-6 text-center transition-transform duration-300 hover:scale-105"
        >
          <img
            src={service.img}
            alt={service.title}
            className="w-20 h-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            {service.description}
          </p>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-sky-300 transition duration-300">
            Know More
          </button>
        </div>
      ))}
    </div>
  </div>
  )
}

export default service