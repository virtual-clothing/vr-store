import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  position: fixed;
  display: inline-block;
  width: 15%;
  box-sizing: border-box;


  @media(max-width: 450px) {
    position: relative;
    float: none;
    width: 100%;
  }
`
// border-top: 1px solid black;
// border-left: 1px solid black;
// border-right: 1px solid black;

const MenuList = props => {
  const types = ["View All", "Shirts", "Hoodies & Jackets", "Pants", "Shorts", "SwimWear", "Shoes", "Bags"];
  let item = types.map(item => 
    <NavLink to={`/${props.category}/${item}`} 
      key={item} 
      style={{textDecoration: 'none'}}
      activeStyle={{ color: 'green', fontWeight: '600' }}
     >
      <Item type={item} category={props.category}/>
    </NavLink>)
  return (
    <Container>
      {item}
    </Container>
  )
}




// <NavLink to={`/${props.category}/${item}`} 
// key={item} 
// style={{ textDecoration: 'none'}}
// activeStyle={{ color: 'red' }}
// >

export default MenuList;
