import React from 'react';
import { Route } from 'react-router-dom';
import { FormLayout } from '../pages/FormLayout/FormLayout';
import { Welcome } from '../pages/Welcome/Welcome';
import { DefaultRoute } from './DefaultRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { SignupForm } from '../components/SignupForm/SignupForm';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { Header } from '../components/Header/Header';

export const Routes = [
  <Route exact path="/" component={Welcome} />,
  <Route exact path="/signUp" render={() => <FormLayout formComponent={<SignupForm />} />} />,
  <Route exact path="/signIn" render={() => <FormLayout formComponent={<LoginForm />} />} />,
  <ProtectedRoute path="/feed" component={Header} />,
  <ProtectedRoute exact path="/network" />,
  <ProtectedRoute exact path="/notification" />,
  <ProtectedRoute path="/user/:ownerUid" />,
  <DefaultRoute />
];
