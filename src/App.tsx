import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Routes } from './routes/Routes';
import { NotificationsProvider } from './context/NotificationProvider';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Globals.scss';

const App: React.FC = () => (
  <Router>
    <NotificationsProvider>
      <Switch>{Routes}</Switch>
    </NotificationsProvider>
  </Router>
);

export default App;
