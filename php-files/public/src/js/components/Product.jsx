import React, { Component } from 'react';
// import product from '/index.blade.php';

export default class Product extends Component {
    
    render() {
        const { title, image, price, specialPrice } = this.props;

        return (
            <div className="product">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <div className="card">
                            <img src={image} alt={title}/>
                            <div className="card-body">
                                <p className="card-text">{title}</p>
                                <p className="card-price">€{price}</p>
                                <button className="btn btn-subscribe">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
