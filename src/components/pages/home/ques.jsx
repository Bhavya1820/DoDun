import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";


const ques = () => {

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
    <div  className="bg-white py-12 px-4">
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
  )
}

export default ques