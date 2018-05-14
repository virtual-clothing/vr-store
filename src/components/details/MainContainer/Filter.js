import React, {Component} from 'react';
import styled from 'styled-components';
import DropDownFilter from './DropDownFilter';
import arrowDown from './icon/arrowDown.svg';
import arrowUp from './icon/arrowUp.svg';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: red;
  height: 3rem;
  padding: 0 1rem;
`
const Text = styled.p`
  margin: 0;
`

const Image = styled.img`
  width: 20px;
`

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      toggle: undefined
    }
  }

  render() {
    return (
      <div>
      <FilterContainer onClick={() => this.setState({toggle: !this.state.toggle})}>
        <Text> Filter </Text>
        {
          !!this.state.toggle
          ?
          <Image src={arrowUp} alt=""  />
          :
          <Image src={arrowDown} alt="" />
        }
      </FilterContainer>
      {
        !!this.state.toggle
          ?
          <DropDownFilter />
          :
          null
      }
      </div>
    )
  }
}
