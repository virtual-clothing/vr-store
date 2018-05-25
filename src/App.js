import React, { Component } from 'react';
import Nav from './components/navbar.js';
import Footer from './components/Footer';
import Routes from './routes.js';
import styled from 'styled-components';
import ContactUs from './components/ContactUs';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Chat from './components/bot/Chat';
import { openCloseContact } from './components/ducks/reducer';
import ChatButton from './components/ChatButton';
import { relative } from 'path';
const Body = styled.div`
  min-height: 100vh;
`
class App extends Component {
  render() {
    return (
      <div style={{position: "relative"}}>
       
        <div style={{ position: 'fixed', top: '0', zIndex: "2" }}>
          <Nav/>
        </div>
        
        <div style={{ position: 'relative', zIndex: "1", marginTop: '6.5rem' }}>
          <Routes />
        </div>

        <div style={{ position: 'relative', zIndex: "3" }}>
        <ContactUs isOpen={this.props.contactIsOpen} cancel={this.props.openCloseContact}/>
        </div>
        <ChatButton />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactIsOpen: state.contactIsOpen
  }
}

export default withRouter(connect(mapStateToProps,{openCloseContact})(App));
