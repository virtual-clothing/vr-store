import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import blackHeart from '../details/mainContainer/icon/blackHeart.svg';

const Container = styled.div`
  width: 46%;
  margin: 1rem 1rem 1rem;
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

const Image = styled.img`
  max-width: 100%;
  height: auto;
  background: contain;
`
// position: relative;

const ImageWrapper = props => {
    return (
        <div style={{ position: "relative" }}>
            <Image src={props.src} />
        </div>
    )
};

const Text = styled.p`
  margin: 3px;
  text-decoration: none;
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

export default class FavItem extends Component {
    constructor() {
        super();
        this.state = {
            addedToFavorite: true
        }
    }


    render() {
        return (
            <Container>
                <Link to={`/item/${this.props.item.product_id}`} style={{ textDecoration: 'none' }}>
                    <ImageWrapper src={this.props.item.product_img} />
                    <Wrapper title={this.props.item.title} price={this.props.item.price} />
                </Link>
                <Circle onClick={() => this.props.remFromFavorites(this.props.item.product_id)}> <img src='/delete.png' alt="" style={{ width: '1rem' }}/> </Circle>
            </Container>
        )
    }
}