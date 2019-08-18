import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div className="cart">
                    <h6 className="cart-icon"><i className="fas fa-shopping-cart"></i></h6>
                    <p className="cart-desc">
                        <span className="cart-items-count">3</span> items in your cart <span className="cart-total-amount">€75.00</span>
                    </p>
                
                
            </div>
        )
    }
}
