export default function ContactInfoCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 mb-16">
          {/* <div className="scroll-animate card-3d animate">
            <div className="card-3d-inner bg-gray-50 p-8 rounded-xl shadow-3d hover-lift text-center h-full">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-6">
                <i className="ri-map-pin-fill text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Office</h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line">
                {`123 Construction Ave\nBuilding City, BC 12345`}
              </p>
              <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300">Get Directions</button>
            </div>
          </div> */}
          <div className="scroll-animate card-3d animate w-full md:flex-1">
            <div className="card-3d-inner bg-gray-50 p-8 rounded-xl shadow-3d hover-lift text-center h-full">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-6">
                <i className="ri-phone-fill text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line">
                {`+44 773 596 9047\nMon-Fri: 8AM-6PM`}
              </p>
              <a
                href="tel:+447735969047"
                className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  window.location.href = 'tel:+447735969047'
                }}
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="scroll-animate card-3d animate w-full md:flex-1">
            <div className="card-3d-inner bg-gray-50 p-8 rounded-xl shadow-3d hover-lift text-center h-full">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-6">
                <i className="ri-mail-fill text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6 whitespace-pre-line">
                {`ggbrothers@gmail.com\nResponse within 24 hours`}
              </p>
              <a
                href="mailto:ggbrothers@gmail.com"
                className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  window.location.href = 'mailto:ggbrothers@gmail.com'
                }}
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


