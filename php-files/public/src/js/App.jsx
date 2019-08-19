import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import TopBar from './components/TopBar.jsx';
import ProductList from './components/ProductList.jsx';
import VaimoAd from './components/VaimoAd.jsx';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>

        <TopBar />
        <Navbar />
        <VaimoAd />
        <ProductList />       
        <Footer />
        
      </React.Fragment>
    );
  }
}
