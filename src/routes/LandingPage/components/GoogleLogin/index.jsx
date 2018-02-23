import React from "react";
import GoogleLoginComponent from "react-google-login";
import { GOOGLE_ID } from "config/auth";

const GoogleLogin = ({ onSuccess, onFailure, className }) => {
  return (
    <GoogleLoginComponent
      clientId={GOOGLE_ID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      className={className}
    />
  );
};

export default GoogleLogin;
