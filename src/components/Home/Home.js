import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick-16";
import image1 from './testCarouselImages/image1.jpeg';
import image2 from './testCarouselImages/image2.jpeg';
import image3 from './testCarouselImages/image3.jpeg';
import image4 from './testCarouselImages/image4.jpeg';
import image5 from './testCarouselImages/image5.jpeg';
import image6 from './testCarouselImages/image6.jpeg';
// import store from './testCarouselImages/store.jpg';
import './Home.css';
import bJacket from './itemImages/homeMen.jpg';
import gJacket from './itemImages/homeWomen.jpg';
import pJacket from './itemImages/kidsHome.jpg';
import vrGuy from './testCarouselImages/vrGuy.png';

// import vrGuy2 from './testCarouselImages/vrGuy2.png';
import store3 from './testCarouselImages/store4.jpeg';
// import rack from './testCarouselImages/rack.png';
// import people from './testCarouselImages/people2.png';
// import vrHeadset from './testCarouselImages/vr_headset.png';

import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllItems } from '../ducks/reducer';

//use this for other views
const Body = styled.div`
  min-height: 100vh;
  height: auto;
  position: relative;
  overflow: hidden;
  padding-bottom: 40px;
`;

const TestImages = styled.img`
    width: 100%;
`;

// const VR = styled.div`
//     width: 100%;
//     height: 150px;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
// `;

const EnterVR = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: rgb(244, 244, 245);
    position: relative;
    left: 70%;
    bottom: 350px;
    z-index: 2;
    border: none;
`;

const EnterVR2 = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: rgb(194, 194, 197);
    position: relative;
    left: 70%;
    bottom: 350px;
    z-index: 2;
    box-shadow: 0 0 10px 5px;
    border: none;
`;



const Featured = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 0px;

    @media (max-width: 777px) {
        flex-direction: column;
    }
`;

const ItemClass = styled.div`
    width: 20rem;
    height: 20rem;
    /* border: 1px solid grey; */
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 777px) {
        flex-direction: column;
        width: 95%;
        height: 350px;
        max-width: 420px;
    }
`;

const ItemImage = styled.img`
    height: 100%;
    max-width: 340px;
    position: relative;

    @media (max-width: 777px) {
        
    }
`;

const ItemBuy = styled.div`
    width: 250px;
    height: 50px;
    background: rgba(76, 175, 80, 0.2);
    /* opacity: 0.1; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    /* border: 1px solid black; */
    margin-top: 50px;

    @media (max-width: 777px) {
        flex-direction: column;
        width: 95%;
        height: 350px;
        max-width: 420px;
        margin-top: 140px;
        height: 70px;
    }
`;

const ItemText = styled.h2`
    color: black;
    opacity: 4;
`;

const Pimage1 = styled.img`
        width: 300px;
        position: relative;
        left: 80px;
        top: 120px;
`;

class Home extends Component {
    constructor(){
        super()

        this.state = {
            buttonPress: false,
        }
    }

    switchBack(){
        setTimeout(() => {
           this.setState({buttonPress: false}) 
        }, 200);
    }

    componentWillMount() {
        this.props.getAllItems();
        window.scrollTo(0, 0);
    }
    
    render() {
        var settings = {
            // dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: false,
            fade: true
          };

        return (
            <ParallaxProvider>
            <Body>

                <Slider {...settings} className='carousel'>
                    <div><TestImages src={image3} alt='3'/></div>
                    <div><TestImages src={image2} alt='2'/></div>
                    <div><TestImages src={image1} alt='1'/></div>
                    <div><TestImages src={image4} alt='4'/></div>
                    <div><TestImages src={image5} alt='5'/> </div>
                    <div><TestImages src={image6} alt='6'/></div>
                </Slider>

                <Featured>
                    <Link to='/men'>
                        <ItemClass>
                            <ItemImage label='a' src={bJacket} alt='jacket'/>
                      
                        </ItemClass>
                    </Link>
                    <Link to='/women'>
                        <ItemClass>
                            <ItemImage id='2' src={gJacket} alt='jacket'/>
                        
                        </ItemClass>
                    </Link>
                    <Link to='/kids'>
                        <ItemClass>
                            <ItemImage id='3' src={pJacket} alt='jacket'/>
                        
                        </ItemClass>
                    </Link>
                </Featured>

                <Link to='/fittingroom'>
                    <ParallaxBanner
                        className="pBanner"
                        layers={[
                            {
                            image: store3,
                            amount: .4,
                            fasterScrollRate: 20,
                            offsetYMin: '200%'
                            },
                        ]}
                        style={{
                            height: '400px',
                        }}
                    >
                        
                        <Parallax
                            className="parallax2"
                            offsetYMax='0%'
                            offsetY='0%'
                            // offsetYMin='-500%'

                        >
                            <Pimage1 src={vrGuy} />
                        </Parallax>

                    </ParallaxBanner>
                </Link>
                
                
                {/* {!this.state.buttonPress ? <div>{
                    <EnterVR onClick={() => this.setState({buttonPress: true}, () => this.switchBack())}>Shop in VR</EnterVR>
                }</div> : 
                    <EnterVR2>Shop in VR</EnterVR2>
                } */}

            </Body>
            </ParallaxProvider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allItems: state.allItems
    }
}

export default connect(mapStateToProps, {getAllItems})(Home)