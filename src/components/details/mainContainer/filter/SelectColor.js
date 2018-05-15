import React, { Component } from 'react';
import styled from 'styled-components';
import Square from './Square';
import { connect } from 'react-redux';
import { getColors } from '../../../ducks/reducer';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: begin;
  box-sizing: border-box;
`

class SelectColor extends Component {
  constructor() {
    super();
    this.state = {
      red: false,
       pink: false, 
       orange: false,
       yellow: false, 
       blue: false, 
       green: false, 
       black: false, 
       gray: false, 
       beige: false, 
       white: false
    }
  }

  toggle(attrName, value) {
    this.setState({
      [attrName]: !value
    })
  }

  render() {
    const colors = Object.entries(this.state);
    const listColors = colors.map(([key, value]) => 
      <Square key={key} attrName={key} value={value} 
        toggle={(attrName, value) => this.toggle(attrName, value)} 
      />
    ) 

    let chosenColors = [];
    for(var key in this.state) {
      let value = this.state[key];
      if (value === true) {
        chosenColors.push(key);
      }
    }
    this.props.getColors(chosenColors);

    return (
      <Container>
        {listColors} 
      </Container>
    )
  }
}

export default connect(null, {getColors})(SelectColor);