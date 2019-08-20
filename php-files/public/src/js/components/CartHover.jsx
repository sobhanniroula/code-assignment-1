import React, { Component } from 'react';

export default class CartHover extends Component {
        
    render() {
        const { items } = this.props;

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
                                    <p>{val.qty}&times;€{val.price}</p>
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
