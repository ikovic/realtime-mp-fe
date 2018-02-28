import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as routes from 'config/routes';
import * as authActions from 'reducers/auth';

class Callback extends Component {
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const token = query.get('token');

    if (token) {
      this.props.loginSuccess(token);
    }
  }

  render() {
    const query = new URLSearchParams(this.props.location.search);
    const token = query.get('token');

    if (token) {
      return <Redirect to={routes.USER} />;
    }

    return <Redirect to={routes.LOGIN} />;
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  loginSuccess: token => dispatch(authActions.loginSuccess(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Callback);
