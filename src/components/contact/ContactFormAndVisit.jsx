import { useEffect } from 'react'

export default function ContactFormAndVisit() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.15 }
    )
    const els = document.querySelectorAll('.scroll-animate')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-12">
          <div className="scroll-animate animate">
            <div className="bg-white p-8 rounded-xl shadow-3d">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Free Consultation</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours with a detailed consultation.</p>
              <form className="space-y-6" id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm" placeholder="Your full name" type="text" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm" placeholder="your@email.com" type="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm" placeholder="(555) 123-4567" type="tel" />
                  </div>
                  
                </div>
                
               
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                  <textarea id="message" name="message" rows={5} maxLength={500} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-sm resize-none" placeholder="Please describe your project in detail, including any specific requirements or questions you have..."></textarea>
                  <div className="text-right text-sm text-gray-500 mt-1">0/500 characters</div>
                </div>
                <button type="submit" className="inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 hover:shadow-lg bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-xl px-8 py-4 text-lg rounded-xl w-full ">Send Message</button>
              </form>
            </div>
          </div>
          {/* <div className="scroll-animate animate">
            <div className="bg-white p-8 rounded-xl shadow-3d h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
              <p className="text-gray-600 mb-6">Come visit our office to discuss your project in person. We're located in the heart of Building City, easily accessible from all major highways.</p>
              <div className="mb-6">
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8267718817415!2d-104.99018248461648!3d39.74051797944444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78c4d9a7e5e1%3A0x1c5a1b9c5c6a1b9c!2sDenver%2C%20CO%2C%20USA!5e0!3m2!1sen!2sus!4v1635789123456!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    style={{ border: 0 }}
                  />
                </div>
              </div>
              
              
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}


