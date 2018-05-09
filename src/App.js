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
        {/* delete Body tag below, just using to test nav and footer */}
        <Body/>
        <Routes />
        <Footer />

      </div>
    );
  }
}

export default App;
