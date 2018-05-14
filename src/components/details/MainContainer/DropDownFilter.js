import React, {Component} from 'react';
import styled from 'styled-components';

const DropDown = styled.div`
  height: 10rem;
  background: pink;
  padding: 1rem;
`
export default class DropDownFilter extends Component {
  render() {
    return (
      <DropDown>
        SIZE 
      </DropDown>
    )
  }
}