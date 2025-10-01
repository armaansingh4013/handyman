import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/ggbrothers_1.png'

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300 border-b">
      <nav className="px-6 lg:px-8">
        <div className="mx-auto max-w-5xl flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold hover:opacity-90 transition-colors duration-300 flex items-center gap-2"
              style={{ color: 'var(--primary-color)'}}
            >
              <img src={logo} alt="GG Brothers logo" className="h-18 w-18 object-contain bg-black rounded-full" />
              GG Brothers
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `font-medium transition-all duration-300 relative group ${isActive ? 'text-[color:var(--primary-color)]' : 'text-gray-700'}`
              }
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[color:var(--primary-color)] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition-all duration-300 relative group ${isActive ? 'text-[color:var(--primary-color)]' : 'text-gray-700'}`
              }
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[color:var(--primary-color)] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `font-medium transition-all duration-300 relative group ${isActive ? 'text-[color:var(--primary-color)]' : 'text-gray-700'}`
            }
          >
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[color:var(--primary-color)] transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium transition-all duration-300 relative group ${isActive ? 'text-[color:var(--primary-color)]' : 'text-gray-700'}`
              }
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[color:var(--primary-color)] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <Link
              to="/contact"
              className="px-6 py-2 rounded-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              Get Quote
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="text-gray-700 transition-colors duration-300 p-2 rounded-md hover:bg-gray-100"
            >
              {isMobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <div className="w-6 h-6 flex items-center justify-center">
                  <i class="fa-solid fa-bars"></i>
                </div>
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`${isMobileOpen ? 'block' : 'hidden'} md:hidden`}
        >
          <div className="mx-auto max-w-5xl px-6 pb-4 pt-2 flex flex-col gap-4 bg-white border-t">
            <NavLink
              to="/"
              end
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `py-2 font-medium transition-colors duration-300 ${isActive ? 'text-[color:var(--primary-color)]' : 'text-gray-700'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `py-2 font-medium transition-colors duration-300 ${isActive ? 'text-[color:var(--primary-color)]' : 'text-gray-700'}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/gallery"
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `py-2 font-medium transition-colors duration-300 ${isActive ? 'text-[color:var(--primary-color)]' : 'text-gray-700'}`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `py-2 font-medium transition-colors duration-300 ${isActive ? 'text-[color:var(--primary-color)]' : 'text-gray-700'}`
              }
            >
              Contact
            </NavLink>
            <Link
              to="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="mt-2 px-6 py-2 rounded-lg text-white text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}


