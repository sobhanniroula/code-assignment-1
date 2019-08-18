import React, { Component } from 'react';
import Product from './Product.jsx';


export class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: allProducts
        };
    }

    componentDidMount() {
        // this.state.products.map((item, i) => {
        //     this.setState({
        //         products: item.title
        //     })
        // })
    }

    render() {
        return (
            <div className="product-list">
                <div className="container">
                    <div className="product-list-top-bar">
                        <div className="our-favourites">Our Favourites</div>
                    </div>

                    <div className="all-products">
                        <ul>
                        {this.state.products.map((item) => {
                           return (
                               <Product 
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                               />
                           ); 
                        })} 
                        </ul>
                      
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;
