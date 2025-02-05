import React from "react";

const cards = () => {
  return (
    <div class="bg-white p-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-gradient-to-r from-sky-300 to-blue-600 rounded-lg hover:scale-105 transition duration-300 shadow-lg hover:shadow-3xl">
          <div class="bg-white m-1  p-10 rounded-[calc(0.5rem-1px)]">
            <h1 class="text-3xl font-bold text-black">521+</h1>
            <p class="text-black">Projects Delivered</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-sky-300 to-blue-600 rounded-lg hover:scale-105 transition duration-300 shadow-lg hover:shadow-3xl">
          <div class="bg-white m-1  p-10 rounded-[calc(0.5rem-1px)]">
            <h1 class="text-3xl font-bold text-black">1,463</h1>
            <p class="text-black">Hours of Support</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-sky-300 to-blue-600 rounded-lg hover:scale-105 transition duration-300 shadow-lg hover:shadow-3xl">
          <div class="bg-white m-1  p-10 rounded-[calc(0.5rem-1px)]">
            <h1 class="text-3xl font-bold text-black">15</h1>
            <p class="text-black">Team Experts</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-sky-300 to-blue-600 rounded-lg hover:scale-105 transition duration-300 shadow-lg hover:shadow-3xl">
          <div class="bg-white m-1  p-10 rounded-[calc(0.5rem-1px)]">
            <h1 class="text-3xl font-bold text-black">10+</h1>
            <p class="text-black">Client Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cards;
