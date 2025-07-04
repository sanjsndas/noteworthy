import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <div className="card-card card">
      <div className="card-header">
        <img alt="image" src={props.icon} className="card-icon" />
        <h3 className="card-heading">{props.title}</h3>
      </div>
      <p className="card-text">{props.description}</p>
    </div>
  )
}

Card.defaultProps = {
  icon: '/group%201643.svg',
  title: 'High-impact business services',
  description:
    "Whether you're looking to optimize operations, implement cutting-edge technology, or enhance customer engagement, our seasoned consultants work closely with you to develop customized roadmaps that align with your goals",
}

Card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Card
