import React, {Component}  from 'react';
import aframe from 'aframe';
import {Entity, Scene} from 'aframe-react';

import animation from 'aframe-animation-component';
import registerClickDrag from 'aframe-click-drag-component';
import textGeometry from 'aframe-text-geometry-component';

import blackShirt from './icon/blackShirt.jpg';
import shoes from './icon/shoes.png';
import store from './icon/store.jpg';
import whiteShirt from './icon/whiteShirt.jpg';
import brownShoes from './icon/brownShoes.png';
import model from './icon/model/men.dae';
import tree from './icon/model/tree.dae';
import modelWoman from './icon/model/modelWoman.dae';

registerClickDrag(aframe);

class FittingRoom extends Component {
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
            geometry={{width: 1, height: 1}}
            position="0 2 -4"
          />

          <Entity 
            id="grayShirt"  
            click-drag 
            primitive="a-image" 
            src={whiteShirt} 
            geometry={{width: 1, height: 1}}
            position="2 2 -4"
          />

          <a-entity text-geometry="value: Fitting Room"
          position="-2 4 -5"></a-entity>

        
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

            <a-entity 
              geometry="primitive: cylinder; openEnded: true; radius: 5; height: 7;" 
              material="side: double"
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

            <a-Camera look-controls-enabled="true">
              <a-Cursor>
              </a-Cursor>
            </a-Camera>
      </Scene>
    );
  }
}

export default FittingRoom;



    //     {/* tree */}
    //     <a-assets>
    //     <a-asset-item 
    //       id="tree" 
    //       src={tree}
    //     >
    //     </a-asset-item>
        
    //     {/*
    //     <img id="fall" src="fall.png">
    //     <img id="goggles" src="goggles.png">
    //     <img id="mozvr" src="../../assets/img/mozvr.png">
    //     <img id="price" src="price.png">
    //     <img id="shadow2" src="../../assets/img/radial-shadow-2.png">
    //     <img id="shoes" src="shoes.png">
    //     */}
    // </a-assets>

    //   <a-entity id="model" position="-2 0 -1">
    //     <a-animation 
    //       attribute="rotation" 
    //       from="0 -30 0" 
    //       to="0 330 0" 
    //       dur="15000"
    //       easing="linear" 
    //       repeat="indefinite">
    //     </a-animation>

    //     <a-collada-model 
    //       position="-.35 0 .55" 
    //       rotation="0 -20 0" 
    //       scale="1.5 1.5 1.5"   
    //       src="#tree">
    //     </a-collada-model>
    //     <a-image src="#shadow2" rotation="-90 0 0" scale="0.5 0.5 0.5"></a-image>
    //   </a-entity>