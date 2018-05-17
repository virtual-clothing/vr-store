import React, { Component } from 'react';
import styled from 'styled-components';
import MenuList from './details/SideMenu/MenuList';
import MainContainer from './details/MainContainer/MainContainer';
import Title from './details/Title';

const MenComponent = styled.div`
    margin-top: 80px;
`
export default class Men extends Component {

    render() {
        return (
            <MenComponent>
                <Title  title="MEN"/>
                <MenuList category="men"/>
                <MainContainer banner="MEN BANNER" category="Men"/>
            </MenComponent>
        )
    }
}