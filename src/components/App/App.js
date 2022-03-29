import React from 'react';
import { createUseStyles } from 'react-jss';

import Alert from '../Alert/Alert';
import CartSuccess from '../CartSuccess/CartSuccess';
import CartWarning from '../CartWarning/CartWarning';

const useStyles = createUseStyles({
  wrapper123: {
    padding: 20,
  },
})

function App() {
  const classes = useStyles()

  return (
    <>
      <div style={{"text-align": "center", paddingTop: 20}}><u>run npm install for add JSS </u></div>
      <div className={classes.wrapper123}>
        <Alert title="Items Not Added" type="error">
          <div>Your items are out of stock.</div>
        </Alert>

        <CartSuccess />

        <CartWarning />
      </div>
    </>
  )
}

export default App;
