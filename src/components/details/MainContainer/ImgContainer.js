import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Image from './Image';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: purple;
  padding: 1rem;

  @media(max-width: 450px) {
    display: block;
  }
`

class ImgContainer extends Component {

  
  render() {
    let images = this.props.allItems.map(item => {

      // Filter all items buy gender
      if (this.props.searchKeyWord === 'View All') {
        if (item.gender === this.props.category) {
          return (
            <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
          )
        } 
      } else {
        // Filter all items by type
        if (this.props.searchKeyWord) {
          if (item.gender === this.props.category && this.props.searchKeyWord === item.category) {
            return (
              <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
            )
          }
        } else if (item.gender === this.props.category) {
          // When user access to men || women || kids
          return (
            <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
          )
        } 
      }
    })
    
    return (
      <Container>
        {images}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allItems: state.allItems,
    searchKeyWord: state.searchKeyWord
  }
}
export default connect(mapStateToProps)(ImgContainer);