import React from 'react';
import styled from 'styled-components';
import TopBanner from './TopBanner';
import Filter from './filter/Filter';
import ImgContainer from './ImgContainer';
// import menBanner from './icon/menBanner.jpg';
// import kidsBanner from './icon/kidsBanner.gif';

const MainContainer = styled.div`
  width: 85%;
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
  padding:  0 1rem 1rem 1rem;
`
export default (props) => (
  <MainContainer>
    <SubContainer>
      <TopBanner 
        banner={props.banner} 
      />
      <Filter />
    </SubContainer>
    <ImgContainer category={props.category}/>
  </MainContainer>
)