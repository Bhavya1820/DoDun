import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const aboutUs = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once
      });
    }, []);
  return (
    <>
    <Navbar />
    <div className="max-w-5xl mx-auto p-8">
      <h2 data-aos="zoom-in" className="text-4xl font-bold text-sky-300">About</h2>
      <p data-aos="zoom-in" className="mt-4 text-gray-700">
      Over the past five years, our journey has been nothing short of remarkable. From startups to established enterprises, we have successfully delivered tailored solutions across various industries, helping businesses thrive. When you partner with DODUN Soft Solutions, you choose a team that genuinely cares about your success. We take the time to understand your unique challenges and objectives, crafting tailored solutions that align with your vision. Our holistic approach, combined with our commitment to quality and client satisfaction, sets us apart in the industry. Here’s what you can expect from us:
      </p>
      <section class="py-12 px-6 md:px-24 lg:px-32">
    <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div data-aos="flip-down" class="bg-white rounded-lg p-8 shadow-md">
                <div class="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <h3 class="ml-3 text-lg font-semibold text-gray-800">Tailored Solutions</h3>
                </div>
                <p class="text-gray-700">We customise our services to meet your specific needs, ensuring that you receive the most relevant and effective strategies.</p>
            </div>

            <div data-aos="flip-down" class="bg-white rounded-lg p-8 shadow-md">
                <div class="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <h3 class="ml-3 text-lg font-semibold text-gray-800">Expert Guidance</h3>
                </div>
                <p class="text-gray-700">Our team is here to guide you every step of the way, offering insights and support to help you navigate the digital landscape.</p>
            </div>

            <div data-aos="flip-down" class="bg-white rounded-lg p-8 shadow-md">
                <div class="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <h3 class="ml-3 text-lg font-semibold text-gray-800">Results-Driven Approach</h3>
                </div>
                <p class="text-gray-700">We focus on delivering measurable results, using data and analytics to inform our strategies and drive growth.</p>
            </div>

        </div>
    </div>
</section>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        
        <div data-aos="fade-right" className="text-center p-6 bg-slate-300 rounded-lg">
          <div className="w-16 h-16 mx-auto mb-4 bg-white flex items-center justify-center rounded-full">
            📱
          </div>
          <h3 className="text-xl font-semibold ">Our Mission</h3>
          <p className="text-gray-600 mt-2">
          Our mission is to empower businesses of all sizes by providing exceptional digital solutions that drive growth and success. We believe that every brand has a unique story to tell, and we are here to help you communicate that story effectively to your audience.
          </p>
        </div>

        <div data-aos="fade-down" className="text-center p-6 bg-slate-300 rounded-lg">
          <div className="w-16 h-16 mx-auto mb-4 bg-white flex items-center justify-center rounded-full">
            ⚙️
          </div>
          <h3 className="text-xl font-semibold ">Our Vision</h3>
          <p className="text-gray-600 mt-2">
          To be a leading digital solutions provider recognized for our commitment to quality, creativity, and client satisfaction. We envision a future where businesses thrive in the digital landscape, leveraging our expertise to achieve their goals.
          </p>
        </div>

        <div data-aos="fade-left" className="text-center p-6 bg-slate-300 rounded-lg">
          <div className="w-16 h-16 mx-auto mb-4 bg-white flex items-center justify-center rounded-full">
            🔔
          </div>
          <h3 className="text-xl font-semibold ">Our Values</h3>
          <p className="text-gray-600 mt-2">
          At DODUN Soft Solutions, we foster a collaborative and inclusive environment where creativity thrives. Our team is committed to continuous learning and professional development, staying ahead of industry trends to provide the best solutions for our clients.
          </p>
        </div>
      </div>
    </div>
    <Footer />
   </>
  )
}

export default aboutUs