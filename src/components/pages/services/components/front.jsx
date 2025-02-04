import React from 'react'

const front = () => {
  return (
    <>
   <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
  <div data-aos="fade-right" className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
    <h1 className="text-4xl font-bold mb-4">
      A Website Built Your Way For Your Success
    </h1>
    <p className="text-lg mb-6">
      Our goal is to create websites that not only look great but also drive engagement and conversions.
    </p>
    <button className="bg-yellow-400 text-gray-900 py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
      Get A Free Consultation
    </button>
  </div>

  <div data-aos="fade-left" className="w-full md:w-1/2">
    <img 
      src="https://ik.imagekit.io/jncw2kb8u/rb_28694.png?updatedAt=1738569371580" 
      alt="Website Illustration" 
      className="w-full h-auto rounded-lg shadow-lg" 
    />
  </div>
</div>
    </>
  )
}

export default front