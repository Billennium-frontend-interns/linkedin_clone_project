import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Routes } from './routes/Routes';

const App: React.FC = () => (
  <Router>
    <Switch>{Routes}</Switch>
  </Router>
);


export default App;
