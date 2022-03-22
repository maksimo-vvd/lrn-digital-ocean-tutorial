import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ children, title, details }) {
  return(
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>

        <mark>AnimalDetails as props to Card component start</mark>
        { details }
        <mark>AnimalDetails as props to Card component end</mark>
        <hr/>
        <hr/>
        <hr/>
        <mark>AnimalDetails as children start</mark>
        {children}
        <mark>AnimalDetails as children end</mark>
      </div>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
}
