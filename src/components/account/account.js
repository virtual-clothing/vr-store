

import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Favorites from './favorites';
import { connect } from 'react-redux';
import { getAllItems, getUserInfo } from '../ducks/reducer';


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
    width: 98%;
    /* border: 1px solid black; */
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    margin-bottom: 20px;
    padding: 35px;
    background-color: rgb(231, 231, 233);
    position: relative;
    top: 9px;

    @media (min-width: 740px) {
        width: 65%;
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
    position: relative;
    bottom: 26px;
`;

const Button1 = styled.button`
    width: 180px;
    margin-left: 35px;
    margin-right: 35px;
    height: 60px;
    margin-top: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border: none;

    &:hover{
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    }
`;

const UpdateInput = styled.input`
    width: 40%;
    height: 25px;
    border: none;
    padding-left: 5px;
    border-radius: 5px;
    height: 30px;
    border: none;

    @media (min-width: 740px) {
    position: relative;
    right: 120px;
    width: 55%;
    }
`;

const FavoritesDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 50px;
    margin-top: 50px;
    position: relative;
    bottom: 40px;
`;

const FavoritesHeader = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #E0E0E0;
    height: 3rem;
    padding: 0 1rem;
    margin-top: 1rem;
    width: 91%;
`;


const Fav = styled.div`
    width: 250px;
    height: 250px;
    border: 1px solid grey;
    margin: 10px;
`;

const UserImageCon = styled.div`
    width: 200px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

const UserImg = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;

    @media (min-width: 740px) {
    left: 40px;
    }
`;

const UpdateButton = styled.button`
    width: 150px;
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

const UpdateText = styled.h1`

`;


class Account extends Component {
    constructor(){
        super()

        this.state = {

            user: [],

            username: 'username',
            username2: 'username',
            address: 'address',
            phoneNumber: 'phone number',
            email: 'email',
            profileImage: '',

            //changing favorites button/toggle to log out
            // favoriteToggle: false,
            colorToggle1: "Green",
            colorToggle2: "Green",
            colorToggle3: "Green",
            colorToggle4: "Green",

            favorites: [{test: "test"},{test: "test"},{test: "test"}],

        }
        this.handleChange = this.handleChange.bind(this);
    }


    componentWillMount(){
        window.scrollTo(0, 0);
        axios.get('/api/userinfo').then( res => {
            if(res.data[0]){ this.setState({user: res.data, username: res.data[0].username, username2: res.data[0].username, email: res.data[0].email, profileImage: res.data[0].profile_img, address: res.data[0].address, phoneNumber: res.data[0].phone}, () => console.log(this.state))}
        })
        this.props.getAllItems();
        this.props.getUserInfo();
    }

    handleChange(prop, val){
        this.setState({[prop]: val})
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
        console.log(this.state, "state")
       
        axios.put('/updateaccount', {username, address, phoneNumber, email}).then( res => {
            this.setState({username: res.data[0].username, username2: res.data[0].username, address: res.data[0].address, phoneNumber: res.data[0].phone, email: res.data[0].email, colorToggle1: 'Green' , colorToggle2: 'Green', colorToggle3: 'Green', colorToggle4: 'Green'})
        })
        
    }

    logout(){
        axios.get('/logout').then( res => {
            console.log('logout got response')
            this.props.history.push('/');
            window.location.reload();
        })
    }

    render() {
        console.log(this.props.userInfo, "info from redux")
        return (
            <Body>
                <TopElements>

                    <TwoButtons> 
                        <div style={{position: 'relative', width: '100%', alignItems: 'left'}}>
                            <h1>{this.state.username2}</h1>
                        </div>
                        <UserImageCon>
                            <UserImg src={this.state.profileImage}/>
                        </UserImageCon> 
                        <div style={{height: '20px', width: '10px'}}/>
                        <Link to='/cart'><Button1><h1>Cart</h1></Button1></Link>

                            <Button1 onClick={() => this.logout()}><h1>Log Out</h1></Button1>

                    </TwoButtons>

                    <UpdateA>
                        <UpdateText>Update Account</UpdateText>

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
                            <UpdateButton onClick={() => this.updateAccount()}>Save Changes</UpdateButton>

                    </UpdateA>

                </TopElements>

                <FavoritesDiv>
                    <FavoritesHeader><h2>Favorites</h2></FavoritesHeader>
                    <Favorites/>
                </FavoritesDiv>

            </Body>
        )
    }
}

export default connect(state => state, {getAllItems, getUserInfo})(Account)