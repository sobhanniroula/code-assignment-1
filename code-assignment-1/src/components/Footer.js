import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div class="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Top Categories</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Women</a></li>
                                <li><a href="/">Men</a></li>
                                <li><a href="/">Junior</a></li>
                                <li><a href="/">Accessories</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Customer Service</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Returns</a></li>
                                <li><a href="/">Shipping</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 ml-auto">
                            <h5 className="subscribe-text">Newsletter Subscribe</h5>
                            <div className="input-group">
                                <i class="far fa-envelope subs-icon"></i>
                                <input type="email" className="form-control subs-input" placeholder="Enter your email address" />
                                <button className="btn btn-subscribe" type="submit">Subscribe</button>
	                        </div>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
}
