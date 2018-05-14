import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: inline-block;
  width: 25%;
  height: 80vh;
  box-sizing: border-box;
  float: left;

  @media(max-width: 450px) {
    float: none;
    width: 100%;
  }
`
const MenuList = props => {
  const types = ["View All", "T-shirt & Tank Tops", "Shirts", "Hoodies & Sweatshirts", 
  "Jeans", "Pants", "Jackets & Suits", "Shorts", "SwimWear", "Shoes", "Bags"];
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