import React, { Component } from 'react';
import './Product.css';

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

export default class Product extends Component {
  state = {
    cart: [],
    // total: 0,
  }
  currentOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

  add = (product) => {
    this.setState(state => {
      return {
        cart: [...state.cart, product],
      }
    })
  }

  getTotal = () => {
    const total = this.state.cart.reduce((totalCost, item) => totalCost + item.price, 0)
    // return this.state.total.toLocaleString(undefined, this.currentOptions)
    return total.toLocaleString(undefined, this.currentOptions)
  }

  // remove = (product) => {
  //   this.setState( state => {
  //     const cart = [...state.cart]
  //     cart.splice(cart.indexOf(product.name))
  //     return ({
  //       cart,
  //       total: state.total - product.price,
  //     })
  //   })
  // }
  remove = (product) => {
    this.setState( state => {
      const cart = [...state.cart]
      const productIndex = cart.findIndex(p => p.name === product.name)
      if (productIndex < 0) {
        return
      }
      cart.splice(productIndex, 1)
      return ({cart})
    })
  }

  render() {
    return(
      <div className="wrapper">
        <div>
          <b>Shopping Cart:</b> <u>{this.state.cart.length} total items</u>.
        </div>

        {/*<div>Total: {this.state.total}</div>*/}
        <div><b>Total:</b> <u>{this.getTotal()}</u></div>

        <section className="section">
          {products.map(product => (
            <div key={product.name} className="product-holder">
              <div className="product">
                <span role="img" aria-label={product.name}>{product.emoji}</span>
              </div>

              <button onClick={()=> this.add(product)}>Add</button>
              <button onClick={() => this.remove(product)}>Remove</button>
            </div>
          ))}
        </section>
      </div>
    )
  }
}
