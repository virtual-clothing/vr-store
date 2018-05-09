import React, { Component } from 'react';
import Nav from './components/navbar.js';
import Footer from './components/Footer';
import Routes from './routes.js';
import styled from 'styled-components';

const Body = styled.div`
  min-height: 100vh;
`


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
