import React, { Component } from 'react';
import Cart from './Cart';

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="nav-top">
                            <a className="navbar-brand" href="/">
                                <img src="/img/logo.png" alt="Brand" className="brand-logo" />
                            </a>

                            <Cart />

                            <button className="navbar-toggler ml-auto hidden-sm-up float-xs-right bg-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        
                        <div className="collapse navbar-collapse nav-bottom" id="navbarTogglerDemo01">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            </ul>
                            
                        </div>
                    </nav>
                </div>
                
            </React.Fragment>
        )
    }
}
