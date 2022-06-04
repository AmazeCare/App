import PropTypes from 'prop-types'
import React from 'react';

export default function Features({ icon, heading, content }) {
  return (
    <div className="space-y-2">
      <div className="text-primary text-4xl">{icon}</div>
      <h3>{heading}</h3>
      <p>{content}</p>
    </div>
  )
}

Features.propTypes = {
  content: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
