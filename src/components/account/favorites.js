import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavorites, addToFavorites, remFromFavorites } from '../ducks/reducer';
import FavItem from './favItem';
import styled from 'styled-components';


const FavoritesDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    padding: 10px;
`

class Favorites extends Component {
    constructor() {
        super();

        this.state = {
            favorites: [
                {
                    img: '',
                    price: 30,
                    qty: 3,
                }
            ]
        }
    }


    componentDidMount() {
        this.props.getFavorites();
        console.log(this.props.favorites)
    }



    render() {

        const favItems = this.props.favorites.map((item, index) => {
            return (
                <FavItem item={item} key={index} addToFavorites={this.props.addToFavorites} remFromFavorites={this.props.remFromFavorites} />
            )
        })


        return (
            <FavoritesDiv>
                {favItems}
            </FavoritesDiv>
        )
    }
}

function mapStateToProps(state) {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, { getFavorites, addToFavorites, remFromFavorites })(Favorites)