import React from 'react';
import styled from 'styled-components';


const Title = styled.div`
@import url('https://fonts.googleapis.com/css?family=Anton');
  display: flex;
  margin-bottom: 1rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: #fafafa;
  font-weight: 700;
  font-size: 1.3rem;
`

const h3 = styled.h3`
  color: white;
  font-family: Anton, sans-serif;
  size: 8em;
`

const Span = styled.span`
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);

`
export default (props) => (
  <Title>
  <h3>
  <Span>
  {props.title} 

  </Span>
  </h3>
  </Title>
)