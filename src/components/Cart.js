import React, { Component } from 'react';
import Checkout from './stripe/Checkout'
export default class Cart extends Component {

    render() {
        return (
            <div>
                <Checkout/>
                CART
            </div>
        )
    }
}