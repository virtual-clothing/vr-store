import React, { Component } from 'react';
import styled from 'styled-components';

export default class CartItem extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Item>
                <ImageDiv>
                    <img src={this.props.item.product_img} height='100%' width='100%'/>
                </ImageDiv>
                <DescriptionDiv>
                    <p>{this.props.item.title}</p>
                    <p>SKU</p>
                    <p>Size: {this.props.item.size}</p>
                </DescriptionDiv>
                <PriceDiv>
                    <p>${this.props.item.price}</p>
                </PriceDiv>
                <QuantityDiv>
                    <p>QTY: {this.props.item.quantity}</p>
                    <button onClick={() => this.props.removeFn(this.props.item.product_id)}>remove</button>
                </QuantityDiv>
                <TotalDiv>
                    <p>${this.props.item.quantity * this.props.item.price}</p>
                </TotalDiv>
            </Item>
        )
    }
}

const Item = styled.div`
    width: 100%;
    height: 25vh;
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
    height: 100%;
    width: 35%;
    margin-right: 10px;
`
const PriceDiv = styled.div`
    height: 100%;
    width: 10%;
    margin-right: 10px;

`
const QuantityDiv = styled.div`
    height: 100%;
    width: 15%;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`
const TotalDiv = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: flex-end;
`