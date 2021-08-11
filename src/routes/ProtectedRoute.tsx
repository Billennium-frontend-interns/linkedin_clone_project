import React, { useContext } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/AuthProvider';
import { LoginRequired } from '../pages/LoginRequired/LoginRequired';

export const ProtectedRoute: React.FC<RouteProps> = ({ exact, path, component }) => {
  const user = useContext(AuthContext);

  if (user) {
    return <Route exact={exact} path={path} component={component} />;
  }
  return <LoginRequired />;
};

ProtectedRoute.defaultProps = {
  exact: true,
  component: undefined
};

ProtectedRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func
};
