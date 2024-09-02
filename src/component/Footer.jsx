import React from 'react'

const Footer = () => {
  return (
    <>
<section id="comp-lsvshsim1" className="flex flex-col items-center bg-black text-white py-12" tabIndex="-1">
  <div className="container mx-auto p-8">
    <div className="flex flex-wrap -mx-4 justify-between">
      <section className="w-full lg:w-1/3 p-6 mb-8">
        <div className="space-y-5">
         
          <p className="font-bold text-2xl text-[var(--primary-color)]">Service Areas</p>
          <p className="text-gray-400">San Francisco, Santa Clara, Alameda, San Mateo</p>
          <p className="text-gray-400">500 Terry Francine Street San Francisco, CA 94158</p>
          <p className="text-blue-500"><a href="mailto:info@mysite.com">info@mysite.com</a></p>
          <p className="text-blue-500">123-456-7890</p>
        </div>
      </section>
      
      <section className="w-full lg:w-1/3 p-6 mb-8">
        <div className="space-y-5">
          <h3 className="text-2xl font-semibold text-[var(--primary-color)]">About Us</h3>
          <p className="text-gray-400">We are committed to delivering top-notch services with attention to detail. Our team is here to bring your vision to life.</p>
          <ul className="space-y-2">
            <li><a href="#services" className="text-blue-500 hover:underline">Our Services</a></li>
            <li><a href="#portfolio" className="text-blue-500 hover:underline">Portfolio</a></li>
            <li><a href="#testimonials" className="text-blue-500 hover:underline">Testimonials</a></li>
          </ul>
        </div>
      </section>

      <section className="w-full lg:w-1/3 p-6 mb-8">
        <div className="space-y-5">
          <h3 className="text-2xl font-semibold text-[var(--primary-color)]">Follow Us</h3>
          <p className="text-gray-400">Stay connected through our social channels:</p>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="text-blue-500 hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-blue-500 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-blue-500 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-blue-500 hover:text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </section>
    </div>
    <div className="text-center text-gray-500 text-sm mt-8">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </div>
</section>
</>

  )
}

export default Footer
