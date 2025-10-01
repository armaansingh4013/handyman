import { useEffect, useRef } from 'react'

export default function StatsSection() {
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
    <section ref={sectionRef} className="py-20 bg-orange-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-evenly gap-8 text-center">
          <div className="scroll-animate">
            <div className="text-5xl font-bold text-white mb-2">10+</div>
            <div className="text-xl text-orange-100">Years in Field</div>
          </div>
          <div className="scroll-animate">
            <div className="text-5xl font-bold text-white mb-2">8+</div>
            <div className="text-xl text-orange-100">Average Worker Experience</div>
          </div>
          <div className="scroll-animate">
            <div className="text-5xl font-bold text-white mb-2">98%</div>
            <div className="text-xl text-orange-100">Client Satisfaction</div>
          </div>
          {/* <div className="scroll-animate">
            <div className="text-5xl font-bold text-white mb-2">50+</div>
            <div className="text-xl text-orange-100">Expert Team Members</div>
          </div> */}
        </div>
      </div>
    </section>
  )
}


