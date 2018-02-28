import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from 'routes/LandingPage';
import User from 'routes/User';
import Callback from 'routes/Callback';
import * as routes from 'config/routes';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={routes.LOGIN} component={LandingPage} />
        <Route exact path={routes.USER} component={User} />
        <Route exact path={routes.CALLBACK} component={Callback} />
      </Switch>
    );
  }
}

export default Routes;
