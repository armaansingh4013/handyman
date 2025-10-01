export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold text-orange-600"
            >
              GG Brothers Ltd.
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Professional construction services with over 15+ years of experience. We build your dreams with quality, precision, and dedication.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full hover:bg-orange-700 transition-colors duration-300"
              >
                <i className="ri-youtube-fill text-white" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full hover:bg-orange-700 transition-colors duration-300"
              >
                <i className="ri-twitter-fill text-white" />
              </a> */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full hover:bg-orange-700 transition-colors duration-300"
              >
                <i className="ri-instagram-fill text-white" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-full hover:bg-orange-700 transition-colors duration-300"
              >
                <i className="ri-linkedin-fill text-white" />
              </a> */}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300"
                  href="/"
                  data-discover="true"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300"
                  href="/about"
                  data-discover="true"
                >
                  About
                </a>
              </li>
             
              <li>
                <a
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300"
                  href="/gallery"
                  data-discover="true"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300"
                  href="/contact"
                  data-discover="true"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Residential Construction</li>
              <li className="text-gray-300">Commercial Building</li>
              <li className="text-gray-300">Renovation &amp; Remodeling</li>
              <li className="text-gray-300">Project Management</li>
              <li className="text-gray-300">Consulting Services</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Info</h4>
            <div className="space-y-3">
              {/* <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-fill text-orange-600" />
                </div>
                <span className="text-gray-300">123 Construction Ave, Building City, BC 12345</span>
              </div> */}
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-fill text-orange-600" />
                </div>
                <a href="tel:+447735969047" className="text-gray-300 hover:text-orange-600 transition-colors duration-300">+44 773 596 9047</a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-fill text-orange-600" />
                </div>
                <a
                  href="mailto:ggbrothers@gmail.com"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation()
                    // Force mail client in case any SPA handlers intercept the click
                    window.location.href = 'mailto:ggbrothers@gmail.com'
                  }}
                >
                  ggbrothers@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center">
          <p className="text-gray-400 text-center">
            © 2025 GG Brothers Ltd. All rights reserved.
          </p>
          {/* <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              className="text-gray-400 hover:text-orange-600 transition-colors duration-300"
              href="/privacy"
              data-discover="true"
            >
              Privacy Policy
            </a>
            <a
              className="text-gray-400 hover:text-orange-600 transition-colors duration-300"
              href="/terms"
              data-discover="true"
            >
              Terms of Service
            </a>
          
          </div> */}
        </div>
      </div>
    </footer>
  )
}


