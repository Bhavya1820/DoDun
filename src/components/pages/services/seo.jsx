import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'


const seo = () => {
  return (
    <>
    <Navbar />
    <Front />
    <div className="px-4 py-8 bg-gradient-to-r from-green-500 to-blue-500 text-white">
  <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Lineup of SEO Services</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <img 
        src="https://ik.imagekit.io/jncw2kb8u/business-logo-1.png?updatedAt=1738570820335" 
        alt="Keyword Research" 
        className="mx-auto mb-4 w-20 h-20 object-contain"
      />
      <h3 className="text-xl font-semibold mb-2">Keyword Research</h3>
      <p className="text-sm">Identifying high-traffic, relevant keywords for your niche. Helps optimize content for search engines and target audience. Ensures competitive advantage with well-researched terms.</p>
    </div>

    <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <img 
        src="https://ik.imagekit.io/jncw2kb8u/business-logo-2.png?updatedAt=1738571019608" 
        alt="On-Page Optimization" 
        className="mx-auto mb-4 w-20 h-20 object-contain"
      />
      <h3 className="text-xl font-semibold mb-2">On-Page Optimization</h3>
      <p className="text-sm">Enhances website elements like meta tags, headers, and images. Improves site structure, internal linking, and keyword placement. Boosts search engine rankings and overall user experience.</p>
    </div>

    <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <img 
        src="https://ik.imagekit.io/jncw2kb8u/business-logo-3.png?updatedAt=1738571112180" 
        alt="Technical SEO" 
        className="mx-auto mb-4 w-20 h-20 object-contain"
      />
      <h3 className="text-xl font-semibold mb-2">Technical SEO</h3>
      <p className="text-sm">Focuses on improving website performance and crawlability. Optimizes page speed, mobile-friendliness, and sitemap configuration. Ensures search engines can efficiently index your site.</p>
    </div>

    <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <img 
        src="https://ik.imagekit.io/jncw2kb8u/business-logo-4.png?updatedAt=1738571210732" 
        alt="Content Creation & Optimization" 
        className="mx-auto mb-4 w-20 h-20 object-contain"
      />
      <h3 className="text-xl font-semibold mb-2">Content Creation & Optimization</h3>
      <p className="text-sm">Develops high-quality, SEO-friendly content for your website. Incorporates relevant keywords and addresses user intent. Strengthens authority, engagement, and search visibility.</p>
    </div>

    <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <img 
        src="https://ik.imagekit.io/jncw2kb8u/business-logo-5.png?updatedAt=1738571290218" 
        alt="Link Building" 
        className="mx-auto mb-4 w-20 h-20 object-contain"
      />
      <h3 className="text-xl font-semibold mb-2">Link Building</h3>
      <p className="text-sm">Acquires quality backlinks from reputable websites. Enhances site authority and improves search engine ranking. Builds trust and drives referral traffic to your site.</p>
    </div>

    <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <img 
        src="https://ik.imagekit.io/jncw2kb8u/business-logo-6.png?updatedAt=1738571391557" 
        alt="Local SEO" 
        className="mx-auto mb-4 w-20 h-20 object-contain"
      />
      <h3 className="text-xl font-semibold mb-2">Local SEO</h3>
      <p className="text-sm">Optimizes your site for local search queries and Google My Business. Focuses on location-based keywords and online reviews. Helps your business appear in local map results and directories.</p>
    </div>
  </div>
</div>

    <TechStack />
    <Footer />
    </>
  )
}

export default seo