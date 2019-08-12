import React, { Component } from 'react';
import Cart from './Cart';

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div className="nav-top">
                            <a class="navbar-brand" href="/">
                                <img src="/img/logo.png" alt="Brand" className="brand-logo" />
                            </a>

                            <Cart />

                            <button class="navbar-toggler ml-auto hidden-sm-up float-xs-right bg-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        
                        <div class="collapse navbar-collapse nav-bottom" id="navbarTogglerDemo01">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                            </ul>
                            
                        </div>
                    </nav>
                </div>
                
            </React.Fragment>
        )
    }
}
