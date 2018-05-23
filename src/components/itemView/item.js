import React, { Component } from 'react';
import styled from 'styled-components';
import image1 from './img1.jpg';
import image2 from './img2.jpg';
import image3 from './img3.jpg';
import starE from './media/startEmpty.png';
import starG from './media/goldStar.png';
import { connect } from 'react-redux';
import axios from 'axios';
import { addCartQuantity, addToCart } from '../ducks/reducer';

const Body = styled.div`
  min-height: 100vh;
  height: auto;
  position: relative;
  /* delete top prop */
  top: 0px;
  overflow: hidden;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(248, 247, 247);
`;

const TopElements = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    bottom: 25px;
    /* padding-left: 50px;
    padding-right: 50px; */

    @media (max-width: 777px) {
        flex-direction: column;
    }
`;

const AllImages = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 777px) {
        flex-direction: column;
    }
`;

const Sizes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 210px;
`;

const MainImageCon = styled.div`
    padding: 10px;
    height: auto;
`;

const MainImage = styled.img`
    margin-top: -4px;
    width: 506px;
    height: auto;
    /* border: 1px solid black; */

    @media (max-width: 777px) {
        width: 300px;
    }
`;

const OtherImageCon = styled.div`
    margin-top: 200px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 777px) {
        flex-direction: row;
        position: relative;
    }
`;

const OtherImage = styled.img `
    width: 105px;
    margin: 5px;
    border: 1px solid black;
    padding: 4px;

    &:hover{
    background-color: #2EE59D;
    color: #fff;
    }

    @media (max-width: 777px) {
        width: 44px;
        margin: 3px;
    }
`;

const ItemSpecs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;

//product size element
const PSE = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin: 5px;

    &:hover{
    background-color: #2EE59D;
    color: #fff;
    }
`;

const PSE2 = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin: 5px;
    background-color: black;
    color: white;

    &:hover{
        background-color: #2EE59D;
        color: #fff;
    }
`;


const ProductDescription = styled.div`
    width: 200px;
    height: auto;
`;

const ReviewCon = styled.div`
    margin-top: 30px;
    width: 90%;
    height: auto;
    /* border: 1px solid grey; */
`;

const Review = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;
    background-color: rgb(231, 231, 233);
`;

const ReviewTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
`;

const RR = styled.div`
    /* border-bottom: 1px solid grey; */
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    /* right: 1.7%; */
`;

const RRR = styled.h3`
    margin: 10px;
`;

const NewReview = styled.button`
    width: 110px;
    height: 40px;
    border-radius: 5px;
    margin: 8px;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    &:hover{
    background-color: #2EE59D;
    color: #fff;
    }
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

const ReviewName = styled.h2`
    width: 160px;
`;

const CartButton = styled.button`
    width: 110px;
    height: 30px;
    border-radius: 5px;
    margin: 10px;
    border: none;
    position: relative;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    &:hover{
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
  }
`;

const PlaceHolder = styled.div`
    width: 50px;
    height: 10px;
`;


class Item extends Component {
    constructor() {
        super()

        this.state = {

            item: [{ name: "Jacket", img1: image1, img2: image2, img3: image3, price: 149.99, description: "All items fit true to size. International shipping available." }],
            item2:[{title: '', price: 0, product_img: '', img_back: '', type: '', img_view_2: '', img_view_3: '', size: ''}],
            mainImage: '',

            size: 'm',
            reviews: [{}],
            writeReview: false,
            rating: [],
            name: '',
            review: '',
            alreadyInCart: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        //end point to grab item
        axios.get(`/getItemById?id=${this.props.match.params.id}`).then(res => {
            this.setState({ item2: res.data, mainImage: res.data[0].product_img, img1: res.data[0].product_img }, () => console.log(this.state.item2, 'item2'))
        })
        axios.get(`/itemReviews?id=${this.props.match.params.id}`).then(res => {
            this.setState({ reviews: res.data })
        })
    }

    submitReview() {
        const { name, review } = this.state;
        var rating = this.state.rating.length;
        var pID = this.props.match.params.id


        //date generator
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }

        today = mm + '/' + dd + '/' + yyyy;

        axios.post('/submitreview', { pID, review, name, rating, today }).then(res => {
            this.setState({ reviews: res.data, writeReview: false })
        })
    }

    handleChange(prop, val) {
        this.setState({ [prop]: val })
    }

    addToCart() {
        var pID = this.props.match.params.id
        console.log(pID)
        this.props.cart.map((item, index) => {
            console.log(item.product_id)
            if (item.product_id == pID) {
                console.log('its in there')
                this.setState({ alreadyInCart: true })
            }
        })
        
        console.log(this.state.alreadyInCart)
        if (this.state.alreadyInCart === true) {
            this.props.addCartQuantity(pID);
        } else {
            this.props.addToCart(pID);
            this.setState({alreadyInCart: true})
        }
    }

    render() {
        var images = this.state.item[0]
        var item = this.state.item2[0]
        var starGen = (num) => {
            if (num === 1) {
                return (
                    <StarsCon>
                        <Star src={starG} />
                        <Star src={starE} />
                        <Star src={starE} />
                        <Star src={starE} />
                        <Star src={starE} />
                    </StarsCon>
                )
            } else if (num === 2) {
                return (
                    <StarsCon>
                        <Star src={starG} />
                        <Star src={starG} />
                        <Star src={starE} />
                        <Star src={starE} />
                        <Star src={starE} />
                    </StarsCon>
                )
            } else if (num === 3) {
                return (
                    <StarsCon>
                        <Star src={starG} />
                        <Star src={starG} />
                        <Star src={starG} />
                        <Star src={starE} />
                        <Star src={starE} />
                    </StarsCon>
                )
            } else if (num === 4) {
                return (
                    <StarsCon>
                        <Star src={starG} />
                        <Star src={starG} />
                        <Star src={starG} />
                        <Star src={starG} />
                        <Star src={starE} />
                    </StarsCon>
                )
            } else if (num === 5) {
                return (
                    <StarsCon>
                        <Star src={starG} />
                        <Star src={starG} />
                        <Star src={starG} />
                        <Star src={starG} />
                        <Star src={starG} />
                    </StarsCon>
                )
            }
        }

        var allReviews = this.state.reviews.map((review, i) => {
            return (<Review key={i} >
                <ReviewTop >
                    <div>{starGen(review.rating)}</div>
                    <ReviewName > {`${review.name}`} </ReviewName>
                    <h3 > {review.date} </h3>
                </ReviewTop>
                <RR> <RRR>{review.review}</RRR> </RR>
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


        return (<Body >
            {this.state.writeReview ? <div>{
                <WriteReview>
                    <Modal>
                        <Input placeholder='name' onChange={(e) => this.handleChange('name', e.target.value)} />

                        <Row>
                            {!this.state.rating[0] ? <div>{
                                <Star src={starE} onClick={() => this.setState({ rating: [1] })} />
                            }</div> :
                                <Star src={starG} onClick={() => this.setState({ rating: [1] })} />
                            }

                            {!this.state.rating[1] ? <div>{
                                <Star src={starE} onClick={() => this.setState({ rating: [1, 1] })} />
                            }</div> :
                                <Star src={starG} onClick={() => this.setState({ rating: [1, 1] })} />
                            }

                            {!this.state.rating[2] ? <div>{
                                <Star src={starE} onClick={() => this.setState({ rating: [1, 1, 1] })} />
                            }</div> :
                                <Star src={starG} onClick={() => this.setState({ rating: [1, 1, 1] })} />
                            }

                            {!this.state.rating[3] ? <div>{
                                <Star src={starE} onClick={() => this.setState({ rating: [1, 1, 1, 1] })} />
                            }</div> :
                                <Star src={starG} onClick={() => this.setState({ rating: [1, 1, 1, 1] })} />
                            }

                            {!this.state.rating[4] ? <div>{
                                <Star src={starE} onClick={() => this.setState({ rating: [1, 1, 1, 1, 1] })} />
                            }</div> :
                                <Star src={starG} onClick={() => this.setState({ rating: [1, 1, 1, 1, 1] })} />
                            }
                        </Row>

                        <TextArea placeholder="Review" onChange={(e) => this.handleChange('review', e.target.value)} />

                        <Row>
                            <ButtonDiv onClick={() => this.setState({ writeReview: false })}>cancel</ButtonDiv>
                            <ButtonDiv onClick={() => this.submitReview()}>submit</ButtonDiv>
                        </Row>

                    </Modal>
                </WriteReview>
            }</div> : <div />}

            <div style={{height: '35px'}}/>

            <TopElements >

                <PlaceHolder/>

                <AllImages>
                    <MainImage src={this.state.mainImage}
                        alt='main' />

                    <OtherImageCon>
                        {!item.product_img == '' ? <div>{
                            <OtherImage src = { item.product_img }
                            alt = 'productImage'
                            onClick = {
                                () => this.setState({ mainImage: item.product_img}) }
                            />
                        }</div> : <div/>}

                        {!item.img_back == '' ? <div>{
                            <OtherImage src = { item.img_back }
                            alt = 'productImage'
                            onClick = {
                                () => this.setState({ mainImage: item.img_back}) }
                            /> 
                        }</div> : <div/>}

                        {!item.img_view_2 == '' ? <div>{
                            <OtherImage src = { item.img_view_2 }
                            alt = 'productImage'
                            onClick = {
                                () => this.setState({ mainImage: item.img_view_2 }) }
                            /> 
                        }</div> : <div/>}
                        
                        {!item.img_view_3 == '' ? <div>{
                            <OtherImage src = { item.img_view_3 }
                            alt = 'productImage'
                            onClick = {
                                () => this.setState({ mainImage: item.img_view_3 }) }
                            /> 
                        }</div> : <div/>}

                    </OtherImageCon>
                </AllImages>

                <ItemSpecs>

                <h1 style={{maxWidth: '250px'}}> { item.title } </h1> 
                <h1 > { `$${item.price}` } </h1> 

                {/* sizes */}
                <Sizes>

                    {this.state.size === 'xs' ? <div>{
                        <PSE2>xs</PSE2> 
                    }</div> : <PSE onClick={() => this.setState({size: 'xs'})}>xs</PSE>}

                    {this.state.size === 's' ? <div>{
                        <PSE2>s</PSE2> 
                    }</div> : <PSE onClick={() => this.setState({size: 's'})}>s</PSE>}

                    {this.state.size === 'm' ? <div>{
                        <PSE2>m</PSE2> 
                    }</div> : <PSE onClick={() => this.setState({size: 'm'})}>m</PSE>}

                    {this.state.size === 'l' ? <div>{
                        <PSE2>l</PSE2> 
                    }</div> : <PSE onClick={() => this.setState({size: 'l'})}>l</PSE>}

                    {this.state.size === 'xl' ? <div>{
                        <PSE2>xl</PSE2> 
                    }</div> : <PSE onClick={() => this.setState({size: 'xl'})}>xl</PSE>}

                </Sizes> 
                <ProductDescription >
                <h3 > { images.description } </h3> 
                </ProductDescription> 
                <CartButton onClick={() => this.addToCart()}>Add to cart</CartButton>
                </ItemSpecs> 

                <PlaceHolder/>

            </TopElements>

            <div style={{width: '100%', display: 'flex', paddingLeft: '12%', background: '#E0E0E0'}}>
            <h1 style={{position: 'relative', top: '4px'}}> Customer Reviews </h1>
            </div>

            <ReviewCon >
                {allReviews}
                <NewReview onClick={() => this.setState({ writeReview: true })}>Write Review</NewReview>
            </ReviewCon>

        </Body>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allItems: state.allItems,
        cart: state.userCart
    }
}

export default connect(mapStateToProps, { addCartQuantity, addToCart })(Item);