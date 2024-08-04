import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const [isMobileView,setIsMobileView] = useState(false)
    const toggleMobileView = ()=>{
        setIsMobileView(!isMobileView)
    }
  return (
    <div>
      <section className="flex justify-center items-center relative bg-[var(--primary-color)] hidden md:block ">
      <div className="container justify-between mx-auto flex py-3">
        {/* First Column */}
        <div className=" hidden lg:flex justify-center">
          <ul className="flex space-x-4">
            <li className='rounded-full bg-white px-2'>
              <a href="/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="text-2xl fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li className='rounded-full bg-white px-2'>
              <a href="/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="text-2xl fa-brands fa-instagram"></i>
              </a>
            </li >
            <li className='rounded-full bg-white px-1'>
              <a href="/" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <i className="text-2xl fa-brands fa-youtube"></i>
              </a>
            </li>
            <li className='rounded-full bg-white px-1'>
              <a href="/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <i className="text-2xl fa-brands fa-x-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* Second Column */}
        <div className="flex justify-center">
          <ul className=" flex justify-between items-center text-center lg:text-left">
            <li className=" mx-6">
            <i className="text-xl mx-2 fa-solid fa-location-dot"></i>
              <span>376 Branson Oval Suite 200, South Lon, Mexico</span>
            </li>
            <li >
              <a href="mailto:mezan@example.com" className="flex items-center ">
              <i className="text-xl mx-2 fa-solid fa-envelope"></i>
                <span>meKzan@example.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className='bg-#6b728063 absolute w-full z-10 t-10 flex justify-between px-6 py-4'>
    <div className="flex justify-start items-center">
      <div className="w-auto">
        <a href="https://wdtthemes.kinsta.cloud/mezan/" rel="home">
          <img
            src="https://wdtthemes.kinsta.cloud/mezan/wp-content/themes/mezan/assets/images/light-logo.svg"
            alt="Mezan"
            className="w-auto h-6"
          />
        </a>
        
      </div>
    </div>
    <div className=" text-white flex items-center">
     
       
        <nav className="hidden md:flex items-center">
          <ul className="flex flex-col md:flex-row items-center md:space-y-0 md:space-x-4 lg:text-xl">
            <li >
              <Link to="/" className="block p-4 hover:text-[var(--primary-color)]">Home</Link>
             
            </li>
            <li><a href="/" className="block p-4 hover:text-[var(--primary-color)]">About Us</a></li>
            <li className="relative group">
              <Link to="/services" className="block p-4 hover:text-[var(--primary-color)]">Services</Link>
              {/* <a href="/" className="block p-4 hover:text-[var(--primary-color)]">Services</a> */}
              
            </li>
            <li className="relative group">
              <Link to="/work" className="block p-4 hover:text-[var(--primary-color)]">Work</Link>
              
            </li>
            <li className="relative group">
              <a href="/" className="block p-4 hover:text-[var(--primary-color)]">Contact</a>
              
            </li>
            
          </ul>
        </nav>
        
        
    </div>

    <div className="flex items-center" >
      <div className="hidden sm:block text-center">
        <a href="#" className="bg-[var(--primary-color)] px-6 py-3 rounded-3xl shadow hover:bg-white hover:text-[var(--primary-color)] transition">
          Get a Quote
        </a>
      </div>

      
    
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${isMobileView ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMobileView}></div>
     <div className="md:hidden flex items-center px-4 relative">
         <div href="/" className="menu-trigger flex items-center text-white" onClick={toggleMobileView}>
         <i className="text-3xl fa-solid fa-bars "></i>
        
        </div>

        <nav
        className={`absolute -top-2 right-0 w-64 rounded-lg bg-[var(--primary-color)] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileView ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
       
       <ul className={`py-4 ${isMobileView ? 'block' : 'hidden'} w-64 text-lg text-white`}>
       <li className="menu-item flex items-center justify-end px-4 "onClick={toggleMobileView}>
            <i className="text-3xl fa-solid fa-x ease-in-out"></i>
           
         </li>
         <li className="menu-item">
           <a href="/" className="flex items-center justify-center border-b-2 py-3">
             Home
           </a>
           
         </li>
         <li className="menu-item">
           <a href="/" className="flex items-center justify-center border-b-2 py-3">
             About Us
           </a>
           
         </li>
         <li className="menu-item">
           <a href="/" className="flex items-center justify-center border-b-2 py-3">
             Service
           </a>
           
         </li>
         <li className="menu-item">
           <a href="/" className="flex items-center justify-center border-b-2 py-3">
             Work
           </a>
           
         </li>
         <li className="menu-item">
           <a href="/" className="flex items-center justify-center border-b-2 py-3">
             Contact
           </a>
           
         </li>
         
       </ul>
       
     </nav>

      </div> 
    </div>
    </section>
    </div>
  )
}

export default Header
