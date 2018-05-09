import axios from 'axios';

const initState = {
  userInfo: {}
}

const GET_USER_INFO = "GET_USER_INFO";

export default (state = initState, action) => {
  switch(action.type) {
    case GET_USER_INFO + '_FULFILLED':
    console.log('hi')
    console.log(action.payload)
      return {...state, userInfo: action.payload}
     
    default: 
      return state;
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