import { useEffect, useRef } from 'react'

export default function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive construction services to bring your vision to life with unmatched quality and professionalism.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="scroll-animate card-3d">
            <div className="card-3d-inner bg-white p-8 rounded-xl shadow-3d hover-lift text-center h-full">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-6">
                <i className="ri-home-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bath & Tilling</h3>
              <p className="text-gray-600 leading-relaxed">Expert bathroom renovations and precise wall/floor tiling, waterproofing, regrouting, and tile repairs.</p>
            </div>
          </div>
          <div className="scroll-animate card-3d">
            <div className="card-3d-inner bg-white p-8 rounded-xl shadow-3d hover-lift text-center h-full">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-6">
                <i className="ri-building-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skimming & All types of Rendering</h3>
              <p className="text-gray-600 leading-relaxed">Smooth skimming and durable internal/external rendering: sand/cement, monocouche, and decorative finishes.</p>
            </div>
          </div>
          <div className="scroll-animate card-3d">
            <div className="card-3d-inner bg-white p-8 rounded-xl shadow-3d hover-lift text-center h-full">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-6">
                <i className="ri-hammer-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Plumbing</h3>
              <p className="text-gray-600 leading-relaxed">Installations and repairs: pipework, fixtures, leak detection, drainage, bathroom and kitchen fit-outs.</p>
            </div>
          </div>
          <div className="scroll-animate card-3d">
            <div className="card-3d-inner bg-white p-8 rounded-xl shadow-3d hover-lift text-center h-full">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-6">
                <i className="ri-settings-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">All types of Electric works & painting</h3>
              <p className="text-gray-600 leading-relaxed">Certified electrical installations and repairs, plus professional interior/exterior painting and finishing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


