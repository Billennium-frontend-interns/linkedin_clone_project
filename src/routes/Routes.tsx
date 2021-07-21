import React from 'react';
import { Route } from 'react-router-dom';
import { Welcome } from '../pages/Welcome/Welcome';
import { SignIn } from '../pages/Welcome/SignIn';

import { DefaultRoute } from './DefaultRoute';
import { ProtectedRoute } from './ProtectedRoute';

export const Routes = [
  <Route exact path="/" />,
  <Route exact path="/welcome" component={Welcome} />,
  <Route exact path="/signUp" />,
  <Route exact path="/signIn" component={SignIn} />,
  <ProtectedRoute path="/feed" />,
  <DefaultRoute />
];
