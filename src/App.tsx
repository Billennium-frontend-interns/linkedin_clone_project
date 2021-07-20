import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrivateDefaultRoutes } from './routes/PrivateDefaultRoutes';
import { PublicRoutes } from './routes/PublicRoutes';

const App: React.FC = () => (
  <Router>
    <Switch>
      {PublicRoutes}
      {PrivateDefaultRoutes}
    </Switch>
  </Router>
);

export default App;
