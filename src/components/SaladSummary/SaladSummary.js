import React, { useContext } from "react";
import { createUseStyles } from 'react-jss'

// import Context for usse
import { SaladContext } from "../SaladMaker/SaladMaker";

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: 50,
    '& li': {
      width: 100
    }
  },
  wrapper: {
    borderTop: 'black solid 1px',
    display: 'flex',
    padding: 25,
  }
})

function SaladSummary () {
  const classes = useStyles()
  // Get salad from SaladContext used useContext
  const { salad } = useContext(SaladContext)

  return(
    <div className={classes.wrapper}>
      <h2>Your Salad</h2>

      <ul className={classes.list}>
        {salad.map(({name, id}) => {
          return <li key={id}>{name}</li>
          }
        )}
        {/*<li>Apple</li>*/}
        {/*<li>Avocado</li>*/}
        {/*<li>Broccoli</li>*/}
      </ul>
    </div>
  )
}

export default SaladSummary
