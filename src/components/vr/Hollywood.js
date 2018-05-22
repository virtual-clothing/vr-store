import React, {Component}  from 'react';
import aframe from 'aframe';
import {Entity, Scene} from 'aframe-react';
import store from './icon/store.jpg';

import animation from 'aframe-animation-component';
import registerClickDrag from 'aframe-click-drag-component';

import mtl from './icon/objModel/materials.mtl';
import obj1 from './icon/objModel/model.obj';

class CheckoutVR extends Component {
  constructor() {
    super();
    this.state = {
      color: 'yellow'
    }
  }

  handleClick() {
    const color = this.state.color === 'yellow' ? 'red' : 'yellow';
    this.setState({color})
  }

  render() {
    return (
      <Scene background="color: #ECECEC">


            <Entity obj-model={`obj: ${obj1}; mtl: ${mtl};`} position="-14.5 10.5 -23" scale="20 20 20"></Entity>
        
            <a-link 
              href="/#/store" 
              title="Store" 
              image={store}
              borderColor="blue"
              backgroundColor="red"
              position="0 2 4.3"
              geometry="width: 10"
              >
            </a-link>

            {/* <a-entity 
              geometry="primitive: cylinder; openEnded: true; radius: 20; height: 8" 
              material="side: double"
            >
            </a-entity> */}


            <a-Camera look-controls-enabled="true">
              <a-Cursor>
              </a-Cursor>
            </a-Camera>
      </Scene>
    );
  }
}

export default CheckoutVR;