import PropTypes from 'prop-types'
import React from 'react'
import 'styles/components/Header/header.scss'

function Header({ title }) {
  return (
    <main className="container flex flex-col lg:flex-row mx-auto sm:px-6 md:px-12 lg:px-18">
      <div className="text-center lg:text-left flex-1 lg:w-2/3 py-8 lg:py-16 drop-shadow">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl drop-shadow">
          <span className="header xl:inline text-primary ">
            {title}
          </span>
        </h1>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
        style={{ transform: 'translateZ(0)' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-primary fill-current"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </main>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
