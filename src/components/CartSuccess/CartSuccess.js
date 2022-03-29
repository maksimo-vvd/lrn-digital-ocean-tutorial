import React from 'react';
import Alert from '../Alert/Alert';
import './CartSuccess.css';

export default function CartSuccess() {
  const styles = {
    header: {
      width: '100%'
    },
    item: {
      marginRight: 20,
      marginBottom: 20,
    },
    wrapper: {
      borderTop: 'black solid 1px',
      display: 'flex',
      flexWrap: 'wrap'
    }
  }

  return(
    <Alert title="Added to Cart" type="success">
      {/*<div className="cart-success-wrapper">*/}
      <div style={styles.wrapper}>
        {/*<h2>*/}
        <h2  style={styles.header}>
          You have added 3 items:
        </h2>

        <dl>
          {/*<div className="item">*/}
          <div style={styles.item}>
            <dt>Bananas</dt>
            <dd>Quantity: <b>2</b></dd>
          </div>
          {/*<div className="item">*/}
          <div style={styles.item}>
            <dt>Lettuce</dt>
            <dd>Quantity: <b>1</b></dd>
          </div>
        </dl>
      </div>
    </Alert>
  )
}
