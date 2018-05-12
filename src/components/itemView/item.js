import React, { Component } from 'react';
import styled from 'styled-components';
import image1 from './img1.jpg';
import image2 from './img2.jpg';
import image3 from './img3.jpg';


const Body = styled.div `
  min-height: 100vh;
  height: auto;
  position: relative;
  /* delete top prop */
  top: 40px;
  overflow: hidden;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopElements = styled.div `
    width: 100%;
    height: auto;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const AllImages = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const MainImageCon = styled.div `
    padding: 10px;
    height: auto;
`;

const MainImage = styled.img `
    margin-top: 30px;
    width: 300px;
    height: auto;
    border: 1px solid black;
`;

const OtherImageCon = styled.div `
    margin-top: 200px;
    width: 15%;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    `;

const OtherImage = styled.img `
    width: 100px;
    margin: 5px;
    border: 1px solid black;
    padding: 10px;
`;

const ItemSpecs = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

//product size element
const PSE = styled.div `
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin: 5px;
`;

const ProductDescription = styled.div `
    width: 200px;
    height: auto;
`;

const ReviewCon = styled.div `
    margin-top: 30px;
    width: 90%;
    height: auto;
    border: 1px solid black;
`;

const Review = styled.div `
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ReviewTop = styled.div `
    display: flex;
    flex-direction: row;
`


export default class Item extends Component {
    constructor() {
        super()

        this.state = {
            item: [{ name: "Jacket", img1: image1, img2: image2, img3: image3, price: 149.99, description: "a description of the product will go here. yay!1 lkjds dslkj dfsljdsl dfs" }],
            mainImage: '',
            size: 'm',
            reviews: [{ name: 'Joe', rating: 3, review: "loved it", date: '01/2017' }, { name: 'Ben', rating: 3, review: "loved it", date: '01/2018' }]
        }
    }

    componentDidMount() {
        var images = this.state.item[0]
        this.setState({ mainImage: images.img1 })
    }


    render() {
        var images = this.state.item[0]

        var allReviews = this.state.reviews.map((review, i) => {
            return ( <Review key = { i } >
                <ReviewTop >
                <h1 > { `Stars ${review.rating}  ` } </h1> <h2 > { `${review.name}` } </h2> <h3 > { review.date } </h3> </ReviewTop> <h1 > { review.review } </h1> </Review>
            )
        })

        return ( <Body >

            <TopElements >
            <AllImages >
            <MainImage src = { this.state.mainImage }
            alt = 'main' />

            <  OtherImageCon >
            <OtherImage src = { images.img1 }
            alt = 'productImage'
            onClick = {
                () => this.setState({ mainImage: images.img1 }) }
            /> < OtherImage src = { images.img2 }
            alt = 'productImage'
            onClick = {
                () => this.setState({ mainImage: images.img2 }) }
            /> <OtherImage src = { images.img3 }
            alt = 'productImage'
            onClick = {
                () => this.setState({ mainImage: images.img3 }) }
            /> </OtherImageCon> </AllImages>

            <ItemSpecs >
            <h1 > { images.name } </h1> 
            <h1 > { images.price } </h1> 
            < AllImages >
            <PSE > xs </PSE> 
            <PSE > s </PSE> 
            <PSE > m </PSE>
            <PSE > l </PSE> 
            <PSE > xl </PSE> 
            </AllImages> 
            <ProductDescription >
            <h3 > { images.description } </h3> 
            </ProductDescription> 
            </ItemSpecs> 
            </TopElements>

            <h1 > Customer Reviews </h1> 
            <ReviewCon > { allReviews } 
            </ReviewCon>

            </Body>
        )
    }
}