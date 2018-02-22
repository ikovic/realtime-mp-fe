import React, { Component } from 'react';
import GoogleLogin from 'routes/LandingPage/components/GoogleLogin';
import FacebookLogin from 'routes/LandingPage/components/FacebookLogin';

class LandingPage extends Component {
  onSuccess = response => {
    console.log('success', response);
  };

  onFailure = response => {
    console.log('failure', response);
  };
  render() {
    return (
      <div>
        <GoogleLogin onSuccess={this.onSuccess} onFailure={this.onFailure} />
        <FacebookLogin />
      </div>
    );
  }
}

export default LandingPage;
