import React, { Component } from 'react';
import styled from 'styled-components';

export default class CartItem extends Component {
    constructor() {
        super();
    }

    removeItem(id) {
        if (this.props.item.qty > 1) {
            this.props.remCartQtyFn(id)
            return
        } else {

            this.props.removeFn(id)
        }
    }

    render() {
        return (
            <Item>

                <ImageWrapper src={this.props.item.product_img} height='100%' width='100%' />
                <DescriptionDiv>
                    <p>{this.props.item.title}</p>
                    <p>Price: ${this.props.item.price}</p>
                    <QuantityDiv>
                        <Circle onClick={() => this.removeItem(this.props.item.product_id)}> <img src='/minus.png' alt="" style={{ width: '1rem' }} /> </Circle>
                        <p>QTY: {this.props.item.qty}</p>
                        <Circle onClick={() => this.props.addCartQtyFn(this.props.item.product_id)}> <img src='/plus.png' alt="" style={{ width: '1rem' }} /> </Circle>
                    </QuantityDiv>
                    <Circle onClick={() => this.props.removeFn(this.props.item.product_id)}><img src='./delete.png' alt='' style={{ width: '1rem' }} /></Circle>
                    <p>Total: ${this.props.item.qty * this.props.item.price}</p>
                </DescriptionDiv>

            </Item>
        )
    }
}
const ImageWrapper = props => {
    return (
        <div style={{ position: "relative" }}>
            <Image src={props.src} />
        </div>
    )
};

const Image = styled.img`
  max-width: 100%;
  height: auto;
  background: contain;
`

const Circle = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #fff;
  border-radius: 50%;
  bottom: 1rem;
  margin: 8px;
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


const Item = styled.div`
    width: 100%;
    border-top: 2px solid black;
    padding: 10px;
    display: flex;
`

const ImageDiv = styled.div`
    height: 100%;
    width: 20%;
    margin-right: 10px;
`
const DescriptionDiv = styled.div`
    margin-left: 10px;
    width: 50%;
    display: flex;
    flex-direction: column;
`

const QuantityDiv = styled.div`
    
    display: flex;
`
