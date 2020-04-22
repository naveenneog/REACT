import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LCShippingForm from './Components/LCShippingForm';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Lion Circuits Shipping Service</h1>
          
        </header>
        <p className="App-intro">
        <p>Enter the Shipping address and pin code to get the details</p>
        </p>
        <LCShippingForm />
      </div>
    );
  }
}

export default App;
