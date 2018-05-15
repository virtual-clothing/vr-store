import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: inline-block;
  width: 25%;
  box-sizing: border-box;
  float: left;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;

  @media(max-width: 450px) {
    float: none;
    width: 100%;
  }
`
const MenuList = props => {
  const types = ["View All", "Shirts", "Hoodies & Jackets", "Pants", "Shorts", "SwimWear", "Shoes", "Bags"];
  let item = types.map(item => 
    <Link to={`/${props.category}/${item}`} key={item} style={{ textDecoration: 'none' }}>
      <Item type={item} category={props.category}/>
    </Link>)
  return (
    <Container>
      {item}
    </Container>
  )
}

export default MenuList;

// "View All", "T-shirt & Tank Tops", "Shirts", "Hoodies & Sweatshirts", 
//   "Jeans", "Pants", "Jackets & Suits", "Shorts", "SwimWear", "Shoes", "Bags"