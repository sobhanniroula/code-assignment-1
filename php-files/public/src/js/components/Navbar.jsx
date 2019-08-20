import React, { Component } from 'react';
import Cart from './Cart.jsx';



export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>

              <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">

                  <div className="nav-top">
                    <div className="nav-top-logo">
                        <a className="navbar-brand" href="#">
                            <img src="img/logo.png" alt="Brand" className="brand-logo" />
                        </a>
                    </div>

                    <div className="nav-top-cart">
                      <Cart />
              
                      <button className="navbar-toggler ml-auto hidden-sm-up float-xs-right toggler-button" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    </div>
                  </div>

                  
                  <div className="collapse navbar-collapse nav-bottom" id="navbarNavDropdown">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ul-bottom-nav">
                      
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Women
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Casual</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Summer</a></li>
                              <li><a className="dropdown-item" href="#">Autumn</a></li>
                              <li><a className="dropdown-item" href="#">Winter</a></li>
                              <li><a className="dropdown-item" href="#">Spring</a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Formal</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Summer</a></li>
                              <li><a className="dropdown-item" href="#">Autumn</a></li>
                              <li><a className="dropdown-item" href="#">Winter</a></li>
                              <li><a className="dropdown-item" href="#">Spring</a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Inner</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Summer</a></li>
                              <li><a className="dropdown-item" href="#">Autumn</a></li>
                              <li><a className="dropdown-item" href="#">Winter</a></li>
                              <li><a className="dropdown-item" href="#">Spring</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Men
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Casual</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Summer</a></li>
                              <li><a className="dropdown-item" href="#">Autumn</a></li>
                              <li><a className="dropdown-item" href="#">Winter</a></li>
                              <li><a className="dropdown-item" href="#">Spring</a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Formal</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Summer</a></li>
                              <li><a className="dropdown-item" href="#">Autumn</a></li>
                              <li><a className="dropdown-item" href="#">Winter</a></li>
                              <li><a className="dropdown-item" href="#">Spring</a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Inner</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Summer</a></li>
                              <li><a className="dropdown-item" href="#">Autumn</a></li>
                              <li><a className="dropdown-item" href="#">Winter</a></li>
                              <li><a className="dropdown-item" href="#">Spring</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Junior
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Casual</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Summer</a></li>
                              <li><a className="dropdown-item" href="#">Autumn</a></li>
                              <li><a className="dropdown-item" href="#">Winter</a></li>
                              <li><a className="dropdown-item" href="#">Spring</a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Sports</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Summer</a></li>
                              <li><a className="dropdown-item" href="#">Autumn</a></li>
                              <li><a className="dropdown-item" href="#">Winter</a></li>
                              <li><a className="dropdown-item" href="#">Spring</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Accessories
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Shoes</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Leather</a></li>
                              <li><a className="dropdown-item" href="#">Synthetic</a></li>
                              <li><a className="dropdown-item" href="#">Casual</a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Belts</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Leather</a></li>
                              <li><a className="dropdown-item" href="#">Chain</a></li>
                              <li><a className="dropdown-item" href="#">Casual</a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Watches</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Rolex</a></li>
                              <li><a className="dropdown-item" href="#">Tissot</a></li>
                              <li><a className="dropdown-item" href="#">Rado</a></li>
                              <li><a className="dropdown-item" href="#">Casio</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Collections
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">2014</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Summer</a></li>
                              <li><a className="dropdown-item" href="#">Autumn</a></li>
                              <li><a className="dropdown-item" href="#">Winter</a></li>
                              <li><a className="dropdown-item" href="#">Spring</a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">2013</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Summer</a></li>
                              <li><a className="dropdown-item" href="#">Autumn</a></li>
                              <li><a className="dropdown-item" href="#">Winter</a></li>
                              <li><a className="dropdown-item" href="#">Spring</a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">2012</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Summer</a></li>
                              <li><a className="dropdown-item" href="#">Autumn</a></li>
                              <li><a className="dropdown-item" href="#">Winter</a></li>
                              <li><a className="dropdown-item" href="#">Spring</a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">2011</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Summer</a></li>
                              <li><a className="dropdown-item" href="#">Autumn</a></li>
                              <li><a className="dropdown-item" href="#">Winter</a></li>
                              <li><a className="dropdown-item" href="#">Spring</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item nav-sale dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Sale
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Summer</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Women</a></li>
                              <li><a className="dropdown-item" href="#">Men</a></li>
                              <li><a className="dropdown-item" href="#">Junior</a></li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Winter</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Women</a></li>
                              <li><a className="dropdown-item" href="#">Men</a></li>
                              <li><a className="dropdown-item" href="#">Junior</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                    </ul>

                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link  my-account" href="/">My Account</a>
                      </li>
                    </ul>

                  </div>

                  <div className="black-bar"></div>
                </nav>


              </div>

            </React.Fragment>
        );
    }
}







