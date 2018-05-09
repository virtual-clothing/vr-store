import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openCloseContact } from './ducks/reducer';
import ContactUs from './ContactUs';


class Footer extends Component {

    render() {

        const DesktopFooter = styled.div`
            align-items: center;
            border: 2px solid black;
            bottom: 0;
            display: flex;
            height: 10vh;
            justify-content: space-around;
            left: 0;
            position: fixed;
            width: 100%;
        `;

        const SocialMediaLinks = styled.div`
            align-items: center;
            background-color: white;
            display: flex;
            height: 100%;
            justify-content: center;
            width: 20%;
        `;

        const StyledATag = styled.a`
            margin: 10px;
        `

        return (
            <DesktopFooter>
                <button onClick={() => this.props.openCloseContact()}>CONTACT US</button>
                <SocialMediaLinks>
                    <StyledATag><img src='./twitter.png' alt='twitter' height='50%' width='50%'/></StyledATag>
                    <StyledATag><img src='./facebook.png' alt='facebook' height='50%' width='50%'/></StyledATag>
                    <StyledATag><img src='./instagram.png' alt='instagram' height='50%' width='50%'/></StyledATag>
                </SocialMediaLinks>
                <button>CHAT</button>
            </DesktopFooter>
        )
    }
}

function mapStateToProps(state) {
    return {
        contactIsOpen: state.contactIsOpen
    }
};

export default connect(mapStateToProps, { openCloseContact})(Footer);