import React, {Component} from 'react'
import { connect } from 'react-redux';
import { getOrders, createUserOrder } from '../ducks/reducer';
import styled from 'styled-components';

const OrdersDiv = styled.div`
    display: flex;
    flex-wrap: auto;
    width: 100%;
    height: auto;
    padding: 10px;
    `


class Orders extends Component{
    constructor(){
        super()

    }
    render() {
        return(
            <OrdersDiv>
            <div>
                Orders
            </div>

            </OrdersDiv>
        )
    }
}


