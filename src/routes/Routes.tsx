import React from 'react';
import { Route } from 'react-router-dom';
import { FormLayout } from '../pages/FormLayout/FormLayout';
import { Welcome } from '../pages/Welcome/Welcome';
import { DefaultRoute } from './DefaultRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { SignupForm } from '../components/SignupForm/SignupForm';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { UserPage } from '../pages/UserPage/UserPage';
import { MyNetwork } from '../pages/MyNetwork/MyNetwork';
import { Feed } from '../pages/Feed/Feed';
import { Notifications } from '../pages/Notifications/Notifications';

export const Routes = [
  <Route exact path="/" component={Welcome} />,
  <Route exact path="/signUp" render={() => <FormLayout formComponent={<SignupForm />} />} />,
  <Route exact path="/signIn" render={() => <FormLayout formComponent={<LoginForm />} />} />,
  <ProtectedRoute path="/feed" component={Feed} />,
  <ProtectedRoute exact path="/network" component={MyNetwork} />,
  <ProtectedRoute exact path="/notifications" component={Notifications} />,
  <ProtectedRoute exact path="/user/:ownerUid" component={UserPage} />,
  <DefaultRoute />
];
