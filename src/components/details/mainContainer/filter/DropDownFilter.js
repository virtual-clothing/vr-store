import React, {Component} from 'react';
import styled from 'styled-components';
import SelectSize from './SelectSize';
import SelectColor from './SelectColor';
import { connect } from 'react-redux';

const DropDown = styled.div`
  padding: 1rem 0 0 1rem;
`

const Container = styled.div`
  box-sizing: border-box;
`
const Title = styled.h3`

`


export default class DropDownFilter extends Component {

  render() {
    return (
      <DropDown>
        <Container >
          <Title> Size </Title>
          <SelectSize />
        </Container>

        <Container>
            <Title> Color </Title> 
            <SelectColor />
        </Container>
      </DropDown>
    )
  }
}

