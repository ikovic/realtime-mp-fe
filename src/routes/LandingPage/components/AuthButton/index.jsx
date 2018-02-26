import React from 'react';

const AuthButton = props => (
  <props.component
    {...props}
    className="h3 f6 dim ph3 pv2 mb5 dib bg-lightest-blue pointer black"
  />
);

export default AuthButton;
