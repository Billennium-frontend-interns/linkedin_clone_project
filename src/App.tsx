import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { protectedDefaultRoutes } from './routes/protectedDefaultRoutes';
import { publicRoutes } from './routes/publicRoutes';

const App: React.FC = () => (
  <Router>
    <Switch>
      {publicRoutes}
      {protectedDefaultRoutes}
    </Switch>
  </Router>
);

export default App;
