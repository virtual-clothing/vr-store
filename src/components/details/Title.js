import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  background: yellow;
  margin-bottom: 1rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  margin: 0;

`
export default (props) => (
  <Title>
    {props.title} 
  </Title>
)