import React, { Component } from 'react';
import Nav from './components/navbar.js';
import Footer from './components/Footer';
import Routes from './routes.js'
import Popup from 'react-popup';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Popup/>
        <Nav />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
