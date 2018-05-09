import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from '../ducks/reducer';

class Login extends Component {
  constructor() {
  super();
}

componentDidMount() {
  this.props.getUserInfo()
}

render() {
  return (
    <div>
      <img src={this.props.userInfo.profile_img} style={{width: 200, height: 200}} alt="user image"/>
      {this.props.userInfo.username}
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