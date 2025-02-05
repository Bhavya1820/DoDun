import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const service = () => {
  const services = [
    {
      title: "Development",
      description:
        "Creating stunning websites that attract the right visitors and turn them into loyal customers is both an art and a science. A well-designed website not only looks appealing but also ensures a seamless user experience that keeps visitors engaged. By focusing on intuitive navigation, fast loading speeds, and compelling content, businesses can build trust and credibility online. Strategic design elements, such as clear calls to action and responsive layouts, further enhance user interaction. With the right approach, a website becomes more than just a digital presence—it transforms into a powerful tool for growth and customer retention.",
      images: [
        "https://ik.imagekit.io/jncw2kb8u/images.png?updatedAt=1738733959295",
        "https://ik.imagekit.io/jncw2kb8u/images%202.jpeg?updatedAt=1738733959074",
        "https://ik.imagekit.io/jncw2kb8u/images%20(1).png?updatedAt=1738733958992",
        "https://ik.imagekit.io/jncw2kb8u/windows-app-development-1.jpg?updatedAt=1738733959011"
      ]
    },
    {
      title: "Digital Marketing",
      description:
        "Enhance your brand’s visibility and reputation with our expert digital marketing strategies. In today’s competitive market, a strong online presence is essential for success. Our team specializes in SEO, social media marketing, and content creation to help you stand out. By leveraging data-driven insights and innovative techniques, we ensure your brand reaches the right audience. Let us help you grow your business and build a lasting impact in the digital world.",
      images: [
        "https://ik.imagekit.io/jncw2kb8u/images.jpeg?updatedAt=1738733331963",
        "https://ik.imagekit.io/jncw2kb8u/istockphoto-1297866069-612x612.jpg?updatedAt=1738733331825",
        "https://ik.imagekit.io/jncw2kb8u/seo-3007488_640.jpg?updatedAt=1738733331841",
        "https://ik.imagekit.io/jncw2kb8u/istockphoto-1346575545-612x612.jpg?updatedAt=1738733331688",
        "https://ik.imagekit.io/jncw2kb8u/STUDIO-ANG-098-45-300x279-2.jpg?updatedAt=1738733331561"
      ]
    },
    {
      title: "Designing",
      description:
        "Visual designs that speak volumes about your brand’s creativity and professionalism are essential for making a lasting impression. A well-crafted design captures attention, conveys your message clearly, and establishes credibility. Whether it's a website, logo, or marketing material, every visual element should reflect your brand's identity. Consistency in design builds trust and enhances recognition, setting you apart from the competition. Invest in high-quality visuals to showcase your brand's uniqueness and leave a memorable impact.",
      images: [
        "https://ik.imagekit.io/jncw2kb8u/des.jpeg?updatedAt=1738734348063",
        "https://ik.imagekit.io/jncw2kb8u/download.jpeg?updatedAt=1738734347934",
        "https://ik.imagekit.io/jncw2kb8u/des4.jpeg?updatedAt=1738734347930",
        "https://ik.imagekit.io/jncw2kb8u/des2.jpeg?updatedAt=1738734348149",
        "https://ik.imagekit.io/jncw2kb8u/des1.png?updatedAt=1738734348132"
      ]
    },
    {
      title: "Hosting Provider",
      description:
        "Reliable hosting services keep your website fast, secure, and always online, ensuring a seamless experience for visitors. With optimized servers and advanced security measures, your site remains protected from threats and downtime. Speed is crucial for user engagement, and top-tier hosting guarantees lightning-fast load times. Regular backups and 24/7 support provide peace of mind, allowing you to focus on growing your business. Invest in a trusted hosting provider to maintain performance, reliability, and security at all times.",
      images: ["https://ik.imagekit.io/jncw2kb8u/images%20(2).png?updatedAt=1738734590642"]
    },
    {
      title: "Animated Videos",
      description:
        "Animated videos use rapidly displayed images or graphics to create the illusion of movement. This technique brings characters, objects, and scenes to life, making them engaging and visually appealing. Animation is widely used in entertainment, education, marketing, and storytelling. With advancements in technology, animations have evolved from traditional hand-drawn frames to sophisticated computer-generated visuals. Whether in movies, advertisements, or explainer videos, animation continues to captivate audiences of all ages.",
      images: ["https://ik.imagekit.io/jncw2kb8u/download%20(1).jpeg?updatedAt=1738734590621"]
    }
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
      AOS.init({
        duration: 2000, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once
      });
    }, []);


  return (
   <>
    <div className="w-full max-w-3xl mx-auto py-10 bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-4xl font-bold text-center text-black mb-6">Our Services</h1>
      {services.map((service, index) => (
        <div
          key={index}
          className=" mb-4"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <div className="w-full flex justify-between items-center py-4 px-6 bg-gray-100 hover:bg-gray-300 transition duration-300 text-left focus:outline-none shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700">{service.title}</h2>
            <span className="text-gray-600">{hoverIndex === index ? "▲" : "▼"}</span>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: hoverIndex === index ? "auto" : 0, opacity: hoverIndex === index ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {hoverIndex === index && (
              <div className="p-6 bg-white rounded-lg border-3 border-gray-300">
                <p className="mb-4 text-gray-700 text-lg">{service.description}</p>
                <div className="flex justify-evenly gap-4">
                  {service.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={service.title}
                      className="w-28 h-28 object-cover rounded-md shadow-sm border border-gray-200"
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
   </>
  )
}


export default service