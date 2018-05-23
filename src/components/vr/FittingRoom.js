import React, { Component } from 'react';
import aframe from 'aframe';
import { Entity, Scene } from 'aframe-react';
import { connect } from 'react-redux';
import { getUserCart, getFavorites } from '../ducks/reducer';

import animation from 'aframe-animation-component';
import registerClickDrag from 'aframe-click-drag-component';
import textGeometry from 'aframe-text-geometry-component';

import blackShirt from './icon/redHoody.png';
import shoes from './icon/blackShoes.png';
import store from './icon/store.jpg';
import whiteShirt from './icon/grayHoody.png';
import brownShoes from './icon/brownShoes.png';
import model from './icon/model/men.dae';
import modelWoman from './icon/model/modelWoman.dae';
import {addToCart} from '../ducks/reducer';
registerClickDrag(aframe);

class FittingRoom extends Component {
  constructor() {
    super();
    this.state = {
      color: 'yellow'
    }
  }

  render() {
    let z = 0;
    return (
      <Scene background="color: #ECECEC">
      {
        this.props.favorites.map((item, i) => {
          z += 1
          return (
            <Entity 
            key={i}
            primitive='a-image'           
            click-drag
            src={item.product_img}
            scale="1 1 1"
            position={`-4 1 ${z}`}
            rotation="0 90 0"
            
            // fires each time .map loops through an array
            events={{click: () => this.props.addToCart(item.product_id)}} 
            />
    
          )
        })
      }
      
      {/* Model */}
        <a-assets>
          <a-asset-item
            id="why-male-models"
            src={model}
          >
          </a-asset-item>


        </a-assets>

        <a-entity id="model" position="-3 0 -1">
          <a-animation
            attribute="rotation"
            from="0 -30 0"
            to="0 330 0"
            dur="15000"
            easing="linear"
            repeat="indefinite">
          </a-animation>

          <a-collada-model
            position="-.35 0 .55"
            rotation="0 -20 0"
            scale="1.5 1.5 1.5"
            src="#why-male-models">
          </a-collada-model>
          <a-image src="#shadow2" rotation="-90 0 0" scale="0.5 0.5 0.5"></a-image>
        </a-entity>

        {/* Items */}
        <a-image
          id="shoes"
          click-drag
          src={shoes}
          width="0.5"
          height="0.5"
          position="0 0.6 -4.5" >
        </a-image>

        <a-image
          id="shoes"
          click-drag
          src={brownShoes}
          width="0.5"
          height="0.5"
          position="2 0.7 -4" >
        </a-image>

        <Entity
          id="blackShirt"
          click-drag
          primitive="a-image"
          src={blackShirt}
          geometry={{ width: 1, height: 1 }}
          position="0 2 -4"
        />

        <Entity
          id="grayShirt"
          click-drag
          primitive="a-image"
          src={whiteShirt}
          geometry={{ width: 1, height: 1 }}
          position="2 2 -4"
        />

        <a-entity text-geometry="value: Fitting Room"
          position="-2 4 -5"></a-entity>


        <a-link
          href="/#/checkout"
          title="Check Out"
          image={store}
          borderColor="blue"
          backgroundColor="red"
          position="0 2 4.3"
          geometry="width: 10"
        >
        </a-link>

        <a-link
          href="/#/hollywood"
          title="Hollywood"
          image={store}
          borderColor="blue"
          backgroundColor="red"
          position="2.8 2 3.5"
          rotation="0 25 0"
          geometry="width: 10"
        >
        </a-link>

        <a-entity
          geometry="primitive: cylinder; openEnded: true; radius: 8; height: 9;"
          color="blue"
        >
        </a-entity>

        <a-plane
          position="0 0 0"
          rotation="-90 0 0"
          width="10"
          height="10"
          color="#b1a2a2"
        >
        </a-plane>



        <a-entity light="type: point; intensity: ; distance: 10; decay: 1"
          position="0 4 0"></a-entity>

        <a-entity light="type: spot; angle: 45"></a-entity>


        <a-Camera look-controls-enabled="true">
          <a-Cursor>
          </a-Cursor>
        </a-Camera>
      </Scene>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}
export default connect(mapStateToProps, {addToCart})(FittingRoom);


