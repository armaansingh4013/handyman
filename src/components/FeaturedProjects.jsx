import { useEffect, useRef } from 'react'

export default function FeaturedProjects() {
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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our most successful construction projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="scroll-animate card-3d">
            <div className="card-3d-inner bg-white rounded-xl shadow-3d hover-lift overflow-hidden">
              <div className="relative h-64">
                <img
                  alt="Featured Project 1"
                  className="w-full h-full object-cover object-top"
                  src="https://readdy.ai/api/search-image?query=Professional%20construction%20project%20showcase%20featuring%20modern%20building%20architecture%20with%20clean%20lines%20and%20contemporary%20design%2C%20completed%20construction%20project%20with%20high%20quality%20finishes%2C%20professional%20photography%20with%20natural%20lighting%2C%20construction%20excellence%20and%20craftsmanship%20visible%2C%20modern%20building%20materials%20and%20architectural%20details%2C%20professional%20construction%20company%20portfolio%20image&width=400&height=300&seq=project-1&orientation=landscape"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {/* <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Modern Residential Complex</h3>
                  <p className="text-gray-200 text-sm">Downtown District</p>
                </div> */}
              </div>
              {/* <div className="p-6">
                <p className="text-gray-600 mb-4">A stunning 24-unit residential complex featuring modern amenities and sustainable design.</p>
                <a className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300" href="/gallery">View Details →</a>
              </div> */}
            </div>
          </div>

          <div className="scroll-animate card-3d">
            <div className="card-3d-inner bg-white rounded-xl shadow-3d hover-lift overflow-hidden">
              <div className="relative h-64">
                <img
                  alt="Featured Project 2"
                  className="w-full h-full object-cover object-top"
                  src="https://readdy.ai/api/search-image?query=Professional%20construction%20project%20showcase%20featuring%20modern%20building%20architecture%20with%20clean%20lines%20and%20contemporary%20design%2C%20completed%20construction%20project%20with%20high%20quality%20finishes%2C%20professional%20photography%20with%20natural%20lighting%2C%20construction%20excellence%20and%20craftsmanship%20visible%2C%20modern%20building%20materials%20and%20architectural%20details%2C%20professional%20construction%20company%20portfolio%20image&width=400&height=300&seq=project-2&orientation=landscape"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {/* <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Commercial Office Building</h3>
                  <p className="text-gray-200 text-sm">Business Center</p>
                </div> */}
              </div>
              {/* <div className="p-6">
                <p className="text-gray-600 mb-4">State-of-the-art office building with cutting-edge technology and energy-efficient systems.</p>
                <a className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300" href="/gallery">View Details →</a>
              </div> */}
            </div>
          </div>

          <div className="scroll-animate card-3d">
            <div className="card-3d-inner bg-white rounded-xl shadow-3d hover-lift overflow-hidden">
              <div className="relative h-64">
                <img
                  alt="Featured Project 3"
                  className="w-full h-full object-cover object-top"
                  src="https://readdy.ai/api/search-image?query=Professional%20construction%20project%20showcase%20featuring%20modern%20building%20architecture%20with%20clean%20lines%20and%20contemporary%20design%2C%20completed%20construction%20project%20with%20high%20quality%20finishes%2C%20professional%20photography%20with%20natural%20lighting%2C%20construction%20excellence%20and%20craftsmanship%20visible%2C%20modern%20building%20materials%20and%20architectural%20details%2C%20professional%20construction%20company%20portfolio%20image&width=400&height=300&seq=project-3&orientation=landscape"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {/* <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Luxury Custom Home</h3>
                  <p className="text-gray-200 text-sm">Hillside Estate</p>
                </div> */}
              </div>
              {/* <div className="p-6">
                <p className="text-gray-600 mb-4">Luxury custom home with premium finishes and breathtaking architectural details.</p>
                <a className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300" href="/gallery">View Details →</a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 scroll-animate">
          <a href="/gallery">
            <button
              type="button"
              className="inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-xl px-8 py-4 text-lg rounded-xl"
            >
              View All Projects
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}


