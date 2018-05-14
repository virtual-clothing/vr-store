import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavorites } from '../ducks/reducer';
import FavItem from './favItem';

class Favorites extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getFavorites();
    }

    

    render() {

        const favItems = this.props.favorites.map((item, index) => {
            return (
                <FavItem item={item}/>
              )
        })


        return (
            <div>
                {favItems}
            </div>
          )
    }
}

function mapStateToProps(state) {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, {getFavorites})(Favorites)