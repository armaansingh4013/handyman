import StatsSection from '../components/StatsSection.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import FeaturedProjects from '../components/FeaturedProjects.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import CtaSection from '../components/CtaSection.jsx'

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://readdy.ai/api/search-image?query=Modern%20construction%20site%20with%20professional%20workers%20building%20a%20contemporary%20house%2C%20construction%20equipment%20and%20materials%20visible%2C%20clean%20organized%20worksite%20with%20safety%20protocols%2C%20bright%20daylight%20with%20clear%20sky%2C%20professional%20construction%20photography%20style%20with%20warm%20natural%20lighting%20showcasing%20quality%20craftsmanship%20and%20attention%20to%20detail%2C%20construction%20workers%20wearing%20safety%20gear%20and%20hard%20hats%2C%20modern%20architectural%20design%20elements%20visible&width=1920&height=1080&seq=hero-construction&orientation=landscape")',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building Your
              <span className="gradient-text block">Dreams</span>
              Into Reality
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional construction services with over 15+ years of experience. We deliver quality, precision, and excellence in every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact">
                <button
                  type="button"
                  className="inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-xl px-8 py-4 text-lg rounded-xl animate-pulse-glow"
                >
                  Get Free Quote
                </button>
              </a>
              {/* <a href="/gallery">
                <button
                  type="button"
                  className="inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 text-lg rounded-xl text-white border-white hover:bg-white hover:text-gray-900"
                >
                  View Our Work
                </button>
              </a> */}
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-arrow-down-line text-white text-2xl"></i>
          </div>
        </div>
      </section>

      <ServicesSection />
      <StatsSection />
      <FeaturedProjects />

      {/* <TestimonialsSection /> */}

      <CtaSection />

    </>
  )
}


