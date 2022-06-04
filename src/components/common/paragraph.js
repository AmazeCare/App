import React from 'react'
import PropTypes from 'prop-types'

export default function Paragraph({ heading, subHeading, children }) {
  return (
    <>
      {heading && <h2>{heading}</h2>}
      {subHeading && <h3>{subHeading}</h3>}
      {children}
    </>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
}

Paragraph.defaultProps = {
  subHeading: '',
  heading: '',
}
