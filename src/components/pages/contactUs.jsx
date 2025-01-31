import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const contactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add form submission logic here
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
    <Navbar />
    <div className="grid grid-cols-1 bg-white md:flex py-10 px-70 gap-4">
            <div data-aos="fade-up" className="bg-white  rounded-lg shadow-md flex-row items-center space-x-4 md:h-60 w-150 p-10">
              <MapPin className="text-sky-300" />
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p className="text-gray-700">GM Plaza, Phase -7 Industrial Area, Sector-73, Mohali, India</p>
              </div>
            </div>
            <div data-aos="fade-down" className="bg-white  rounded-lg shadow-md flex-row items-center space-x-4 md:h-60 w-150 p-10">
              <Phone className="text-sky-300" />
              <div>
                <h4 className="text-lg font-semibold">Call Us</h4>
                <p className="text-gray-700">+91-8968881110</p>
              </div>
            </div>
            <div data-aos="fade-up" className="bg-white  rounded-lg shadow-md flex-row items-center space-x-4 md:h-60 w-68 p-10">
              <Mail className="text-sky-300" />
              <div>
                <h4 className="text-lg font-semibold">Email Us</h4>
                <p className="text-gray-700">dodunsoftsolutions@gmail.com</p>
              </div>
            </div>
            <div data-aos="fade-down" className="bg-white  rounded-lg shadow-md flex-row items-center space-x-4 md:h-60 w-160 p-10">
              <Clock className="text-sky-300" />
              <div>
                <h4 className="text-lg font-semibold">Business Hours</h4>
                <p className="text-gray-700">Monday to Friday: 9:00 AM – 6:00 PM</p>
                <p className="text-gray-700"> Saturday: 10:00 AM – 4:00 PM </p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>
          </div>
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div data-aos="fade-right" className="max-w-4xl w-full bg-slate-300 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-15">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
            <button type="submit" className="w-full bg-sky-700 text-white py-3 rounded-lg hover:bg-blue-700">Send Message</button>
          </form>
          <div data-aos="fade-left" className="space-y-6">
            <div className="flex items-center space-x-4 p-5">
              <MapPin className="text-sky-300" />
              <span className="text-gray-700">GM Plaza, Phase -7 Industrial Area, Sector-73, Mohali, India</span>
            </div>
            <div className="flex items-center space-x-4 p-5">
              <Phone className="text-sky-300" />
              <span className="text-gray-700">+91-8968881110</span>
            </div>
            <div className="flex items-center space-x-4 p-5">
              <Mail className="text-sky-300" />
              <span className="text-gray-700">dodunsoftsolutions@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default contactUs