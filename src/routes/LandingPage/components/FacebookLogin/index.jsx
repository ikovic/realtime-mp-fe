import React from 'react';
import FacebookLoginComponent from 'react-facebook-login';

const response = res => console.log('f', res);

const FacebookLogin = props => {
  return (
    <FacebookLoginComponent
      appId="213243595893523"
      autoLoad={true}
      fields="name, email, picture"
      callback={response}
    />
  );
};
export default FacebookLogin;
