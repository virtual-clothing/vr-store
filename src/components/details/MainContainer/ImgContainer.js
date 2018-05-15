import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Image from './Image';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #fafafa;
  padding: 1rem;

  @media(max-width: 450px) {
    display: block;
  }
`
class ImgContainer extends Component {
  
  render() {
    console.log(this.props.sizes[this.props.sizes.length - 1], this.props.colors[this.props.colors.length - 1])
    let images = this.props.allItems.map(item => {
      // Check user selected any size or color
      if (!this.props.sizes[0] && !this.props.colors[0]) {
        // Filter all items buy gender
        if (this.props.searchKeyWord === 'View All') {
          if (item.gender === this.props.category && item.size === 'm') {
            return (
              <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
            )
          } 
        } else {
          // Filter all items by type
          if (this.props.searchKeyWord) {
            if (item.gender === this.props.category && this.props.searchKeyWord === item.category && item.size === 'm') {
              return (
                <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
              )
            }          
          // When user access to men || women || kids
          } else if (item.gender === this.props.category && item.size === 'm') {
            return (
              <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
            )
          } 
        }
        // the case that user selected color and size________
      } else if (this.props.sizes[0] && this.props.colors[0]) {
          // loop through arr
            // which sizes user chose
              // when I get the sizes , I need to pull down all the items has that size
                // after needs to loop through colors and also needs to pull down the colors
        // Filter all items buy gender
        if (this.props.searchKeyWord === 'View All') {
          if (item.gender === this.props.category && item.size === this.props.sizes[this.props.sizes.length - 1] && item.color === this.props.colors[this.props.colors.length - 1]) {
            return (
              <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
            )
          } 
        } else {
          // Filter all items by type
          if (this.props.searchKeyWord) {
            if (item.gender === this.props.category && item.size === this.props.sizes[this.props.sizes.length - 1] && item.color === this.props.colors[this.props.colors.length - 1]) {
              return (
                <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
              )
            }          
          // When user access to men || women || kids
          } else if (item.gender === this.props.category && item.size === this.props.sizes[this.props.sizes.length - 1] && item.color === this.props.colors[this.props.colors.length - 1]) {
            return (
              <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
            )
          } 
        }
          // THE CASE THAT USER SELECTED COLOR
      } else if (this.props.colors[0] && item.size === 'm') {

        if (this.props.searchKeyWord === 'View All') {
          if (item.gender === this.props.category && item.color === this.props.colors[this.props.colors.length - 1]) {
            return (
              <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
            )
          } 
        } else {
          // Filter all items by type
          if (this.props.searchKeyWord) {
            if (item.gender === this.props.category && item.color === this.props.colors[this.props.colors.length - 1]) {
              return (
                <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
              )
            }          
          // When user access to men || women || kids
          } else if (item.gender === this.props.category && item.color === this.props.colors[this.props.colors.length - 1]) {
            return (
              <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
            )
          } 
        }
        // THE CASE THAT USER SELECTD SIZE
      } else if (this.props.sizes[0]) {

        if (this.props.searchKeyWord === 'View All') {
          if (item.gender === this.props.category && item.size === this.props.sizes[this.props.sizes.length - 1]) {
            return (
              <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
            )
          } 
        } else {
          // Filter all items by type
          if (this.props.searchKeyWord) {
            if (item.gender === this.props.category && item.size === this.props.sizes[this.props.sizes.length - 1]) {
              return (
                <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
              )
            }          
          // When user access to men || women || kids
          } else if (item.gender === this.props.category && item.size === this.props.sizes[this.props.sizes.length - 1]) {
            return (
              <Image key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price}/>
            )
          } 
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
    searchKeyWord: state.searchKeyWord,
    sizes: state.sizes,
    colors: state.colors
  }
}
export default connect(mapStateToProps)(ImgContainer);



