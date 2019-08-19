import React, { Component } from 'react';

export default class CartHover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            title: "",
            image: "",
            price: 0,
            count: 1
        }
    }

    componentDidMount() {
        fetch('/cart/get')
            .then(response => {
            return response.json();
        }).then((data) => {
            console.log(data);
            this.setState({
                items: data.items
            });
        }).catch((e) => console.log(e))
        // .then(data => {
        //     setTimeout(() => {
        //         console.log(data);
        //         this.setState({
        //             items: data
        //         });
        //     }, 60000)
        // }).catch((e) => {
        //     console.log(e);
        // })
    }

    
    render() {
        const { items, count } = this.state;
        console.log(items);

        return (
            <div className="cart-hover">
                {
                    items.map((val) => {
                        return (     
                            <div className="row">
                                <div className="col-2 cart-item">
                                    <img src={val.imgSrc} alt={val.name}/>
                                </div>
                                <div className="col-8 cart-item-price">
                                    <h6>{val.name}</h6>
                                    <p>{count}&times;€{val.price}</p>
                                </div>
                                <div className="col-2 ml-auto cart-delete">
                                    <a href="">&times;</a>
                                </div>
                            </div>
                        );
                    })        
                }

                <div className="row">
                    <div className="col-12 checkout-btn-div">
                        <button className="btn btn-subscribe">Go to Checkout</button>
                    </div>
                </div>
            </div>
        );
        
    }
}
