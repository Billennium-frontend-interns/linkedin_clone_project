import React from 'react';
import { Route } from 'react-router-dom';
import { FormLayout } from '../pages/FormLayout/FormLayout';
import { Welcome } from '../pages/Welcome/Welcome';
import { DefaultRoute } from './DefaultRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { Logo } from '../shared/components/Logo/Logo';
import { SignupForm } from '../components/SignupForm/SignupForm';
import { LoginForm } from '../components/LoginForm/LoginForm';

export const Routes = [
  <Route exact path="/" component={Welcome} />,
  <Route exact path="/signUp" render={() => <FormLayout formComponent={<SignupForm />} />} />,
  <Route exact path="/signIn" render={() => <FormLayout formComponent={<LoginForm />} />} />,
  <ProtectedRoute path="/feed" component={Logo} />,
  <ProtectedRoute exact path="/network" />,
  <ProtectedRoute exact path="/notification" />,
  <DefaultRoute />
];
