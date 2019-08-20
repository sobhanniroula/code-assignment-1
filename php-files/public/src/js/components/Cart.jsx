import React, { Component } from 'react';
import CartHover from './CartHover.jsx';


export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            totalItems: 0,
            totalPrice: 0
        };
    }

    componentDidMount() {
        fetch('/cart/get')
            .then(response => {
            return response.json();
        }).then((data) => {
            this.setState({
                items: data.items,
                totalItems: data.totalItems,
                totalPrice: data.totalPrice
            });
        }).catch((e) => console.log(e))
    }


    render() {
        const { items, totalItems, totalPrice } = this.state;

        return (
            <div className="cart">
                <h6 className="cart-icon"><i className="fas fa-shopping-cart"></i></h6>
                <p className="cart-desc">
                    <span className="cart-items-count">{totalItems}</span> items in your cart <span className="cart-total-amount">€{totalPrice}</span>
                </p>

                <CartHover 
                    items={items}
                />
                                                        
            </div>
        );
    }
}
