import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import ProductList from './components/ProductList';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBar />
        <Navbar />
        <ProductList />       
        <Footer />
      </React.Fragment>
      
    )
  }
}
