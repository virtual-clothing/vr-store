import React, { Component } from 'react';
import Checkout from './stripe/Checkout'
import CartItem from './CartItem';
import styled from 'styled-components';
import { connect } from 'react-redux';


class Cart extends Component {
    constructor() {
        super();

        this.state = {
            cart: [
                {
                    name: 'shirt',
                    url: 'https://underarmour.scene7.com/is/image/Underarmour/uav6_product_gridbkgrd_072414?scl=1&fmt=jpg&qlt=85&wid=150&hei=200&fit=crop&cache=on,off&layer=1&src=is{Underarmour%2FV5-1300002-100_HTF?scl=1&fmt=png-alpha&wid=150&hei=200&size=320,426&extend=0,128,0,0&resMode=sharp2}',
                    price: 29.99,
                    quantity: 5,
                    size: 'xl',
                    color: 'white'
                },

                {
                    name: 'shorts',
                    url: 'https://underarmour.scene7.com/is/image/Underarmour/uav6_product_gridbkgrd_072414?scl=1&fmt=jpg&qlt=85&wid=150&hei=200&fit=crop&cache=on,off&layer=1&src=is{Underarmour%2FPS1299998-008_HF?scl=1&fmt=png-alpha&wid=150&hei=200&size=135,180&resMode=sharp2}',
                    price: 19.99,
                    quantity: 2,
                    size: 's',
                    color: 'black'
                }

            ]
        }
    }

    subTotal() {
        var subTotal = 0;
        this.state.cart.map((item, index) => {
            subTotal += item.price * item.quantity
        })

        return subTotal;
    }

    tax() {
        var subTotal = this.subTotal()
        return subTotal * .06;
    }

    total() {
        var total = this.subTotal() + this.tax()
        return parseFloat(Math.round(total * 100) / 100).toFixed(2)
    }

    render() {

        const cartItems = this.state.cart.map((item, index) => {
            return (
                <CartItem
                    key={index}
                    item={item}
                />
            )
        })

        return (
            <CartWindow>
                <CartItems>
                    {cartItems}
                </CartItems>
                <CheckoutDiv>
                    <div>
                        <CostAmount>
                            <p>Subtotal:</p>
                            <p>${parseFloat(Math.round(this.subTotal() * 100) / 100).toFixed(2)}</p>
                        </CostAmount>
                        <CostAmount>
                            <p>Tax:</p>
                            <p>${parseFloat(Math.round(this.tax() * 100) / 100).toFixed(2)}</p>
                        </CostAmount>
                        <CostAmount>
                            <p>Total:</p>
                            <p>${this.total()}</p>
                        </CostAmount>
                    </div>
                    <Checkout total={this.total()} />
                </CheckoutDiv>
            </CartWindow>
        )
    }
}

const CartWindow = styled.div`
    display: flex;
    height: auto;
    padding: 80px;
`
const CartItems = styled.div`
    height: auto;
    margin-right: 40px;
    width: 60%;
`
const CheckoutDiv = styled.div`
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: space-between;
    padding: 10px;
    width: 30%;
`
const CostAmount = styled.div`
    display: flex;
    justify-content: space-between;
`

function mapStateToProps(state) {
    return {
        cart: state.userCart
    }
}

export default connect(mapStateToProps)(Cart)