import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Routes } from './routes/Routes';
import './styles/Globals.scss';

const App: React.FC = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>{Routes}</Switch>
  </Router>
);

export default App;
