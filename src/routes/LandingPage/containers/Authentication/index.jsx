import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from 'reducers/auth';

class Authentication extends Component {
  constructor(props) {
    super(props);

    const query = new URLSearchParams(props.location.search);
    const token = query.get('token');
    if (token) {
      this.props.loginUser(token);
    }
  }

  render() {
    return (
      <div className="center v-mid dtc tc bg-light-red">
        <a
          className="h3 f6 dim ph3 pv2 mb5 dib bg-lightest-blue pointer black no-underline"
          href="/auth/facebook"
        >
          Login with Facebook
        </a>
        <a
          className="h3 f6 dim ph3 pv2 mb5 dib bg-lightest-blue pointer black no-underline"
          href="/auth/facebook"
        >
          Login with Facebook
        </a>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (service, userData) => dispatch(authActions.loginUser(service, userData)),
});

export default connect(null, mapDispatchToProps)(Authentication);
