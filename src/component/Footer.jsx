import React from 'react'

const Footer = () => {
  return (
    <>
    <section id="comp-lsvshsim1" className="flex flex-col items-center  bg-black" tabIndex="-1">
  <div className="relative">
    <div className="absolute inset-0 bg-gray-200"></div>
    <div className="relative z-10"></div>
  </div>
  <div className="container mx-auto p-8">
    <div className="flex flex-wrap  -mx-4">
      <section className="w-full lg:w-1/2 p-6 mb-8  text-[var(--primary-color)]">
      
        <div className="space-y-7">
          <div className=" text-center lg:text-left">
            <h2 className="text-4xl font-semibold ">Let's Discuss<br />Your Next Project</h2>
          </div>
          <div>
            <p className="text-gray-400 text-lg">Fill out the form, or call us to set up a free in-home consultation.</p>
            
            </div>
            <div className='space-y-2'>
            <p className="font-bold text-gray-100 text-lg">Service Areas:</p>
            <p className="text-gray-400">San Francisco, Santa Clara, Alameda, San Mateo</p>
            </div>
          <div>
            <p className="text-gray-400">500 Terry Francine Street San Francisco, CA 94158</p>
          </div>
          <div>
            <p className="text-gray-100"><a href="mailto:info@mysite.com" className="text-blue-500">info@mysite.com</a></p>
          </div>
          <div>
            <p className="text-blue-500">123-456-7890</p>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-1/2 px-4 mb-8 text-[var(--primary-color)]">
        <div className="relative">
          <div className="absolute inset-0 bg-gray-200"></div>
          <div className="relative z-10"></div>
        </div>
        <div className="space-y-4 font-medium">
          <form className="space-y-4">
            <div className='flex'>
            <div className="text-lg  w-6/12 px-2">
              <label htmlFor="first-name ">First Name*</label>
              <input type="text" id="first-name" name="first-name" className="w-full p-1 border-b bg-transparent border-gray-300 rounded focus:outline-none " required maxLength="100" autoComplete="off" />
            </div>
            <div className=" text-lg w-6/12 px-2">
              <label htmlFor="last-name" className="block ">Last Name</label>
              <input type="text" id="last-name" name="last-name" className="w-full p-1 border-b bg-transparent border-gray-300 rounded focus:outline-none " required maxLength="100" autoComplete="off" />
            </div>
            </div>
            <div className='flex'>
            <div className=" text-lg w-6/12 px-2">
              <label htmlFor="email" >Email*</label>
              <input type="email" id="email" name="email" className="w-full p-1 border-b bg-transparent border-gray-300 rounded focus:outline-none " required pattern="^.+@.+\.[a-zA-Z]{2,63}$" maxLength="250" autoComplete="off" />
            </div>
            <div className=" text-lg w-6/12 px-2">
              <label htmlFor="phone" className="block ">Phone</label>
              <input type="tel" id="phone" name="phone" className="w-full p-1 border-b border-gray-300 bg-transparent rounded focus:outline-none " maxLength="50" autoComplete="off" />
            </div>
            </div>
            <div className="px-2 text-lg">
              <label htmlFor="address" className="block">Address</label>
              <input type="text" id="address" name="address" className="w-full p-1 border-b border-gray-200 bg-transparent rounded focus:outline-none" maxLength="250" autoComplete="off" />
            </div>
            <div className=" text-lg px-2">
              <label htmlFor="subject" className="block">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full p-1 border-b border-gray-300 bg-transparent rounded focus:outline-none " autoComplete="off" />
            </div>
            <div className=" text-lg px-2">
              <label htmlFor="message" className="block ">Type your message here...</label>
              <textarea id="message" className="w-full p-2 border-b bg-transparent border-gray-300 rounded focus:outline-none " placeholder=""></textarea>
            </div>
            <div className='text-lg px-2'>
              <button type="submit" className="w-full py-2 px-4 bg-[var(--primary-color)] text-white rounded hover:bg-white hover:text-[var(--primary-color)] focus:outline-none ">Submit</button>
            </div>
            <div className="text-center text-gray-200 hidden">Thanks for submitting!</div>
          </form>
        </div>
      </section>
    </div>
  </div>
</section>

    </>
  )
}

export default Footer
