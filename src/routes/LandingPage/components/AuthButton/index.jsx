import { cloneElement } from "react";

const AuthButton = props =>
  cloneElement(props.children, {
    className: "h3 f6 dim ph3 pv2 mb5 dib bg-lightest-blue pointer black"
  });

export default AuthButton;
