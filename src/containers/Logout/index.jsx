import React from 'react';
import { connect } from 'react-redux';
import * as userActions from 'reducers/user';

const Logout = ({ logoutUser }) => <button onClick={logoutUser}>logout</button>;

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(userActions.logoutUser()),
});

export default connect(null, mapDispatchToProps)(Logout);
