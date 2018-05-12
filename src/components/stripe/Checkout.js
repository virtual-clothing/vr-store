import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';
const stripe = 'pk_test_mRqSgRYkBpto8ufq1dknHTZz'

class Checkout extends Component {
  onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post('http://localhost:4444/api/payment', { token, amount: 100 }).then(response => {
      alert('we are in business')
    });
  }

  render() {
    return (
      <div className="App">

        <StripeCheckout
          token={this.onToken}
          stripeKey={stripe}
          amount={this.props.total}
        />
      </div>
    );
  }
}


export default Checkout;