import React, {Component} from 'react';
import styled from 'styled-components';
import DropDownFilter from './DropDownFilter';
import arrowDown from '../icon/arrowDown.svg';
import arrowUp from '../icon/arrowUp.svg';
import { clearSizesColors } from '../../../ducks/reducer';
import { connect } from 'react-redux';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #E0E0E0;
  height: 3rem;
  padding: 0 1rem;
  margin-top: 1rem;

`
const Text = styled.p`
  margin: 0;
`
const Image = styled.img`
  width: 20px;
`
class Filter extends Component {
  constructor() {
    super();
    this.state = {
      toggle: undefined
    }
  }

  render() {
    return (
      <div>
      <FilterContainer onClick={() =>  {
        this.setState({toggle: !this.state.toggle})
        this.props.clearSizesColors()
      }}>
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

export default connect(null, {clearSizesColors})(Filter);