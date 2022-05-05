/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import logo from 'assets/logo.png'

function NavItems() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-white shadow">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex">
          <img className="mr-3 h-10" src={logo} alt="Logo" />
          <span className="self-center text-lg font-semibold whitespace-nowrap text-primary">
            Amaze
            <span className="text-secondary">Care</span>
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Get started
          </button>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            type="button"
            className="inline-flex items-center p-2 text-sm text-primary rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className={`${navbarOpen ? '' : 'hidden'} justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4`}>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="/" className="block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:p-0 hover:text-primary" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/about-us" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="/our-services" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 hover:text-primary">
                Our Services
              </a>
            </li>
            <li>
              <a href="/ns-govt-help" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 hover:text-primary">
                Ns Gov. Help
              </a>
            </li>
            <li>
              <a href="/contact-us" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 hover:text-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavItems
