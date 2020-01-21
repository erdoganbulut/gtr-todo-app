import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Documentation from './Documentation';

const Routes: FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/documentation" exact component={Documentation} />
  </Switch>
);

export default Routes;
