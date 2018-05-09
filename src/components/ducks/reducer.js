import axios from 'axios';

const initState = {
  userInfo: {},
  contactIsOpen: false
}

const GET_USER_INFO = "GET_USER_INFO";
const CONTACT_IS_OPEN = "CONTACT_IS_OPEN";

export default (state = initState, action) => {

  switch (action.type) {

    case GET_USER_INFO + '_FULFILLED':
      console.log('hi')
      console.log(action.payload)
      return { ...state, userInfo: action.payload }

    case CONTACT_IS_OPEN:
      console.log('ContactUS is open: ', !state.contactIsOpen)
      return Object.assign({}, state, {contactIsOpen: !state.contactIsOpen})

    default:
      return state;
  }
}


export const openCloseContact = () => {

  return {
    type: CONTACT_IS_OPEN
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