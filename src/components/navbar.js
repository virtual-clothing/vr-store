import React, { Component } from 'react';
import styled from 'styled-components';
import Cart from './media/cart.png';
import hIcon from './media/hamburgerIcon.png';
import profileIcon from './media/person.png';
import searchIcon from './media/searchIcon.png';
import chatIcon from './media/chat.png';
import { Link } from 'react-router-dom';

const NavBody = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid black;
    box-shadow: 0 4px 7px 0 rgba(112, 95, 212, 0.1), 0 2px 4px 0 rgba(0,0,0,.3);
    z-index: 1;
`;

const Top = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const CatsDesktop = styled.div`
  width: 66%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 740px) {
  display: none;
  }
`;

const Cats2 = styled.div`
  width: 66%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CartIcon = styled.img`
  width: 40px;
  position: relative;
  top: 2px;
`;

const SearchBox = styled.input`
  position: relative;
  width: 100px;
  height: 20px;
  border-radius: 3px;
  border: none;
  left: 33%;
  font-size: 1rem;
  justify-content: space-around;
  align-items: center;
`;

const DropIcon = styled.img`
  width: 23px;
  margin-left: 3px;

  @media (min-width: 740px) {
  display: none;
  }
`;

const SearchB = styled.div`
  position: relative;
  left: 33.3%;
  width: 25px;
  height: 22px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
`;

const SearchIcon = styled.img`
  width: 18px;
  position: relative;
  top: 2px;
  left: 2px;
`;

const DesktopDisplay = styled.div`
  display: flex;

  @media (max-width: 740px) {
  display: none;
  }
`;

const MobileDisplay = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  left: 5%;

  @media (min-width: 740px) {
  display: none;
  }
`;

const ProfileIcon = styled.img`
  width: 27px;
  height: 25px;
  margin-right: 3px;
  margin-left: 3px;
`;

const DropMenu = styled.div`
  width: 500px;
  height: 500px;
  background-color: rgb(240, 240, 240);
  border: 1px solid black;
  position: relative;
  left: 50%;
  box-shadow: 0 4px 7px 0 rgba(112, 95, 212, 0.1), 0 2px 4px 0 rgba(0,0,0,.3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 0;
  bottom: 2px;

  @media (min-width: 740px) {
  display: none;
  }
`;

const NavOutter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
`;

const CatSelect = styled.div`
  height: 10%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  padding-left: 8px;
  align-items: center;
  `
    // &:hover{
    //   background-color: rgb(216, 211, 211);
  
    // }

class Nav extends Component {
    constructor(){
      super()

      this.state = {
        toggleMenu: false
      }

    }

  render() {
    console.log(process.env.REACT_APP_LOGIN)
    return (
      <NavOutter>
      <NavBody>

        <Top>
          <SearchBox placeholder='Search'></SearchBox>
          <SearchB>
            <SearchIcon src={searchIcon} alt='search'/>
          </SearchB>
        </Top>

        <Bottom>

            {/* these will disappear in desktop view */}
          <MobileDisplay>
            <Link to='/profile'><ProfileIcon src={profileIcon} alt='profile'/></Link>
            <ProfileIcon src={chatIcon} alt='profile'/>
          </MobileDisplay>

          <Cats2>
            <h2>Logo</h2>
          </Cats2>

            {/* these will disappear in mobile view and will be replaced by icon */}
          <CatsDesktop>
            <Link to='/men' style={{ textDecoration: 'none', color: 'black' }}>Men</Link>
            <Link to='/women' style={{ textDecoration: 'none', color: 'black' }}>Women</Link>
            <Link to='/kids' style={{ textDecoration: 'none', color: 'black' }}>Kids</Link>
            <Link to='/fittingRoom' style={{ textDecoration: 'none', color: 'black' }}>Fitting Room</Link>
          </CatsDesktop>

          <Cats2>
            <a href={process.env.REACT_APP_LOGIN}>
              <h3>login/signup</h3>
            </a>

            <DesktopDisplay>
              <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>login/signup</Link>
              <ProfileIcon src={chatIcon} alt='profile'/>
            </DesktopDisplay>

            <Link to='/cart'><CartIcon src={ Cart } alt='cart'/></Link>
            <DropIcon src={ hIcon} alt='hIcon' onClick={() => this.setState({toggleMenu: !this.state.toggleMenu})}></DropIcon>

          </Cats2>

        </Bottom>

      </NavBody>

        { this.state.toggleMenu ? 
        <div>{ 
          <DropMenu>
            <CatSelect><Link to='/men' style={{ textDecoration: 'none', color: 'black' }}>Men</Link></CatSelect>
            <CatSelect><Link to='/women' style={{ textDecoration: 'none', color: 'black' }}>Women</Link></CatSelect>
            <CatSelect><Link to='/kids' style={{ textDecoration: 'none', color: 'black' }}>Kids</Link></CatSelect>
            <CatSelect><Link to='/fittingRoom' style={{ textDecoration: 'none', color: 'black' }}>Fitting Room</Link></CatSelect>
          </DropMenu>
        }</div> : <div/>}

      </NavOutter>
    );
  }
}

export default Nav;