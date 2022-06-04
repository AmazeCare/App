import PropTypes from 'prop-types'
import React from 'react'
import 'styles/components/Header/header.scss'

function Header({ title }) {
  return (
    <main className="container-layout flex flex-col lg:flex-row">
      <div className="text-center lg:text-left flex-1 lg:w-2/3 py-4 lg:py-8">
        <h1 className="text-4xl tracking-tight font-semibold text-primary sm:text-5xl md:text-6xl">
          <span className="header xl:inline">
            {title}
          </span>
        </h1>
      </div>
    </main>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
