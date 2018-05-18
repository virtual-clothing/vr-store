import React, {Component}  from 'react';
import aframe from 'aframe';
import {Entity, Scene} from 'aframe-react';

import animation from 'aframe-animation-component';
import registerClickDrag from 'aframe-click-drag-component';

import blackShirt from './icon/blackShirt.jpg';
import shoes from './icon/shoes.png';
import store from './icon/store.jpg';
import whiteShirt from './icon/whiteShirt.jpg';

class Store extends Component {
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
        
            <a-link 
              href="/#/fittingroom" 
              title="Fitting Room" 
              image={store}
              borderColor="blue"
              backgroundColor="red"
              position="0 2 4.5"
              geometry="width: 10"
              >
              </a-link>

            <a-entity 
              geometry="primitive: cylinder; openEnded: true; radius: 20; height: 8" 
              material="side: double"
            >
            </a-entity>


            <a-Camera look-controls-enabled="true">
              <a-Cursor>
              </a-Cursor>
            </a-Camera>
      </Scene>
    );
  }
}

export default Store;




// <Entity primitive="a-sky" src="https://ucarecdn.com/19a73c27-dc44-4e15-9d49-e93fd70d8014/" />
// </Scene>


// <a-assets>
// <a-asset-item id="object" src={registerObj} geometry={{primitive: 'box', width: 1}}></a-asset-item>
// <a-asset-item id="material" src={registerMtl} geometry={{primitive: 'box', width: 1}}></a-asset-item>
// </a-assets>

// <a-obj-model src="#object" mtl="#material"></a-obj-model>
//   <a-entity position="0 200 150">          
// </a-entity>



// <Entity
// events={{
//   click: this.handleClick.bind(this)
// }}
// geometry={{primitive: 'box', width: 1}}
// material={{color: this.state.color, roughness: 0.5}}
// scale={{x: 2, y: 2, z: 2}}
// position={{x: 0, y: 0, z: -5}}

// /> 