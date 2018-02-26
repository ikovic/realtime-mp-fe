import React from 'react';
import ReactGoogleLogin from 'react-google-login';
import { GOOGLE_ID } from 'config/auth';

const GoogleLogin = ({ onSuccess, onFailure, className }) => (
  <ReactGoogleLogin
    clientId={GOOGLE_ID}
    onSuccess={onSuccess}
    onFailure={onFailure}
    className={className}
  />
);

export default GoogleLogin;
