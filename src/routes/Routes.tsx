import React from 'react';
import { Route } from 'react-router-dom';
import { DefaultRoute } from './DefaultRoute';
import { ProtectedRoute } from './ProtectedRoute';

export const Routes = [
  <Route exact path="/" />,
  <Route exact path="/signUp" />,
  <Route exact path="/signIn" />,
  <ProtectedRoute path="/feed" />,
  <ProtectedRoute exact path="/network" />,
  <ProtectedRoute exact path="/notification" />,
  <DefaultRoute />
];
