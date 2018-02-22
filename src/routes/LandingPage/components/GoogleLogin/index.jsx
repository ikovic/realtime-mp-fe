import React from 'react';
import GoogleLoginComponent from 'react-google-login';

const GoogleLogin = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLoginComponent
      clientId="723860365140-n84h96s612vhcf25tf7ic25q7cnnb8fb.apps.googleusercontent.com"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default GoogleLogin;
