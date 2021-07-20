import React from 'react';
import { DefaultRoute } from './DefaultRoute';
import { ProtectedRoute } from './ProtectedRoute';

export const PrivateDefaultRoutes = [<ProtectedRoute path="/feed" />, <DefaultRoute />];
