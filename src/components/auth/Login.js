import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from '../ducks/reducer';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {}
    }
  }

  componentDidMount() {
    this.props.getUserInfo() 
  }

  render() {
    return (
      <div>
        Success! User authenticated here... Please pull the all user's data in this page!
      </div>
    )
  }
  
}

const maptStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}
export default connect(maptStateToProps, {getUserInfo})(Login)