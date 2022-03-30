import React, {useReducer, useState} from 'react';
import './Product.css';

// Product items
const products = [
  {
    emoji: '☕',
    name: 'cup coffee',
    price: 5,
  },
  {
    emoji: '🍸',
    name: 'juice',
    price: 2.5,
  },
  {
    emoji: '⛾',
    name: 'cup tea',
    price: 4,
  },
]
// Options for format currencies according browser settings
const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 4,
}

// Total items coast
function getTotal(cart) {
  // Counting the items price
  const total = cart.reduce((totalCost, item) => totalCost + item.price, 0)
  // Format price to string to return
  return total.toLocaleString(undefined, currencyOptions)
}

// Reducer hook callback. Action by type
function cartReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.product]
    case 'remove':
      // Find index of item in state by name
      const productIndex = state.findIndex(item => item.name === action.product.name)
      // Check is item present
      if (productIndex < 0) {
        // If item not exist return not modified state
        return state
      }
      // If item exist in state.
      // Create the state clone
      const update =  [...state]
      //  update.splice(update.findIndex(()=>action.name), 1)
      //  update.splice(update.indexOf(action.name), 1);
      // Cut the target item from the state clone
      update.splice(productIndex, 1)
      // Return updated state
      return update
    default:
      return state
  }
}

export default function Product() {
  // Reducer hook.
  const [cart, setCart ] = useReducer(cartReducer,[])

  function add(product) {
    // The function for useReducer's callback
    // The object with item for operation and action type
    setCart({ product, type: 'add' })
  }

  function remove(product) {
    setCart({ product, type: 'remove' })
  }

  return(
    <div className="wrapper">
      <div>
        <b>Shopping Cart:</b> <u>{cart.length} total items</u>.
      </div>

      <div><b>Total:</b> <u>{getTotal(cart)}</u></div>

      <section className="section">
        {products.map(product => (
          <div key={product.name} className="product-holder">
            <div className="product">
              <span role="img" aria-label={product.name}>{product.emoji}</span>
            </div>

            <button onClick={() => add(product)}>Add</button>
            <button onClick={() => remove(product)}>Remove</button>
          </div>
        ))}
      </section>
    </div>
  )
}
