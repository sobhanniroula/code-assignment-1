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
        let items, totalItems, totalPrice, lastSavedTime, timeNow; 
        items = localStorage.getItem('items');
        totalItems = localStorage.getItem('totalItems');
        totalPrice = localStorage.getItem('totalPrice');
        lastSavedTime = localStorage.getItem('lastSavedTime');
        timeNow = new Date().getTime();

        if (lastSavedTime && timeNow - lastSavedTime < 60000) {
            if (items && totalItems && totalPrice) {
                items = JSON.parse(items);
                totalItems = JSON.parse(totalItems);
                totalPrice = JSON.parse(totalPrice);
                this.setState({
                    items,
                    totalItems,
                    totalPrice
                });
            }
        }else {
        fetch('cart/get')
            .then(response => {
            return response.json()
            }).then((data) => {
                console.log(data);
                this.setState({
                    items: data.items,
                    totalItems: data.totalItems,
                    totalPrice: data.totalPrice
                });
                localStorage.setItem('items', JSON.stringify(data.items));
                localStorage.setItem('totalItems', JSON.stringify(data.totalItems));
                localStorage.setItem('totalPrice', JSON.stringify(data.totalPrice));
                localStorage.setItem('lastSavedTime', new Date().getTime());
            }).catch((e) => console.log(e));
        }
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
