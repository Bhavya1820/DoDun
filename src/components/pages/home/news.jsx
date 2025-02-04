import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const news = () => {
  const newsData = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/emailmarketingguide.png?updatedAt=1738333319406",
      title:
        "The Ultimate Email Marketing Guide for Beginners | Tips, Tricks, and Tools You Need to Know",
      description:
        "Email marketing remains one of the most effective ways to reach your audience, nurture leads, and drive conversions.",
      date: "October 15, 2024 | 8:18 am",
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/Untitled-design-2.jpg?updatedAt=1738333319161",
      title:
        "Maximize Your PPC Performance | 6 Proven Strategies You Need to Try",
      description:
        "In the fast-paced world of digital marketing, Pay-Per-Click (PPC) advertising remains one of the most effective strategies for driving targeted results.",
      date: "October 15, 2024 | 8:06 am",
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/Untitled-design.jpg?updatedAt=1738333319159",
      title:
        "Navigating the Digital Landscape | 5 Challenges Every Marketer Must Overcome",
      description:
        "In today’s fast-paced digital world, marketers face an ever-evolving landscape filled with opportunities and challenges.",
      date: "October 15, 2024 | 7:18 am",
    },
  ];

  useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once
      });
    }, []);

  return (
    <div  className="bg-white py-10 px-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Our Latest News
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Boost your organic traffic and engagement with our campaigns that get
          your business in front of the right people at the right time.
        </p>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={news.img}
                alt={news.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{news.description}</p>
                <a
                  href="#"
                  className="text-blue-500 font-medium inline-block mt-3 hover:underline"
                >
                  Read More
                </a>
                <p className="text-gray-400 text-xs mt-2">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default news