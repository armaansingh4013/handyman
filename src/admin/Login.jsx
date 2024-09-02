import React from 'react'
import { Link } from 'react-router-dom'

import handyman from '../assets/handyman.jpg'

const Login = () => {
  return (
    <div style={{backgroundImage:`url(${handyman})`}} >
    <div className=" bg-[#000000e6] min-h-screen flex items-center">
      <div className=" container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-[#000000e6] p-6 rounded-lg shadow-lg">
              <h1 className="text-4xl text-center font-bold mb-6 text-[var(--primary-color)]">Login</h1>
              <p className="text-gray-600 text-center dark:text-gray-400 mb-6">Sign In to your account</p>
              <form>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    autoComplete="username"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                  />
                </div>
                <div className="flex justify-center items-center mt-10 mb-4 w-100">
                  <button
                    type="submit"
                    className="bg-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)] text-white font-bold py-2 px-4 rounded-lg focus:outline-none w-full"
                  >
                    Login
                  </button>
                 
                </div>
              </form>
            </div>
          
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
