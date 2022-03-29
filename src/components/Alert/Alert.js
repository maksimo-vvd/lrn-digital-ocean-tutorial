import React from "react";
import PropTypes from 'prop-types';

import {createUseStyles} from "react-jss";

const colors = {
  success: 'green',
  error: 'red',
  warning: 'orange',
}
const useStyles = createUseStyles({
  heading: {},
  wrapper: {
    border: ({type}) => `2px solid ${colors[type]}`,
    marginBottom: 20,
    padding: 15,
    position: 'relative',
    '& $heading': {
    // '& > h2': {
      color: ({type}) => colors[type],
      margin: [0, 0, 10, 0],
    },
  },
})

export default function Alert({ children, type, title }) {
  const classes = useStyles({type})
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.heading}>{title}</h2>

      {children}
    </div>
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
