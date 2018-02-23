import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from 'routes/LandingPage';
import User from 'routes/User';
import * as routes from 'config/routes';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={routes.LOGIN} component={LandingPage} />
        <Route exact path={routes.USER_ROUTE} component={User} />
      </Switch>
    );
  }
}

export default Routes;
