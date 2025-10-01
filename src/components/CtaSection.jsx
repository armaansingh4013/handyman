import { useEffect, useRef } from 'react'

export default function CtaSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const container = sectionRef.current
    if (!container) return

    const elements = container.querySelectorAll('.scroll-animate')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          'linear-gradient(rgba(249, 115, 22, 0.9), rgba(234, 88, 12, 0.9)), url("https://readdy.ai/api/search-image?query=Construction%20team%20working%20together%20on%20a%20building%20project%2C%20professional%20construction%20workers%20collaborating%2C%20construction%20site%20with%20modern%20equipment%20and%20tools%2C%20teamwork%20and%20professionalism%20in%20construction%20industry%2C%20construction%20project%20in%20progress%20with%20quality%20workmanship%20visible%2C%20professional%20construction%20company%20team%20at%20work&width=1920&height=600&seq=cta-construction&orientation=landscape")',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your construction needs and turn your vision into reality. Get a free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact">
              <button
                type="button"
                className="inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg bg-orange-600 text-orange-700 hover:text-white hover:bg-orange-700 shadow-lg hover:shadow-xl px-8 py-4 text-lg rounded-xl bg-white text-orange-600 hover:bg-gray-100"
              >
                Get Free Consultation
              </button>
            </a>
            <a href="tel:+447735969047" className="text-white hover:text-orange-200 transition-colors duration-300 flex items-center space-x-2">
              <div className="w-5 h-5 flex items-center justify-center"><i className="ri-phone-fill"></i></div>
              <span className="text-lg font-semibold">44 773 596 9047</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


