import React from 'react';
import styled from 'styled-components';

const TopBanner = styled.div`
  background: aqua;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
`

const Text = styled.h2`

`
export default (props) => (
  <TopBanner>
    <Text>
      {props.banner}
    </Text>
  </TopBanner>
)    
