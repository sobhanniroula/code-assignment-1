import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div className="product">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <div className="card">
                            <img src="/img/products/bag.jpg" alt="Bag"/>
                            <div className="card-body">
                                <p className="card-text">Bag</p>
                                <p className="card-price">€79.00</p>
                                <button className="btn btn-subscribe">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <div className="card">
                            <img src="/img/products/belt.jpg" alt="Bag"/>
                            <div className="card-body">
                                <p className="card-text">Belt</p>
                                <p className="card-price">€79.00</p>
                                <button className="btn btn-subscribe">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
