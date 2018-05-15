import React from 'react';
import styled from 'styled-components';
import { getSearchKeyWord } from '../../ducks/reducer';
import { connect } from 'react-redux';

const Container = styled.div`
  border-bottom: solid black 1px;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: border-box;
`
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