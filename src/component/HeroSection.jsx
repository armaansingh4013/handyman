import React from 'react'

const HeroSection = () => {
  return (
    <section
    className="relative h-screen flex items-center justify-center bg-dark bg-cover bg-center fadeIn"
    style={{minHeight:"500px", animationDelay: '100ms' }}
  >
    <div className="absolute inset-0 z-0">
      <video
        className="object-cover w-full h-full "
        src="https://wedesignthemes.s3.amazonaws.com/mezan/Mezan+VD+Work+5mb.mp4"
        autoPlay
        muted
        playsInline
        loop
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="container mx-auto px-4 z-10 text-start min-h-[var(500)]">
      <div className="w-full lg:w-1/2 ">
      <p className="text-white text-lg mb-6">
LET'S GET TO WORK        </p>
        <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">Honest, trustworthy, and does good work.</h2>
        <p className="text-white text-lg mb-6">
          Eget mi proin sed libero. Egestas sed sed risus pretium quam vulputate dignissim. Tincidunt vitae semper quis lectus nulla at volutpat diam.
        </p>
        <div className="flex  items-center space-x-4 mb-4">
          <a href="#" className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-full hover:bg-blue-600">
            Get a quote
          </a>
          <a href="#" className="bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600">
            Learn More
          </a>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default HeroSection
