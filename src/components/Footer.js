import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openCloseContact, toggleChat } from './ducks/reducer';
import ContactUs from './ContactUs';

const DesktopDisplay = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-around;
    width: 100%;
`;

const SocialMediaLinks = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 20%;
`;

const StyledATag = styled.a`
    margin: 10px;
`
const MobileButtons = styled.div`
    width:100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
`
const FooterComponent = styled.div`
    height: 5vh;
    background-color: lightgray;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;

    @media (max-width: 450px) {
        display: none;
    }
`
class Footer extends Component {

    render() {
        return (
            <FooterComponent>
                <DesktopDisplay>
                    <button onClick={() => this.props.openCloseContact()}>CONTACT US</button>
                    <SocialMediaLinks>
                        <StyledATag><img src='./twitter.png' alt='twitter' height='50%' width='50%' /></StyledATag>
                        <StyledATag><img src='./facebook.png' alt='facebook' height='50%' width='50%' /></StyledATag>
                        <StyledATag><img src='./instagram.png' alt='instagram' height='50%' width='50%' /></StyledATag>
                    </SocialMediaLinks>
                    <button onClick={() => this.props.toggleChat()}>CHAT</button>
                </DesktopDisplay>
            </FooterComponent>
        )
    }
}

function mapStateToProps(state) {
    return {
        contactIsOpen: state.contactIsOpen,
        chatIsOpen: state.chatIsOpen
    }
};

const actionCreators = {
    openCloseContact,
    toggleChat
}

export default connect(mapStateToProps, actionCreators)(Footer);