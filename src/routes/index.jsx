import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import * as routes from '../constants/routes';

import User from 'routes/User';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={routes.USER_ROUTE} component={User} />
      </Switch>
    );
  }
}

export default Routes;
