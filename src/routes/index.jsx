import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from 'routes/LandingPage';
import User from 'routes/User';
import Callback from 'routes/Callback';
import Lobbies from 'routes/Lobbies';
import * as routes from 'config/routes';

const Routes = () => (
  <Switch>
    <Route exact path={routes.LOGIN} component={LandingPage} />
    <Route exact path={routes.USER} component={User} />
    <Route exact path={routes.CALLBACK} component={Callback} />
    <Route exact path={routes.LOBBIES} component={Lobbies} />
  </Switch>
);

export default Routes;
