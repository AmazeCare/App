/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import logo from 'assets/logo.png'

function NavItems() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-gray-50">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex no-underline">
          <img className="mr-3 h-10" src={logo} alt="Logo" />
          <span className="self-center text-2xl font-semibold text-primary">
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
              <a href="/" className="nav-items" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/about-us" className="nav-items">
                About Us
              </a>
            </li>
            <li>
              <button onClick={() => setisOpen(!isOpen)} className="font-semibold nav-items inline-flex items-baseline align-middle" type="button">
                Services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isOpen && (
                <div className="z-10 absolute bg-white divide-y divide-gray-100 rounded px-4">
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    {/* <li>
                      <a href="/associate-care" className="nav-items p-2">Associate Care</a>
                    </li> */}
                    <li>
                      <a href="/cancer-care" className="nav-items p-2">Cancer Care</a>
                    </li>
                    <li>
                      <a href="/home-care" className="nav-items p-2">Home Care</a>
                    </li>
                    <li>
                      <a href="/hospital-care" className="nav-items p-2">Hospital Care</a>
                    </li>
                    <li>
                      <a href="/palliative-care" className="nav-items p-2">Palliative Care</a>
                    </li>
                    <li>
                      <a href="/parkinson-care" className="nav-items p-2">Parkinson Care</a>
                    </li>
                    <li>
                      <a href="/recreation-care" className="nav-items p-2">Recreation Care</a>
                    </li>
                    <li>
                      <a href="/stroke-care" className="nav-items p-2">Stroke Care</a>
                    </li>
                    <li>
                      <a href="/substitute-care" className="nav-items p-2">Substitute Care</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a href="/blog" className="nav-items">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact-us" className="nav-items">
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
