import React, { Component } from 'react';
import styled from 'styled-components';
import MenuList from './details/sideMenu/MenuList';
import MainContainer from './details/mainContainer/MainContainer';
import Title from './details/Title';

const KidsComponent = styled.div`
    margin-top: 80px;
`
export default class Kids extends Component {

    render() {
        return (
            <KidsComponent>
                <Title title="KIDS"/>
                <MenuList category="kids"/>
                <MainContainer banner="KIDS BANNER" category="Kids"/>
            </KidsComponent>
        )
    }
}