import React from "react";
import PropTypes from 'prop-types';

import './Alert.css';

export default function Alert({ children, type, title }) {
  const colors = {
    success: 'green',
    error: 'red',
  }
  const style = {
    heading: {
      color: colors[type],
      margin: '0 0 10px',
    },
    wrapper: {
      border: `2px solid ${colors[type]}`,
      marginBottom: 20,
      padding: 15,
      position: 'relative',
    },
  }

  return (
    <div style={style.wrapper}>
      <h2 style={style.heading}>{title}</h2>

      {children}
    </div>
    // <div className={`alert-wrapper ${type}`}>
    //   <h2>{title}</h2>
    //
    //   {children}
    // </div>
  )
}

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
