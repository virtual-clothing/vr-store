import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Image from './Image';
import {remFromFavorites, addToFavorites} from '../../ducks/reducer';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #fafafa;
  padding: 0rem 1rem 1rem 1rem;

  @media(max-width: 450px) {
    display: block;
  }
`
class ImgContainer extends Component {

  
  render() {
    let images = this.props.allItems.map(item => {
      // THE CASE THAT USER NOT SELECTED SIZE & COLOR
      if (!this.props.sizes[0] && !this.props.colors[0]) {
        // Filter all items buy gender
        if (this.props.searchKeyWord === 'View All') {
          if (item.gender === this.props.category && item.size === 'm') {
            return (
              <Image back={item.img_back} key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price} addToFavorites={this.props.addToFavorites} remFromFavorites={this.props.remFromFavorites}/>
            )
          } 
        } else {
          // Filter all items by type
          if (this.props.searchKeyWord) {
            if (item.gender === this.props.category && this.props.searchKeyWord === item.type && item.size === 'm') {
              return (
                <Image back={item.img_back} key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price} addToFavorites={this.props.addToFavorites} remFromFavorites={this.props.remFromFavorites}/>
              )
            }          
          // When user access to men || women || kids
          } else if (item.gender === this.props.category && item.size === 'm') {
            return (
              <Image back={item.img_back} key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price} addToFavorites={this.props.addToFavorites} remFromFavorites={this.props.remFromFavorites}/>
            )
          } 
        }

         // THE CASE THAT USER SELECTED SIZE & COLOR
      } else if (this.props.sizes[0] && this.props.colors[0]) {
        // Filter all items buy gender
        if (this.props.searchKeyWord === 'View All') {
          
          let colors = this.props.colors;
          for (let i = 0; i < colors.length; i++) {
            if (colors[i] === item.color) {
              if (item.gender === this.props.category && item.size === this.props.sizes[this.props.sizes.length - 1]) {
                return (
                  <Image back={item.img_back} key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price} addToFavorites={this.props.addToFavorites} remFromFavorites={this.props.remFromFavorites}/>
                )
              } 
            }
          }
        } else {
          // Filter all items by type
          if (this.props.searchKeyWord) {
            let colors = this.props.colors;

            for (let i = 0; i < colors.length; i++) {
              if (colors[i] === item.color) {
                if (this.props.searchKeyWord === item.type && item.gender === this.props.category && item.size === this.props.sizes[this.props.sizes.length - 1]) {
                  return (
                    <Image back={item.img_back} key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price} addToFavorites={this.props.addToFavorites} remFromFavorites={this.props.remFromFavorites}/>
                  )
                } 
              }
            }
         
          // When user access to men || women || kids
          } else if (item.gender === this.props.category && item.size === this.props.sizes[this.props.sizes.length - 1]) {
            let colors = this.props.colors;
            for (let i = 0; i < colors.length; i++) {
              if (colors[i] === item.color) {
                return (
                  <Image back={item.img_back} key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price} addToFavorites={this.props.addToFavorites} remFromFavorites={this.props.remFromFavorites}/>
                )
              }
            }
          } 
        }

          // THE CASE THAT USER SELECTED COLOR
      } else if (this.props.colors[0] && item.size === 'm') {
        let colors = this.props.colors;
        for (var i = 0; i < colors.length; i++) {
          if (colors[i] === item.color) {
            if (this.props.searchKeyWord === 'View All') {
              if (item.gender === this.props.category) {
                return (
                  <Image back={item.img_back} key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price} addToFavorites={this.props.addToFavorites} remFromFavorites={this.props.remFromFavorites}/>
                )
              } 
            } else {
              // Filter all items by type
              if (this.props.searchKeyWord) {
                if (this.props.searchKeyWord === item.type && item.gender === this.props.category) {
                  return (
                    <Image back={item.img_back} key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price} addToFavorites={this.props.addToFavorites} remFromFavorites={this.props.remFromFavorites}/>
                  )
                }          
              // When user access to men || women || kids
              } else if (item.gender === this.props.category) {
                return (
                  <Image back={item.img_back} key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price} addToFavorites={this.props.addToFavorites} remFromFavorites={this.props.remFromFavorites}/>
                )
              } 
            }
          }
        }

        // THE CASE THAT USER SELECTD SIZE
      } else if (this.props.sizes[0]) {
        if (this.props.searchKeyWord === 'View All') {
          if (item.gender === this.props.category && item.size === this.props.sizes[this.props.sizes.length - 1]) {
            return (
              <Image back={item.img_back} key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price} addToFavorites={this.props.addToFavorites} remFromFavorites={this.props.remFromFavorites}/>
            )
          } 
        } else {
          // Filter all items by type
          if (this.props.searchKeyWord) {
            if (this.props.searchKeyWord === item.type && item.gender === this.props.category && item.size === this.props.sizes[this.props.sizes.length - 1]) {
              return (
                <Image back={item.img_back} key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price} addToFavorites={this.props.addToFavorites} remFromFavorites={this.props.remFromFavorites}/>
              )
            }          
          // When user access to men || women || kids
          } else if (item.gender === this.props.category && item.size === this.props.sizes[this.props.sizes.length - 1]) {
            return (
              <Image back={item.img_back} key={item.id} img={item.product_img} id={item.id} title={item.title} price={item.price} addToFavorites={this.props.addToFavorites} remFromFavorites={this.props.remFromFavorites}/>
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
export default connect(mapStateToProps, {addToFavorites, remFromFavorites})(ImgContainer);



