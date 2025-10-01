import { useEffect, useRef } from 'react'

export default function TestimonialsSection() {
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The dedicated professionals behind our success.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 lg:gap-12">
          {/* Team member 1 */}
          <div className="scroll-animate card-3d">
            <div className="card-3d-inner p-8 hover-lift h-full flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full ring-4 ring-gray-200 bg-gradient-to-b from-gray-100 to-gray-200 shadow-inner mb-6 flex items-center justify-center overflow-hidden mx-auto">
                <svg viewBox="0 0 64 64" className="w-20 h-20 text-gray-400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="24" r="12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 54c4-10 16-16 20-16s16 6 20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="font-semibold text-gray-900 text-lg">Gurjeet Singh</div>
              {/* <div className="text-orange-600">CEO</div> */}
            </div>
          </div>

          {/* Team member 2 */}
          <div className="scroll-animate card-3d">
            <div className="card-3d-inner p-8 hover-lift h-full flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full ring-4 ring-gray-200 bg-gradient-to-b from-gray-100 to-gray-200 shadow-inner mb-6 flex items-center justify-center overflow-hidden mx-auto">
                <svg viewBox="0 0 64 64" className="w-20 h-20 text-gray-400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="24" r="12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 54c4-10 16-16 20-16s16 6 20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="font-semibold text-gray-900 text-lg">G Singh</div>
              {/* <div className="text-orange-600">Project Manager</div> */}
            </div>
          </div>

          {/* Team member 3 */}
          <div className="scroll-animate card-3d">
            <div className="card-3d-inner p-8 hover-lift h-full flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full ring-4 ring-gray-200 bg-gradient-to-b from-gray-100 to-gray-200 shadow-inner mb-6 flex items-center justify-center overflow-hidden mx-auto">
                <svg viewBox="0 0 64 64" className="w-20 h-20 text-gray-400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="24" r="12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 54c4-10 16-16 20-16s16 6 20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="font-semibold text-gray-900 text-lg">G Singh </div>
              {/* <div className="text-orange-600">Lead Architect</div> */}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}


