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
                                <a className="navbar-brand" href="/">
                                    <img src="/img/logo.png" alt="Brand" className="brand-logo" />
                                </a>
                            </div>
                            <div className="nav-top-cart">
                                <Cart />
                                
                                <button className="navbar-toggler ml-auto hidden-sm-up float-xs-right toggler-button" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                        
                        <div className="collapse navbar-collapse nav-bottom" id="navbarTogglerDemo01">
                        
                            <a href="#home">Home</a>
                            <a href="#news">News</a>
                            <div className="dropdown">
                                <button className="dropbtn">Dropdown 
                                <i class="fa fa-caret-down"></i>
                                </button>
                                <div className="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                                </div>
                            </div> 

                            <ul className="navbar-nav">
                            <li className="nav-item">
                                    <a className="nav-link" href="/">My Account</a>
                                </li>
                            </ul>
                            
                        </div>

                        <div className="black-bar"></div>
                    </nav>
                </div>
                
                <div className="container">
                    
                   


<nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <a href="#" className="navbar-brand font-weight-bold">Multilevel Dropdown</a>
    <button type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler">
              <span className="navbar-toggler-icon"></span>
          </button>


    <div id="navbarContent" className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        {/* <!-- Level one dropdown --> */}
        <li className="nav-item dropdown">
          <a id="dropdownMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Dropdown</a>
          <ul aria-labelledby="dropdownMenu1" className="dropdown-menu border-0 shadow">
            <li><a href="#" className="dropdown-item">Some action </a></li>
            <li><a href="#" className="dropdown-item">Some other action</a></li>

            <li className="dropdown-divider"></li>

            {/* <!-- Level two dropdown--> */}
            <li className="dropdown-submenu">
              <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Hover for action</a>
              <ul aria-labelledby="dropdownMenu2" className="dropdown-menu border-0 shadow">
                <li>
                  <a tabindex="-1" href="#" className="dropdown-item">level 2</a>
                </li>

                {/* <!-- Level three dropdown--> */}
                <li className="dropdown-submenu">
                  <a id="dropdownMenu3" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">level 2</a>
                  <ul aria-labelledby="dropdownMenu3" className="dropdown-menu border-0 shadow">
                    <li><a href="#" className="dropdown-item">3rd level</a></li>
                    <li><a href="#" className="dropdown-item">3rd level</a></li>
                  </ul>
                </li>
                {/* <!-- End Level three --> */}

                <li><a href="#" className="dropdown-item">level 2</a></li>
                <li><a href="#" className="dropdown-item">level 2</a></li>
              </ul>
            </li>
            {/* <!-- End Level two --> */}
          </ul>
        </li>
        {/* <!-- End Level one --> */}

        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>


                </div>

                        
                    
            
                
            </React.Fragment>
        )
    }
}







