import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const blog = () => {
  useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once
        });
      }, []);
  return (
    <>
    <Navbar />
    <div className="relative w-full h-[500px] flex items-center justify-center text-center">
      {/* Background Image */}
      <img
        src="https://ik.imagekit.io/jncw2kb8u/freepik__upload__47918.jpg?updatedAt=1738397180033"
        alt="Blog Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      {/* Overlay Content */}
      <h1 data-aos="fade-right" className="relative text-white text-4xl md:text-5xl font-bold">OUR BLOGS</h1>
    </div>

    <div className="bg-white py-12 px-4 sm:px-8">
      {/* Blog Section */}
      <div data-aos="flip-up" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Card 1 */}
        <div className="bg-gray-100 shadow-lg rounded-2xl overflow-hidden">
          <img
            src="https://ik.imagekit.io/jncw2kb8u/emailmarketingguide.png?updatedAt=1738333319406"
            alt="Email Marketing Guide"
            className="w-full h-52 object-cover rounded-t-2xl"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              The Ultimate Email Marketing Guide for Beginners
            </h3>
            <p className="text-sm text-gray-500 mb-3">dodun | October 15, 2024</p>
            <p className="text-gray-700">
              Email marketing remains one of the most effective ways to reach your audience, nurture leads, and drive conversions...
            </p>
            <a href="/first" className="text-blue-600 font-medium mt-4 inline-block hover:underline">
              Read More →
            </a>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-gray-100 shadow-lg rounded-2xl overflow-hidden">
          <img
            src="https://ik.imagekit.io/jncw2kb8u/Untitled-design-2.jpg?updatedAt=1738333319161"
            alt="PPC Performance"
            className="w-full h-52 object-cover rounded-t-2xl"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Maximize Your PPC Performance | 6 Proven Strategies
            </h3>
            <p className="text-sm text-gray-500 mb-3">dodun | October 15, 2024</p>
            <p className="text-gray-700">
              PPC advertising remains one of the most effective strategies for driving targeted traffic and conversions...
            </p>
            <a href="/second" className="text-blue-600 font-medium mt-4 inline-block hover:underline">
              Read More →
            </a>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-gray-100 shadow-lg rounded-2xl overflow-hidden">
          <img
            src="https://ik.imagekit.io/jncw2kb8u/Untitled-design.jpg?updatedAt=1738333319159"
            alt="Digital Challenges"
            className="w-full h-52 object-cover rounded-t-2xl"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Navigating the Digital Landscape | 5 Challenges
            </h3>
            <p className="text-sm text-gray-500 mb-3">dodun | October 15, 2024</p>
            <p className="text-gray-700">
              In today’s fast-paced digital world, marketers face an ever-evolving landscape filled with opportunities and challenges...
            </p>
            <a href="/third" className="text-blue-600 font-medium mt-4 inline-block hover:underline">
              Read More →
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div data-aos="flip-down" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Latest Posts */}
        <div className="bg-gray-100 shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">LATEST POSTS</h2>
          <ol className="space-y-2 text-gray-700">
            <li><a href="/first" className="hover:text-blue-600">The Ultimate Email Marketing Guide for Beginners</a></li>
            <li><a href="/second" className="hover:text-blue-600">Maximize Your PPC Performance | 6 Proven Strategies</a></li>
            <li><a href="/third" className="hover:text-blue-600">Navigating the Digital Landscape | 5 Challenges</a></li>
          </ol>
        </div>

        {/* Our Services */}
        <div className="bg-gray-100 shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">OUR SERVICES</h2>
          <ol className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-blue-600">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-blue-600">Designing</a></li>
            <li><a href="#" className="hover:text-blue-600">Development</a></li>
            <li><a href="#" className="hover:text-blue-600">Hosting</a></li>
            <li><a href="#" className="hover:text-blue-600">Animated Videos</a></li>
          </ol>
        </div>

        {/* Categories */}
        <div className="bg-gray-100 shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">CATEGORIES</h2>
          <ol className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-blue-600">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-blue-600">Email Marketing</a></li>
            <li><a href="#" className="hover:text-blue-600">Performance Marketing</a></li>
            <li><a href="#" className="hover:text-blue-600">PPC</a></li>
            <li><a href="#" className="hover:text-blue-600">SEO</a></li>
          </ol>
        </div>
      </div>
    </div>

    <Footer />
    </>
    
  )
}

export default blog