import React, { Component } from 'react';
import styled from 'styled-components';
import Cart from './media/cart.png';
import { Link } from 'react-router-dom';

const NavBody = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid black;
`;

const Top = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
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

const Cats = styled.div`
  width: 66%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Cats2 = styled.div`
  width: 66%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CartIcon = styled.img`
  width: 50px;
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
`

// const Desktop = styled.div`
//     @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `


class Nav extends Component {

  render() {
    return (
      <NavBody>

        <Top>
          <SearchBox placeholder='Search'></SearchBox>
        </Top>

        <Bottom>

          <Cats>
            <h2>Logo</h2>
          </Cats>

          {/* <Desktop> */}
            <Cats>
              <Link to='/men' style={{ textDecoration: 'none', color: 'black' }}>Men</Link>
              <Link to='/women' style={{ textDecoration: 'none', color: 'black' }}>Women</Link>
              <Link to='/kids' style={{ textDecoration: 'none', color: 'black' }}>Kids</Link>
              <Link to='/fittingRoom' style={{ textDecoration: 'none', color: 'black' }}>Fitting Room</Link>
            </Cats>
          {/* </Desktop> */}

          <Cats2>
            <h3>login/signup</h3>
            <Link to='/cart'><CartIcon src={ Cart } alt='cart'/></Link>
          </Cats2>

        </Bottom>

      </NavBody>
    );
  }
}

export default Nav;