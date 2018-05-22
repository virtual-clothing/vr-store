import React, { Component } from 'react';
import styled from 'styled-components';
import MenuList from './details/sideMenu/MenuList';
import MainContainer from './details/mainContainer/MainContainer';
import Title from './details/Title';
import newArrivals from './details/mainContainer/icon/newArrivals.gif';

const MenComponent = styled.div`
    margin-top: 80px;
`
export default class Men extends Component {
    
    componentWillMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <MenComponent>
                <Title  title="MEN"/>
                <MenuList category="men"/>
                <MainContainer banner={newArrivals} category="Men"/>
            </MenComponent>
        )
    }
}
