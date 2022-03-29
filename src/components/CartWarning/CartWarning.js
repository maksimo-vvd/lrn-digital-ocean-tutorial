import React from 'react';
import Alert from '../Alert/Alert';
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
  'd-flex': {
    display: 'flex',
  },
  item: {},
  wrapper: {
    borderTop: 'orange dashed 2px',
    paddingTop: 20,
    display: 'flex',
    flexWrap: 'wrap',
    '& h2': {
      width: '100%',
      margin: 'auto',
    },
    '& $item': {
      marginRight: 20,
      marginBottom: 20,
    },
  }
})

export default function CartSuccess() {
  const classes = useStyles();

  return(
    <Alert title="Warning! Item will add to Cart" type="warning">
      <div className={classes.wrapper}>
        <h2>
          You have added 3 items:
        </h2>

        <dl className={classes['d-flex']}>
          <div className={classes.item}>
            <dt>Bananas</dt>
            <dd>Quantity: <b>2</b></dd>
          </div>
          <div className={classes.item}>
            <dt>Lettuce</dt>
            <dd>Quantity: <b>1</b></dd>
          </div>
        </dl>
      </div>
    </Alert>
  )
}
