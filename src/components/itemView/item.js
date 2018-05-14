import React, { Component } from 'react';
import styled from 'styled-components';
import image1 from './img1.jpg';
import image2 from './img2.jpg';
import image3 from './img3.jpg';
import starE from './media/startEmpty.png';
import starG from './media/goldStar.png';
import { connect } from 'react-redux';
import axios from 'axios';

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
    border: 1px solid grey;
`;

const Review = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ReviewTop = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const RR = styled.div`
    border-bottom: 1px solid grey;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    /* right: 1.7%; */
`;

const NewReview = styled.button`
    width: 110px;
    height: 40px;
    border-radius: 5px;

`;

const WriteReview = styled.div`
    align-items: center;
    background: rgba(0,0,0,.8);
    display: flex;
    height: 100%;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    right: 0%;
    z-index: 2;
`;

const Modal = styled.div`
    align-items: center;
    background-color: white;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: flex-start;
    padding: 10px;
    position: fixed;
    width: 50%;
    z-index: 99;
`;


const Input = styled.input`
    margin: 5px;
    width: 100%;
`;

const TextArea = styled.textarea`
    height: 60%;
    margin: 10px;
    width: 100%;
`;

const ButtonDiv = styled.button`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-left: 5px;
    margin-right: 5px;
`;

const Star = styled.img`
    width: 20px;
    height: 20px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const StarsCon = styled.div`
    width: 105px;
`;


class Item extends Component {
    constructor() {
        super()
        
        this.state = {

            item: [{ name: "Jacket", img1: image1, img2: image2, img3: image3, price: 149.99, description: "a description of the product will go here. yay!" }],
            item2:[{title: '', price: 0, product_img: '', type: '', img_view_2: '', img_view_3: ''}],
            mainImage: '',

            size: 'm',
            reviews: [{}],
            writeReview: false,
            rating: [],
            name: '',
            review: ''
        }
    }

    componentDidMount() {

        //end point to grab item
        axios.get(`/getItemById?id=${this.props.match.params.id}`).then( res => {
            this.setState({item2: res.data, mainImage: res.data[0].product_img, img1: res.data[0].product_img}, () => console.log(this.state.item2, 'item2'))
        })
        axios.get(`/itemReviews?id=${this.props.match.params.id}`).then( res => {
            this.setState({reviews: res.data})
        })
    }

    submitReview(){
        const {name, review} = this.state;
        var rating = this.state.rating.length;
        var pID = this.props.match.params.id

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        } 
        if(mm<10) {
            mm = '0'+mm
        } 

        today = mm + '/' + dd + '/' + yyyy;

        axios.post('/submitreview', {pID, review, name, rating, today}).then( res => {
            this.setState({reviews: res.data, writeReview: false})
        })
    }

    handleChange(prop, val){
        this.setState({[prop]: val})
    }

    addToCart(){
        var pID = this.props.match.params.id
        axios.post('/addtocart', {pID}).then( res => {
            alert('added to cart!');
        })
    }

    render() {
        var images = this.state.item[0]
        var item = this.state.item2[0]
        var starGen = (num) => { 
            if(num === 1){
                return (
                    <StarsCon>
                        <Star src={starG}/>
                    </StarsCon>
                )
            }else if(num === 2){
                return (
                    <StarsCon>
                        <Star src={starG}/>
                        <Star src={starG}/>
                    </StarsCon>
                )
            }else if(num === 3){
                return (
                    <StarsCon>
                        <Star src={starG}/>
                        <Star src={starG}/>
                        <Star src={starG}/>
                    </StarsCon>
                )
            }else if(num === 4){
                return (
                <StarsCon>
                    <Star src={starG}/>
                    <Star src={starG}/>
                    <Star src={starG}/>
                    <Star src={starG}/>
                </StarsCon>
                )
            }else if(num === 5){
                return(
                <StarsCon>
                    <Star src={starG}/>
                    <Star src={starG}/>
                    <Star src={starG}/>
                    <Star src={starG}/>
                    <Star src={starG}/>
                </StarsCon>
                )
            }
        }

        var allReviews = this.state.reviews.map((review, i) => {
            return ( <Review key = { i } >
                        <ReviewTop >
                            <div>{starGen(review.rating)}</div>
                            <h2 > { `${review.name}` } </h2> 
                            <h3 > { review.date } </h3> 
                        </ReviewTop> 
                        <RR > { review.review } </RR> 
                    </Review>
            )
        });

        // I'm adding this block of code to just showing redux is connected here, so you can take it from here to keep implement this component
        // Can you make the component name to Capitalize? but not Item, I used it in the details component. Thank you!


        // let {id} = this.props.match.params;
        // console.log(id, "id from props.match.params")
        // let item = this.props.allItems.filter(product => {
        //     if (product.id === +id) {
        //         return product;
        //     }
        // });
        // console.log(item, "item from filter")
        
        
        return ( <Body >
            {this.state.writeReview ? <div>{
            <WriteReview>
                <Modal>
                    <Input placeholder='name' onChange={(e) => this.handleChange('name', e.target.value)}/>

                    <Row>
                        {!this.state.rating[0] ? <div>{
                        <Star src={starE} onClick={() => this.setState({rating: [1]})}/>
                        }</div> : 
                        <Star src={starG} onClick={() => this.setState({rating: [1]})}/>
                        }

                        {!this.state.rating[1] ? <div>{
                        <Star src={starE} onClick={() => this.setState({rating: [1,1]})}/>
                        }</div> : 
                        <Star src={starG} onClick={() => this.setState({rating: [1,1]})}/>
                        }

                        {!this.state.rating[2] ? <div>{
                        <Star src={starE} onClick={() => this.setState({rating: [1,1,1]})}/>
                        }</div> : 
                        <Star src={starG} onClick={() => this.setState({rating: [1,1,1]})}/>
                        }

                        {!this.state.rating[3] ? <div>{
                        <Star src={starE} onClick={() => this.setState({rating: [1,1,1,1]})}/>
                        }</div> : 
                        <Star src={starG} onClick={() => this.setState({rating: [1,1,1,1]})}/>
                        }

                        {!this.state.rating[4] ? <div>{
                        <Star src={starE} onClick={() => this.setState({rating: [1,1,1,1,1]})}/>
                        }</div> : 
                        <Star src={starG} onClick={() => this.setState({rating: [1,1,1,1,1]})}/>
                        }
                    </Row>

                    <TextArea placeholder="Review" onChange={(e) => this.handleChange('review', e.target.value)}/>

                    <Row>
                        <ButtonDiv onClick={() => this.setState({writeReview: false})}>cancel</ButtonDiv>
                        <ButtonDiv onClick={() => this.submitReview()}>submit</ButtonDiv>
                    </Row>

                </Modal>
            </WriteReview>
            }</div> : <div/>}

            <TopElements >
            <AllImages >
            <MainImage src = { this.state.mainImage }
            alt = 'main' />

            <OtherImageCon>
            <OtherImage src = { item.product_img }
            alt = 'productImage'
            onClick = {
                () => this.setState({ mainImage: item.product_img}) }
            /> <OtherImage src = { item.img_view_2 }
            alt = 'productImage'
            onClick = {
                () => this.setState({ mainImage: item.img_view_2 }) }
            /> <OtherImage src = { item.img_view_3 }
            alt = 'productImage'
            onClick = {
                () => this.setState({ mainImage: item.img_view_3 }) }
            /> </OtherImageCon> </AllImages>

            <ItemSpecs >
            <h1 > { item.title } </h1> 
            <h1 > { item.price } </h1> 

            {/* sizes */}
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
            <ButtonDiv onClick={() => this.addToCart()}>Add to cart</ButtonDiv>
            </ItemSpecs> 
            </TopElements>

            <h1 > Customer Reviews </h1> 
                <ReviewCon > 
                    { allReviews }
                <NewReview onClick={() => this.setState({writeReview: true })}>Write Review</NewReview>
            </ReviewCon>
            
            </Body>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allItems: state.allItems
    }
}

export default connect(mapStateToProps)(Item);