import React from 'react';
import styled from 'styled-components';

const TopBanner = styled.div`
  margin-top: 0;
  background-size: 100% auto;
`

const Image = styled.img`
 height: 100%;
 width: 100%;
 object-fit: contain
`

const Text = styled.h2`

`
export default (props) => (
  <TopBanner>
    <Image src={props.banner} alt=""/>
  </TopBanner>
)    
