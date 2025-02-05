import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const picture = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <div class="relative w-full h-150 md:h-[500px] lg:h-200">
        <img
          src=""
          class="w-full h-full object-cover opacity-50"
        />

        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:gap-10 ">
          <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold text-black drop-shadow-md">
            Crafting Your Unique Digital Story, Our Way!
          </h1>
          <p class="mt-2 text-sm md:text-lg lg:text-xl text-black max-w-2xl">
            We believe every business has a story worth telling, and our mission
            is to transform that story into a powerful digital presence.
          </p>
          <button class="mt-4 px-6 py-2 bg-gradient-to-r from-sky-600 to-blue-800 text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-110 transition delay-200 duration-300 ease-in-out">
            <a href="/contact">Let's Build a Legacy</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default picture;
