import React from 'react';
import { ToastContainer } from 'react-toastify';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Routes } from './routes/Routes';
import { NotificationsProvider } from './context/NotificationProvider';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Globals.scss';

const App: React.FC = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <NotificationsProvider>
      <Switch>{Routes}</Switch>
      <ToastContainer />
    </NotificationsProvider>
  </Router>
);

export default App;
