import React from 'react';
import styled from 'styled-components';
import TopBanner from './TopBanner';
import Filter from './Filter';
import ImgContainer from './ImgContainer';

const MainContainer = styled.div`
  background: green;
  height: 80vh;
  width: 75%;
  box-sizing: border-box;
  float: right;

  @media(max-width: 450px) {
    float: none;
    width: 100%;
    margin-top: 1rem;
  }
`
const SubContainer = styled.div`
  background: #fafafa;
  padding: 1rem;
`
export default (props) => (
  <MainContainer>
    <TopBanner banner={props.banner}/>
    <SubContainer>
      <Filter />
    </SubContainer>
    <ImgContainer category={props.category}/>
  </MainContainer>
)