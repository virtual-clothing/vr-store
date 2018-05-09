import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick-16";
import image1 from './testCarouselImages/image1.jpeg'
import image2 from './testCarouselImages/image2.jpeg'
import image3 from './testCarouselImages/image3.jpeg'
import image4 from './testCarouselImages/image4.jpeg'
import image5 from './testCarouselImages/image5.jpeg'
import image6 from './testCarouselImages/image6.jpeg'
import store from './testCarouselImages/store.jpg'
import './Home.css';



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

export default class Home extends Component {
    

    render() {

        var settings = {
            // dots: true,
            infinite: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                //   dots: true
                }
              },
              {
                breakpoint: 999,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              }
            ]
          };

        return (
            <Body>

                <Slider {...settings} className='carousel' className='carousel'>
                    <TestImages src={image1} alt='1'/>
                    <TestImages src={image2} alt='2'/>
                    <TestImages src={image3} alt='3'/>
                    <TestImages src={image4} alt='4'/>
                    <TestImages src={image5} alt='5'/>
                    <TestImages src={image6} alt='6'/>
                </Slider>

                <VR>
                    <EnterVR>Enter VR Store</EnterVR>
                </VR>

            </Body>
        )
    }
}