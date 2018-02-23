import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "routes/LandingPage";
import * as routes from "config/routes";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path={routes.LOGIN} component={LandingPage} />
      </Switch>
    );
  }
}

export default Routes;
