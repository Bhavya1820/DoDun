import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const home = () => {
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

  const faqs = [
    {
      question: "Why do I need digital marketing for my business?",
      answer:
        "Having a website is not enough these days. The internet has become one of the most competitive spaces and everyone is competing with the mass amounts of traffic and users online. While a website is extremely important and serves as the foundation for your online marketing presence, it is just that, a foundation. Promotion of your website via other digital marketing channels is important to set your business apart and give you every opportunity to attract a new visitors, which will hopefully turn into new customer.Digital marketing is the promotion of your brand and the service you need to battle against competitors that do not only exist locally, but now exist nationally and internationally against your business. With a strong online presence and digital marketing strategy, the opportunity to scale your business successfully is enormous. Digital marketing presents opportunity for exponential business growth and return multiples that are better than any other advertising opportunity."
    },
    {
      question: "How often do I need to update my business website?",
      answer:
        "With how fast technology changes, it is recommended to audit your website at least once every two years. When designing a website, be sure to keep in mind developing a design that will withstand the test of time. We abide by the idea that simple and minimalistic design that delivers information quickly and easily will always be in. If you are not sure whether your website needs to be updated, request one of our free website audits that will identify potential areas of improvement and issues that you might be having with your website technology.",
    },
    {
      question: "Will my business website be optimized for different sizes?",
      answer:
        "Yes, all of our website designs and development of websites will be optimized for the five standard screen sizes (large desktop, laptop, tablet, phablet, and mobile phone). Over 50% of website traffic comes from mobile devices so we put a huge emphasis on making sure that your website performs on every single screen that someone might be viewing your site on.",
    },
    {
      question:
        "What's the benefit of having a Search Engine Optimization strategy?",
      answer:
        "An SEO strategy is one that is going to pay dividends down the road. We like to use this analogy for SEO efforts: Imagine trying to push a large boulder. At first, it is extremely hard to get the giant object that is not moving to start moving. But, once you start to apply more and more pressure and energy, the boulder slowly begins to move. Once the boulder starts to move it becomes easier and easier to get the boulder to move faster and faster. At some point, if you’re not careful, the boulder will be rolling out of control. This is the same as SEO efforts. Earning SEO rankings do not happen overnight because there are many other competitors that are either better positioned or have been putting in SEO efforts for a longer period of time. But, once your website starts to see increased rankings then it is really like a chain-effect. Traffic will increase more and more as we place you higher in search rankings and things will start to grow exponentially month-over-month as we continue to add more and more relevant content and information that leads back to your website.",
    },
    {
      question: "Why is SEO so important?",
      answer:
        "SEO is important because it helps to make your presence and visibility online much more prominent. When performing SEO efforts, we are creating valuable information and social proof that leads online users back to your business. This inbound marketing strategy is so incredibly valuable and will allow you to reach potential customers that you might not have ever reached in the past. A strong SEO strategy can take your business from zero to one hundred and create an impenetrable force online.",
    },
    {
      question:
        "What network do you perform Pay-Per-Click Advertising services on?",
      answer:
        "We perform pay-per-click advertising services for the following search ad networks: Google Search and Display Network, YouTube Ad Network, Bing Ads Network, Facebook Advertising, Instagram Advertising, Twitter Advertising, and LinkedIn Advertising.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
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
      <div
        data-aos="zoom-in-up"
        className="bg-[url('https://ik.imagekit.io/jncw2kb8u/1.jpg?updatedAt=1738324688512')] bg-cover bg-center min-h-screen flex items-center justify-center px-4 sm:px-8"
      >
        <div
          data-aos="fade-right"
          className="flex flex-col md:flex-row items-center py-10 md:py-20"
        >
          <div className="max-w-sm bg-slate-300 shadow-lg rounded-2xl p-6 mx-auto md:mx-10 text-center">
            <h2 className="text-2xl font-semibold text-sky-700">
              Crafting Your Unique Digital Story, Our Way!
            </h2>
            <p className="text-gray-600 mt-2">
              We believe every business has a story worth telling, and our
              mission is to transform that story into a powerful digital
              presence.
            </p>
            <button className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-lg hover:scale-125 transition duration-300">
              <a href="/contact">Let's build a legacy</a>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-white sm:px-12 lg:px-40 py-10">
        {/* Card Section */}
        <div
          data-aos="fade-up-right"
          className="w-full max-w-md bg-sky-300 shadow-lg rounded-2xl p-6 sm:p-10 text-center mx-auto"
        >
          {/* Title */}
          <h2 className="text-4xl font-semibold text-black">About Us</h2>

          {/* Subtitle */}
          <p className="text-gray-700 mt-2 text-2xl">
            DODUN Soft Solutions - Empowering Tomorrow's Technology!
          </p>

          {/* Description */}
          <p className="text-gray-500 mt-4 text-lg">
            At Dodun Soft Solutions, we’re dedicated to crafting innovative IT
            solutions that propel businesses forward. From cutting-edge software
            development to harnessing the power of emerging technologies like
            AI, we prioritize client-centric solutions tailored to unique
            business needs.
          </p>

          {/* Button */}
          <button className="mt-5 px-4 py-2 bg-white text-black rounded-lg hover:scale-125 transition duration-300">
            <a href="/about" className="text-black">
              Read More
            </a>
          </button>
        </div>

        {/* Image Section */}
        <div data-aos="fade-up-left">
          <img
            src="https://ik.imagekit.io/jncw2kb8u/team-building-activities.jpg?updatedAt=1738328026672"
            alt="Team Building"
            className="w-full h-123 rounded-xl object-cover"
          />
        </div>
      </div>

      <div data-aos="fade-down" className="bg-sky-500 py-10 px-6 ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center transition-transform duration-300 hover:scale-105"
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

      <div data-aos="flip-down" className="bg-gray-100 py-10 px-6">
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

      <div data-aos="zoom-out-right" className="bg-gray-100 py-12 px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2">
            Find answers to common questions about our services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium text-gray-800 hover:bg-gray-200 transition"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-6 text-gray-600 text-sm transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-[1000px] py-4"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div></div>    what our client say section*/}

        <div>
          <div>
            <h1></h1>
            <p></p>
          </div>
          <div>
            
          </div>
        </div>
      <Footer />
    </>
  );
};

export default home;
