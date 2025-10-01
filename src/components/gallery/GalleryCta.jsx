function GalleryCta() {
  return (
    <section className="py-20 bg-orange-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
          Let's discuss your construction needs and create something amazing together. Get your free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/contact">
            <button
              type="button"
              className="inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl"
            >
              Get Free Quote
            </button>
          </a>
          <a href="/about">
            <button
              type="button"
              className="inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg rounded-xl"
            >
              Learn About Us
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default GalleryCta


