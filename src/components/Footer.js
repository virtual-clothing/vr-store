import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openCloseContact } from './ducks/reducer';
import ContactUs from './ContactUs';


class Footer extends Component {

    render() {

        const DesktopDisplay = styled.div`
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: space-around;
            width: 100%;

            @media (max-width: 740px) {
                display: none;
            }
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
        const MobileDisplay = styled.div`
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            @media (min-width: 740px) {
                display: none;
            }
        `
        const MobileButtons = styled.div`
            width:100%;
            display: flex;
            justify-content: space-around;
            margin-bottom: 10px;
        `

        const Footer = styled.div`
            background-color: lightgray;
            width: 100%;
            position: fixed;
            bottom: 0;
            left: 0;

        `
        return (
            <Footer>
                <MobileDisplay>
                    <SocialMediaLinks>
                        <StyledATag><img src='./twitter.png' alt='twitter' height='30px' width='30px' /></StyledATag>
                        <StyledATag><img src='./facebook.png' alt='facebook' height='30px' width='30px' /></StyledATag>
                        <StyledATag><img src='./instagram.png' alt='instagram' height='30px' width='30px' /></StyledATag>
                    </SocialMediaLinks>
                    <MobileButtons>
                        <button onClick={() => this.props.openCloseContact()}>CONTACT US</button>
                        <button>CHAT</button>
                    </MobileButtons>
                </MobileDisplay>




                <DesktopDisplay>
                    <button onClick={() => this.props.openCloseContact()}>CONTACT US</button>
                    <SocialMediaLinks>
                        <StyledATag><img src='./twitter.png' alt='twitter' height='50%' width='50%' /></StyledATag>
                        <StyledATag><img src='./facebook.png' alt='facebook' height='50%' width='50%' /></StyledATag>
                        <StyledATag><img src='./instagram.png' alt='instagram' height='50%' width='50%' /></StyledATag>
                    </SocialMediaLinks>
                    <button>CHAT</button>
                </DesktopDisplay>

            </Footer>
        )
    }
}

function mapStateToProps(state) {
    return {
        contactIsOpen: state.contactIsOpen
    }
};

export default connect(mapStateToProps, { openCloseContact })(Footer);