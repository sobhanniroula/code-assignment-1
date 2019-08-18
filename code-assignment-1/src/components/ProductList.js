import React, { Component } from 'react';
import Product from './Product';


export class ProductList extends Component {
    render() {
        return (
            <div className="product-list">
                <div className="container">
                    <div className="product-list-top-bar">
                        <div className="our-favourites">Our Favourites</div>
                    </div>

                    <Product />
                </div>
            </div>
        );
    }
}

export default ProductList;
