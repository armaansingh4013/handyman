export default function WorkWithUsCta() {
  return (
    <section className="py-20 bg-orange-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="scroll-animate animate">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Experience the BuildCraft Pro difference. Let's discuss your construction project and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact">
              <button
                type="button"
                className="inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl"
              >
                Start Your Project
              </button>
            </a>
            <a href="/gallery">
              <button
                type="button"
                className="inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg rounded-xl"
              >
                View Our Work
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


