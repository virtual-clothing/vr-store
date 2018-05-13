

import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


//use this for other views
const Body = styled.div`
  min-height: 100vh;
  height: auto;
  position: relative;
  top: 40px;
  overflow: hidden;
  padding-bottom: 40px;
  padding: 20px;
  padding-top: 0px;
`;

const UpdateA = styled.div`
    width: 100%;
    border: 1px solid black;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    padding: 35px;

    @media (min-width: 740px) {
        width: 50%;
    }
`;

const TopElements = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 740px) {
        flex-direction: row;
    }
`;

const TwoButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
`;

const Button1 = styled.button`
    width: 250px;
    height: 90px;
    border-radius: 5px;
    margin: 10px;
`;

const UpdateInput = styled.input`
    width: 40%;
    height: 25px;
    border: 1px solid grey;
`;

const Favorites = styled.div`
    width: 100%;
    border: 1px solid grey;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 50px;
    margin-top: 50px;
`;

const Fav = styled.div`
    width: 250px;
    height: 250px;
    border: 1px solid grey;
    margin: 10px;
`;

const UserImageCon = styled.div`
    width: 250px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

const UserImg = styled.img`
    width: 100%;
`;

const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

`;


export default class Account extends Component {
    constructor(){
        super()

        this.state = {

            user: [],

            username: 'username',
            address: 'address',
            phoneNumber: 'phone number',
            email: 'email',
            profileImage: '',
            favoriteToggle: false,
            colorToggle1: "Green",
            colorToggle2: "Green",
            colorToggle3: "Green",
            colorToggle4: "Green",

            favorites: [{test: "test"},{test: "test"},{test: "test"}]

        }
    }


    componentWillMount(){

        window.scrollTo(0, 0);

            //when users table is updated to have address and phonenumber, set them to state as well
        axios.get('/api/userinfo').then( res => {
            if(res.data[0]){ this.setState({user: res.data, username: res.data[0].username, email: res.data[0].email, profileImage: res.data[0].profile_img, address: res.data[0].address, phoneNumber: res.data[0].phone}, () => console.log(this.state))}
        })

        //need endpoint to grab user favorites. will build with there are products in db
    }

    handleChange(prop, val){
        this.setState({[prop]: val, colorToggle: 'Red'})
        if(prop === 'username'){
            this.setState({colorToggle1: 'Red'})
        }else if(prop === 'address'){
            this.setState({colorToggle2: 'Red'})
        }else if(prop === 'phoneNumber'){
            this.setState({colorToggle3: 'Red'})
        }else if(prop === 'email'){
            this.setState({colorToggle4: 'Red'})
        }
    }

    updateAccount(){
        const {username, address, phoneNumber, email} = this.state;
        console.log(this.state)


        axios.put('/updateaccount', {username, address, phoneNumber, email}).then( res => {
            this.setState({username: res.data[0].username, address: res.data[0].address, phoneNumber: res.data[0].phone, email: res.data[0].email, colorToggle1: 'Green' , colorToggle2: 'Green', colorToggle3: 'Green', colorToggle4: 'Green'})
        })

    }

    render() {

        var favorites = this.state.favorites.map( (fav, i) => {
            return (
                <Fav key={i}>
                    {/* build product display */}
                </Fav>
            )
        })
        return (
            <Body>
                <TopElements>

                    <TwoButtons>  
                        <h1>{this.state.username}</h1>
                        <UserImageCon>
                            <UserImg src={this.state.profileImage}/>
                        </UserImageCon> 
                        <Link to='/cart'><Button1>Cart</Button1></Link>
                        <Button1 onClick={() => this.setState({favoriteToggle: !this.state.favoriteToggle})}>Favorites</Button1>
                    </TwoButtons>

                    <UpdateA>
                        <h1>Update Account</h1>
                        <InputRow>
                            <h3>User Name</h3>
                            <UpdateInput style={{ color: this.state.colorToggle1 }} value={this.state.username} onChange={(e) => this.handleChange('username', e.target.value)}/>
                        </InputRow>
                        <InputRow>
                            <h3>Address</h3>
                            <UpdateInput style={{ color: this.state.colorToggle2 }} value={this.state.address} onChange={(e) => this.handleChange('address', e.target.value)}/>
                        </InputRow>
                        <InputRow>
                            <h3>Phone Number</h3>
                            <UpdateInput style={{ color: this.state.colorToggle3 }} value={this.state.phoneNumber} onChange={(e) => this.handleChange('phoneNumber', e.target.value)}/>
                        </InputRow>
                        <InputRow>
                            <h3>Email</h3>
                            <UpdateInput style={{ color: this.state.colorToggle4 }} value={this.state.email} onChange={(e) => this.handleChange('email', e.target.value)}/>
                        </InputRow>
                        <button onClick={() => this.updateAccount()}>Update Account</button>
                    </UpdateA>



                </TopElements>

                {this.state.favoriteToggle ? <div>{<Favorites>
                    {favorites}
                </Favorites>}</div> : <div/>}

            </Body>
        )
    }
}