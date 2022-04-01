import React, { createContext, useReducer } from "react";

import { createUseStyles } from 'react-jss'

import SaladBuilder from "../SaladBuilder/SaladBuilder";
import SaladSummary from "../SaladSummary/SaladSummary";
import { ReactComponent as PlateSVG } from '../../images/salad-food-svgrepo-com.svg';

const useStyles = createUseStyles ({
  'head-icon': {},
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",

    '& $head-icon': {
      width: 40,
      margin: [0, 16]
    },
  },
})

// Says create Context and export
export const SaladContext = createContext()

function reducer(state, item) {
  return [...state, item]
}

function SaladMaker() {
  const classes = useStyles()

  const [salad, setSalad] = useReducer(reducer, [])

  console.log(salad, setSalad)

  return (
    // Context container for child components that will has access to context
    <SaladContext.Provider value={{salad, setSalad}}>
      <h1 className={classes.wrapper}>
        <PlateSVG className={classes['head-icon']} role="img" aria-label="salad" />
        Build your Custom Salad!
        <PlateSVG className={classes['head-icon']} role="img" aria-label="salad" />
      </h1>

      <SaladBuilder />

      <SaladSummary />
    </SaladContext.Provider>
  )
}

export default SaladMaker
