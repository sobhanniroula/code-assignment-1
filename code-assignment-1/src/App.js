import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './containers/Navbar';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="top-bar"></div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-6">one</div>
            <div className="col-6">two</div>
            <button className="btn btn-success"></button>
          </div>
        </div>
      </React.Fragment>
      
    )
  }
}
