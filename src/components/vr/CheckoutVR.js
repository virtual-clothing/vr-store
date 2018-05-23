import React, {Component}  from 'react';
import aframe from 'aframe';
import 'aframe-look-at-component';
import {Entity, Scene} from 'aframe-react';
import store from './icon/store.jpg';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getUserCart, addCartQuantity, remFromCart, remCartQuantity } from '../ducks/reducer';
import {Link } from "react-router-dom";

import animation from 'aframe-animation-component';
import registerClickDrag from 'aframe-click-drag-component';

import deskMTL from './icon/deskObj/materials.mtl';
import deskOBJ from './icon/deskObj/model.obj';

import tvMTL from './icon/TV/TV_01.mtl';
import tvOBJ from './icon/TV/TV_01.obj';
import Avengers from './icon/Avengers.mp4';

import tvStandMTL from './icon/tvStand/materials.mtl';
import tvStandOBJ from './icon/tvStand/model.obj';

import computerMTL from './icon/computerModel/model.mtl';
import computerOBJ from './icon/computerModel/model.obj';
import cartIcon from '../media/cart.svg';

import personMTL from './icon/person/materials.mtl';
import personOBJ from './icon/person/model.obj';
import elevator from './sound/Elevator-music.mp3';
import thoughtBubble from './icon/thoughtBubble.png';

const CartContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
`;

class CheckoutVR extends Component {
  constructor() {
    super();

    this.state = {
      cart: 0,
      message: false
    }
  }

  componentWillMount() {
    this.props.getUserCart();
    }

    message(){
        this.setState({message: true}, () => setTimeout(() => {
            this.setState({message: false})
        }, 2000))
    }

    cartLink(){
      this.props.history.push('/cart')
    }

  render() {


    var test = this.state.cart;
    console.log(this.state.cart, 'test')
    return (
      <Scene background="color: #ECECEC">
        
            <a-link 
              href="/#/fittingroom" 
              title="Fitting Room" 
              image={store}
              borderColor="blue"
              backgroundColor="red"
              position="0 2 10.3"
              geometry="width: 10"
              >
            </a-link>

            <a-entity 
              geometry="primitive: cylinder; openEnded: true; radius: 20; height: 8" 
              material="side: double"
            >
            </a-entity>

            <a-text value={`You have ${this.props.cart.length} items in your cart`} position="-2 4 -8" width="15px" scale="1 1 1">
                <a-animation attribute="scale" duration="3000" from="0.01 0.01 0.01" to="1 1 1" direction="alternate-reverse" easing="ease" repeat="1"></a-animation>
                <a-animation attribute="position" duration="4000" from="1 1.5 -6" to="-4 4.5 -6" direction="alternate-reverse" repeat="1" easing="ease">
                </a-animation>

                <a-animation attribute="position"  duration="4000" from="-4 4 -6" to="-4 4.5 -6" direction="alternate-reverse" repeat="indefinite" easing="ease" ></a-animation>
            </a-text>

                {/* desk obj */}
            <Entity obj-model={`obj: ${deskOBJ}; mtl: ${deskMTL};`} position="0 0 -8" scale="3 3 3" rotation="0 180 0"></Entity>

              {/* computer obj */}
            <Entity obj-model={`obj: ${computerOBJ}; mtl: ${computerMTL};`} position="-1.4 0.35 -7.2" scale="4 4 4" rotation="5 200 0" events={{click: this.cartLink.bind(this)}}></Entity>

            <Entity primitive='a-image' src={cartIcon} position='-1.5 1.75 -7.62' rotation="-8 24 0" scale="0.8 0.6 0.8"/>

                {/* person obj */}
            <Entity obj-model={`obj: ${personOBJ}; mtl: ${personMTL};`} position="1.5 -0.5 -10" scale="5 5 5" rotation="0 180 0" events={{click: this.message.bind(this)}}>
                <a-animation begin="click" attribute="rotation"  duration="4000" from="0 180 0" to="0 540 0" direction="alternate-reverse" repeat="1" easing="ease" ></a-animation>
            </Entity>

            <a-assets>
                <video muted id="Avengers" autoplay='true' loop="true" src={Avengers}/> 
            </a-assets>

                {/* tv */}
            <Entity obj-model={`obj: ${tvOBJ}; mtl: ${tvMTL};`} position="-9 -0.5 -4.5" scale=".0095 .0095 .0095" rotation="-90 180 65"></Entity>
                {/* tv stand */}
            <Entity obj-model={`obj: ${tvStandOBJ}; mtl: ${tvStandMTL};`} position="-9 -1 -4.5" scale="2 2 2" rotation="0 65 0"></Entity>
                  {/* avengers video */}
            <a-video muted src="#Avengers" position="-8.9 1 -4.4" rotation="0 65 0" scale="3.2 1.8 2"></a-video>

              {/* tv 2 */}
            <Entity obj-model={`obj: ${tvOBJ}; mtl: ${tvMTL};`} position="9 -0.5 -4.5" scale=".0095 .0095 .0095" rotation="-90 180 -65"></Entity>
                {/* tv stand */}
            <Entity obj-model={`obj: ${tvStandOBJ}; mtl: ${tvStandMTL};`} position="9 -1 -4.5" scale="2 2 2" rotation="0 -65 0"></Entity>
                  {/* avengers video */}
            <a-video muted src="#Avengers" position="8.9 1 -4.4" rotation="0 -65 0" scale="3.2 1.8 2"></a-video>


            <Entity 
            id="thoughtBubble"  
            primitive="a-image" 
            src={thoughtBubble} 
            geometry={{width: 1, height: 1}}
            position="0.5 4 -10"
            scale="2 2 2"
            visible={this.state.message}
            />
            <a-text value="Ouch! Guy!" position="-0.1 4 -9.7" visible={this.state.message} color="black" scale="1.2 1.2 1.2"></a-text>

             <a-sound src={elevator} autoplay="true" position="0 2 5"></a-sound>

            <a-Camera look-controls-enabled="true" camera position="0 1.7 5">
              <a-Cursor>
              </a-Cursor>
            </a-Camera>

      </Scene>
    );
  }
}

function mapStateToProps(state) {
    return {
        cart: state.userCart
    }
}

export default connect(mapStateToProps, { getUserCart, addCartQuantity, remFromCart, remCartQuantity })(CheckoutVR)