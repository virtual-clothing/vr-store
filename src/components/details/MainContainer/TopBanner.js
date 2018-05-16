import React from 'react';
import styled from 'styled-components';

const TopBanner = styled.div`
  background: aqua;
  height: 10rem;
  margin-top: 0;
  background-size: cover;
`

const Image = styled.img`
  height: 10rem;
`

const Text = styled.h2`

`
export default (props) => (
  <TopBanner>
    banner
    <Image src={props.banner} alt=""/>
  </TopBanner>
)    
