import React from "react";
import FacebookLoginComponent from "react-facebook-login";
import { FACEBOOK_ID } from "config/auth";

const FacebookLogin = ({ onSuccess, onFailure, className }) => {
  return (
    <FacebookLoginComponent
      cssClass={className}
      appId={FACEBOOK_ID}
      autoLoad={false}
      fields="name, email, picture"
      callback={res => (res.accessToken ? onSuccess(res) : onFailure(res))}
    />
  );
};
export default FacebookLogin;
