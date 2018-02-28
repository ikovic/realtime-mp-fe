import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from 'reducers/auth';
import { BACKEND_URL } from 'config/urls';

class Authentication extends Component {
  render() {
    return (
      <div className="center v-mid dtc tc bg-light-red">
        <a
          className="h3 f6 dim ph3 pv2 mb5 dib bg-lightest-blue pointer black no-underline"
          href={`${BACKEND_URL}/auth/facebook`}
        >
          Login with Facebook
        </a>
        <a
          className="h3 f6 dim ph3 pv2 mb5 dib bg-lightest-blue pointer black no-underline"
          href={`${BACKEND_URL}/auth/facebook`}
        >
          Login with Facebook
        </a>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginSuccess: (service, userData) => dispatch(authActions.loginSuccess(service, userData)),
});

export default connect(null, mapDispatchToProps)(Authentication);
