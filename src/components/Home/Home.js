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
import bJacket from './itemImages/brownjacket.jpg';
import gJacket from './itemImages/greenjacket.jpeg';
import pJacket from './itemImages/puffy.jpg';


const Body = styled.div`
  min-height: 100vh;
  height: auto;
  position: relative;
  top: 40px;
  overflow: hidden;
  padding-bottom: 40px;
`;

const TestImages = styled.img`
    width: 100%;
`;

const VR = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url(media/fence2.jpeg);
`;

const EnterVR = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: rgb(179, 177, 177);
`;

const Featured = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    @media (max-width: 777px) {
        flex-direction: column;
    }
`;

const ItemClass = styled.div`
    width: 250px;
    height: 250px;
    border: 1px solid grey;
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
    margin-top: 100px;

    @media (max-width: 777px) {
        flex-direction: column;
        width: 95%;
        height: 350px;
        max-width: 420px;
        width: 95%;
        margin-top: 140px;
        height: 70px;
    }
`;

const ItemText = styled.h2`
    color: black;
    opacity: 4;
`;


export default class Home extends Component {
    

    render() {

        var settings = {
            // dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            fade: true
          };

        return (
            <Body>

                <Slider {...settings} className='carousel'>
                    <div><TestImages src={image1} alt='1'/></div>
                    <div><TestImages src={image2} alt='2'/></div>
                    <div><TestImages src={image3} alt='3'/></div>
                    <div><TestImages src={image4} alt='4'/></div>
                    <div><TestImages src={image5} alt='5'/></div>
                    <div><TestImages src={image6} alt='6'/></div>
                </Slider>

                <Featured>
                    <ItemClass>
                        <ItemImage src={bJacket} alt='jacket'/>
                        <ItemBuy>
                            <ItemText>$149.99</ItemText>
                        </ItemBuy>
                    </ItemClass>
                    <ItemClass>
                        <ItemImage src={gJacket} alt='jacket'/>
                        <ItemBuy>
                            <ItemText>$149.99</ItemText>
                        </ItemBuy>
                    </ItemClass>
                    <ItemClass>
                        <ItemImage src={pJacket} alt='jacket'/>
                        <ItemBuy>
                            <ItemText>$149.99</ItemText>
                        </ItemBuy>
                    </ItemClass>
                </Featured>

                <VR>
                    <EnterVR>Enter VR Store</EnterVR>
                </VR>

            </Body>
        )
    }
}