import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Popup from 'react-popup';

export default class Footer extends Component {

    state = {
        name: '',
        subject: '',
        message: ''
    }

    sendMessage(obj) {

    }

    render() {

        const StyledFooter = styled.div`
            align-items: center;
            border: 2px solid black;
            display: flex;
            height: 10vh;
            justify-content: space-around;
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
        const Content = () => {
            return (
                <div>
                    <input placeholder='name'/>
                    <input placeholder='subject'/>
                    <input/>
                </div>
            )
        }
        return (
            <StyledFooter>
                <button onClick={() => Popup.create({
                    title: 'CONTACT US',
                    content:  <Content/>,
                    buttons: {
                        left: [{
                            text: 'Cancel',
                            action: () => {Popup.close()}
                        }],

                        right: [{
                            text: 'Send',
                            action: this.sendMessage({})
                        }]
                    }
                })}>CONTACT US</button>
                <SocialMediaLinks>
                    <StyledATag><img src='./twitter.png' alt='twitter' height='50%' width='50%'/></StyledATag>
                    <StyledATag><img src='./facebook.png' alt='facebook' height='50%' width='50%'/></StyledATag>
                    <StyledATag><img src='./instagram.png' alt='instagram' height='50%' width='50%'/></StyledATag>
                </SocialMediaLinks>
                <button>CHAT</button>
            </StyledFooter>
        )
    }
}