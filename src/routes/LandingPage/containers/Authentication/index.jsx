import React, { Component } from "react";
import { connect } from "react-redux";
import * as userActions from "reducers/user";
import GoogleLogin from "routes/LandingPage/components/GoogleLogin";
import FacebookLogin from "routes/LandingPage/components/FacebookLogin";
import AuthButton from "routes/LandingPage/components/AuthButton";

class Authentication extends Component {
  onSuccess = service => response => {
    this.props.loginUser(service, response);
  };

  onFailure = response => {
    console.log("failure", response);
  };

  render() {
    return (
      <div className="center v-mid dtc tc bg-light-red">
        <AuthButton>
          <GoogleLogin
            onSuccess={this.onSuccess("google")}
            onFailure={this.onFailure}
          />
        </AuthButton>
        <AuthButton>
          <FacebookLogin
            onSuccess={this.onSuccess("facebook")}
            onFailure={this.onFailure}
          />
        </AuthButton>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (service, userData) =>
    dispatch(userActions.loginUser(service, userData))
});

export default connect(null, mapDispatchToProps)(Authentication);
