import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from 'reducers/auth';
import GoogleLogin from 'routes/LandingPage/components/GoogleLogin';
import FacebookLogin from 'routes/LandingPage/components/FacebookLogin';
import AuthButton from 'routes/LandingPage/components/AuthButton';

class Authentication extends Component {
  onSuccess = service => response => {
    this.props.loginUser(service, response);
  };

  onFailure = response => {
    console.log('failure', response);
  };

  render() {
    return (
      <div className="center v-mid dtc tc bg-light-red">
        <AuthButton
          component={GoogleLogin}
          onSuccess={this.onSuccess('google')}
          onFailure={this.onFailure}
        />
        <AuthButton
          component={FacebookLogin}
          onSuccess={this.onSuccess('facebook')}
          onFailure={this.onFailure}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (service, userData) => dispatch(authActions.loginUser(service, userData)),
});

export default connect(null, mapDispatchToProps)(Authentication);
