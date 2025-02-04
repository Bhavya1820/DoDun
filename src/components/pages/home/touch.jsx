import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const touch = () => {
  
  useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once
        });
      }, []);

  return (
    <div class="bg-gray-900 text-white py-12 px-6">
  {/* <!-- Heading Section --> */}
  <div class="text-center mb-8">
    <h2 class="text-3xl font-bold">Get In Touch With Us</h2>
    <h3 class="text-gray-400 mt-2">We’d love to hear from you. Please reach out with any questions or feedback.</h3>
  </div>

  {/* <!-- Form Container --> */}
  <div class="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
    <form class="space-y-6">
      {/* <!-- First & Last Name --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-300 mb-1">First Name</label>
          <input type="text" placeholder="Enter Your First Name"
            class="w-full px-4 py-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <div>
          <label class="block text-gray-300 mb-1">Last Name</label>
          <input type="text" placeholder="Enter Your Last Name"
            class="w-full px-4 py-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
      </div>

      {/* <!-- Email --> */}
      <div>
        <label class="block text-gray-300 mb-1">Email</label>
        <input type="email" placeholder="Enter a valid Email Address"
          class="w-full px-4 py-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
      </div>

      {/* <!-- Phone Number --> */}
      <div>
        <label class="block text-gray-300 mb-1">Phone No.</label>
        <input type="tel" placeholder="Enter Your Phone Number"
          class="w-full px-4 py-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
      </div>

      {/* <!-- Submit Button --> */}
      <button
        class="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-md font-medium transition-all duration-300">
        Submit
      </button>
    </form>
  </div>
</div>

  )
}

export default touch