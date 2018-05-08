import React, { Component } from 'react';
import Nav from './components/navbar.js';
import Footer from './components/Footer';
import Routes from './routes.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
