import React, { Component } from 'react';
import styled from 'styled-components';
import MenuList from './details/sideMenu/MenuList';
import MainContainer from './details/mainContainer/MainContainer';
import Title from './details/Title';
import kidsBanner from './details/mainContainer/icon/kidsBanner.gif';

const KidsComponent = styled.div`
    margin-top: 80px;
`
export default class Kids extends Component {

    componentWillMount(){
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <KidsComponent>
                <Title title="KIDS"/>
                <MenuList category="kids"/>
                <MainContainer banner={kidsBanner} category="Kids"/>
            </KidsComponent>
        )
    }
}