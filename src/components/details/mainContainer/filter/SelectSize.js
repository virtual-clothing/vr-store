import React, { Component } from 'react';
import { log } from 'util';
import styled from 'styled-components';
import Square from './Square';
import { connect } from 'react-redux';
import { getSizes } from '../../../ducks/reducer';

const Container = styled.div`
  display: flex;
  justify-content: begin;
  box-sizing: border-box;
`

class SelectSize extends Component {
  constructor() {
    super();
    this.state = {
      xs: false,
      s: false,
      m: false,
      l: false
    }
  }

  toggle(attrName, value) {
    this.setState({
      [attrName]: !value
    })
  }

  render() {
    const sizes = Object.entries(this.state);
    const listSizes = sizes.map(([key, value]) =>      
      <Square key={key} attrName={key} value={value} 
      toggle={(attrName, value) => this.toggle(attrName, value)} />
    )

    let chosenSizes = [];
    for(var key in this.state) {
      let value = this.state[key];
      if (value === true) {
        chosenSizes.push(key);
      }
    }
    this.props.getSizes(chosenSizes);

    return (
      <Container>
        {listSizes}
      </Container>
    )
  }
}

export default connect(null, {getSizes})(SelectSize);