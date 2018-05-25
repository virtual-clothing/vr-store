import React, { Component } from 'react';
import styled from 'styled-components';
import MenuList from './details/sideMenu/MenuList';
import MainContainer from './details/mainContainer/MainContainer';
import Title from './details/Title';
import sale from './details/mainContainer/icon/sale.gif';

const WomanComponent = styled.div`
    margin-top: 80px;
`
export default class Women extends Component {

    componentWillMount(){
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <WomanComponent >
                <Title title="WOMEN"/>
                <MenuList category="women"/>
                <MainContainer banner={sale} category="Women"/>
            </WomanComponent>
        )
    }
}