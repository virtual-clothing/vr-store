import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Favorites from './favorites';


export default class Account extends Component {

    render() {
        return (
            <div>
                <Favorites/>
            </div>
        )
    }
}