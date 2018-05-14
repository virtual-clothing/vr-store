import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heart from './icon/heart.svg';
import blackHeart from './icon/blackHeart.svg';

const Container = styled.div`
  width: 49%;
  margin: 1rem 0;
  background: #fafafa;
  position: relative;

  @media(max-width: 450px) {
    width: 100%;
  }
`
const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover{
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
  }
`

const CircleWrapper = props => (
  <div>
    {
      !!props.addedToFavorite
      ?
      <Circle onClick={() => props.toggle()} style={{background: '#e54304'}}> 
        <img src={blackHeart}  alt="" style={{width:'1rem', fill:"white"}}/> 
      </Circle>
      :
      <Circle onClick={() => props.toggle()}> 
        <img src={blackHeart}  alt="" style={{width:'1rem'}}/> 
      </Circle>
    } 
  </div>
)

const Image = styled.img`
  max-width: 100%;
  height: auto;
  background: contain;
`
// position: relative;

const ImageWrapper = props => {
  return (
    <div style={{position: "relative"}}>
      <Image src={props.src}  />
    </div>
  )
}

const Text = styled.p`
  margin: 3px;
  text-decoration: none
`

const Details = styled.div`
  padding: 0.5rem;
`
const Wrapper = props => (
  <div>
    <Details>
      <Text> {props.title} </Text>
      <Text> ${props.price} </Text>
    </Details>
  </div>
)

export default class Images extends Component {
  constructor() {
    super();
    this.state = {
      addedToFavorite: undefined
    }
  }

  toggle() {
    this.setState({addedToFavorite: !this.state.addedToFavorite})
  }
  
  render() {
    return (
      <Container>
        <Link to={`/item/${this.props.id}`} style={{ textDecoration: 'none' }}>
          <ImageWrapper src={this.props.img} />
          <Wrapper title={this.props.title} price={this.props.price}/>
        </Link>
        <CircleWrapper toggle={() => this.toggle()} addedToFavorite={this.state.addedToFavorite}/>
      </Container>
    )
  }
}