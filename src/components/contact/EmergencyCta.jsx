export default function EmergencyCta() {
  return (
    <section className="py-20 bg-orange-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="scroll-animate animate">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need Emergency Service?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">We provide 24/7 emergency construction services for urgent repairs and safety issues.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+447735969047" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap flex items-center space-x-2">
              <div className="w-5 h-5 flex items-center justify-center"><i className="ri-phone-fill"></i></div>
              <span>Call Emergency Line: +44 773 596 9047</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


