import axios from 'axios';

const initState = {
  userInfo: {},
  contactIsOpen: false,
  chatIsOpen: false,
  userCart: [],
  allItems: [],
  searchKeyWord: '',
  favorites: []
}

const GET_USER_INFO = "GET_USER_INFO";
const GET_USER_CART = "GET_USER_CART";
const REM_FROM_CART = "REM_FROM_CART";
const CONTACT_IS_OPEN = "CONTACT_IS_OPEN";
const TOGGLE_CHAT = "TOGGLE_CHAT";
const GET_ALL_ITEMS = "GET_ALL_ITEMS";
const GET_SEARCH_KEYWORD = "GET_SEARCH_KEYWORD";
const GET_FAVORITES = "GET_FAVORITES";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export default (state = initState, action) => {
  switch (action.type) {
    case GET_USER_INFO + '_FULFILLED':
      return { ...state, userInfo: action.payload }
    case GET_USER_CART + '_FULFILLED':
      return Object.assign({}, state, {userCart: action.payload});
    case REM_FROM_CART + '_FULFILLED':
      return Object.assign({}, state, {userCart: action.payload});
    case CONTACT_IS_OPEN:
      return Object.assign({}, state, {contactIsOpen: !state.contactIsOpen});
    case TOGGLE_CHAT:
      return {...state, chatIsOpen: !state.chatIsOpen};
    case GET_ALL_ITEMS + '_FULFILLED':
      return {...state, allItems: action.payload}
    default:
      return state;
    case GET_SEARCH_KEYWORD:
      return {...state, searchKeyWord: action.payload};
    case GET_FAVORITES + '_FULFILLED':
      return Object.assign({}, state, {favorites: action.payload});
    case ADD_TO_FAVORITES:
      return Object.assign({}, state, {favorites: action.payload});
  }
}

export const getFavorites = () => {
  const promise = axios.get('/favorites').then(res => res.data)

  return {
    type: GET_FAVORITES,
    payload: promise
  }
}

export const addToFavorites = (id) => {
  const promise = axios.post('/favorites', {id}).then(res => res.data)

  return {
    type: ADD_TO_FAVORITES,
    payload: promise
  }
}

export const remFromFavorites = () => {


}

export const openCloseContact = () => {
  return {
    type: CONTACT_IS_OPEN
  }
}

export const toggleChat = () => {
  return {
    type: TOGGLE_CHAT
  }
}

export const getUserCart = () => {
  const promise = axios.get('/cart').then(res => res.data)

  return {
    type: GET_USER_CART,
    payload: promise
  }
}

export const remFromCart = (id) => {
  const promise = axios.delete(`/cart/${id}`).then(res => res.data)

  return {
    type: REM_FROM_CART,
    payload: promise
  }
}

export const getUserInfo = () => {
  const userInfo = axios.get('/api/userinfo').then(res => {
    return res.data[0]
  });

  return {
    type: GET_USER_INFO,
    payload: userInfo
  }
}

export const getAllItems = () => {
  let allItems = axios.get(`/api/all`).then(res => {
    return res.data;
  })
  
  return {
    type: GET_ALL_ITEMS,
    payload: allItems
  }
}

export const getSearchKeyWord = (keyword) => {
  return {
    type: GET_SEARCH_KEYWORD,
    payload: keyword
  }
}

