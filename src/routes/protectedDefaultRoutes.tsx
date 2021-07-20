import React from 'react';
import { DefaultRoute } from './DefaultRoute';
import { ProtectedRoute } from './ProtectedRoute';

const protectedDefaultRoutes = [<ProtectedRoute path="/feed" />, <DefaultRoute />];

export { protectedDefaultRoutes };
