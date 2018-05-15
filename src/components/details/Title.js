import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  margin-bottom: 1rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: #fafafa;

`
export default (props) => (
  <Title>
    {props.title} 
  </Title>
)