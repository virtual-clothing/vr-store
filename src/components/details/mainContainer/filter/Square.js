import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: solid black 0.5px;
  margin: 0px 1rem 1rem 0px;

  background: #fff;
  border-radius: 50%;
  bottom: 1rem;
  right: 1rem;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover{
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
  }
  
`


const Text = styled.p`

`

const Wrapper = props => {
  return (
    <div>
    {
      props.value 
      ?
      <Container onClick={() => props.toggle()} style={{backgroundColor: props.attrName, padding: '5px', boxSizing: 'borderBox'}}>
        <Text> {props.attrName} </Text>
      </Container>
      :
      <Container onClick={() => props.toggle()} style={{backgroundColor: props.attrName}}>
        <Text> {props.attrName} </Text>
      </Container>
    }
    </div>
  )
}

export default (props) => {
  return (
    <Wrapper attrName={props.attrName} value={props.value} 
    toggle={() => props.toggle(props.attrName, props.value)}/>
  )
}