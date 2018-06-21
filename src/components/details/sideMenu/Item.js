import React from 'react';
import styled from 'styled-components';
import { getSearchKeyWord } from '../../ducks/reducer';
import { connect } from 'react-redux';

const Container = styled.div`
  padding: 0 1rem 1.5rem 1rem;
  padding-left: 2rem;
  box-sizing: border-box;
  font-size: 1.1rem;
  color: black
  &:hover{
      animation: text-shadow 12s ease infinite;
      font-weight: 450;

      @for $i from 1 through 6 {
        &:nth-of-type(#{$i}) {
          animation-delay: #{$i * 140}ms;
        }
      }
  }
`
// border-bottom: solid black 1px;
// color:  #2EE59D;
// box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);

const Item = props => {
  const getKeyword = (type) => {
    props.getSearchKeyWord(type)
  }

  return (
    <Container onClick={() => getKeyword(props.type)}>
      {props.type} 
    </Container>
  )
}

export default connect(null, {getSearchKeyWord})(Item);