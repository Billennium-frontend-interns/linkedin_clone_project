import React from 'react';
import { Route } from 'react-router-dom';
import { LoginSignupPage } from '../pages/LoginSignupPage/LoginSignupPage';
import { DefaultRoute } from './DefaultRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { Logo } from '../shared/components/Logo/Logo';

export const Routes = [
  <Route exact path="/" />,
  <Route exact path="/signUp" render={() => <LoginSignupPage isLoginPage={false} />} />,
  <Route exact path="/signIn" render={() => <LoginSignupPage isLoginPage />} />,
  <ProtectedRoute path="/feed" component={Logo} />,
  <DefaultRoute />
];
