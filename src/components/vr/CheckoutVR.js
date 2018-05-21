import React, {Component}  from 'react';
import aframe from 'aframe';
import 'aframe-look-at-component';
import {Entity, Scene} from 'aframe-react';
import store from './icon/store.jpg';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getUserCart, addCartQuantity, remFromCart, remCartQuantity } from '../ducks/reducer';

import animation from 'aframe-animation-component';
import registerClickDrag from 'aframe-click-drag-component';

import deskMTL from './icon/deskObj/materials.mtl';
import deskOBJ from './icon/deskObj/model.obj';

import cashRegisterMTL from './icon/CashRegister/CashRegister.mtl';
import cashRegisterOBJ from './icon/CashRegister/CashRegister.obj';
import cashRegisterPNG from './icon/CashRegister/CashRegister_BaseColor.png';

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

  render() {
    // const {cart} = this.props;

    // const cartItems = cart.map((item, i) => {
    //     console.log()
    //     return (
    //             <Entity key={i} primitive="a-image" src={"https://s3-us-west-1.amazonaws.com/vr-store-inventory/Mens/Tops/vintage+nike+stripe+t-shirt/sportswear-mens-t-shirt-1mcBRv.jpg"} width='10' height='6'></Entity>
             
    //     )
    // })


    var test = this.state.cart;
    console.log(this.state.cart, 'test')
    return (
      <Scene background="color: #ECECEC">
        
            <a-link 
              href="/#/store" 
              title="Store" 
              image={store}
              borderColor="blue"
              backgroundColor="red"
              position="0 2 10.3"
              geometry="width: 10"
              >
            </a-link>

            <a-link 
              href="/#/cart" 
              title="Check Out" 
              image={store}
              borderColor="blue"
              backgroundColor="red"
              position="-2 2 -8"
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

            <Entity obj-model={`obj: ${deskOBJ}; mtl: ${deskMTL};`} position="0 0 -8" scale="3 3 3" rotation="0 180 0"></Entity>

            {/* <Entity obj-model={`obj: ${cashRegisterOBJ}; mtl: ${cashRegisterMTL}; material: ${cashRegisterPNG}`} position="0 3 -8" scale="0.3 0.3 0.3" rotation="0 180 0"></Entity> */}

            <Entity obj-model={`obj: ${personOBJ}; mtl: ${personMTL};`} position="1.5 -0.5 -10" scale="5 5 5" rotation="0 180 0" events={{click: this.message.bind(this)}}>
                <a-animation begin="click" attribute="rotation"  duration="4000" from="0 180 0" to="0 540 0" direction="alternate-reverse" repeat="1" easing="ease" ></a-animation>
            </Entity>

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

            <a-Camera look-controls-enabled="true" camera>
              <a-Cursor>
              </a-Cursor>
            </a-Camera>


              
            {/* <Entity position="1.5 -0.5 -11">
                {cartItems[0]}
            </Entity> */}
         
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