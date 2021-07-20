import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/AuthProvider';

export const ProtectedRoute: React.FC<RouteProps> = ({ exact, path, component }) => {
  const user = useContext(AuthContext);

  if (user === undefined) {
    return <p>Loading...</p>;
  }

  if (user) {
    return <Route exact={exact} path={path} component={component} />;
  }

  return <Redirect to="/" />;
};

ProtectedRoute.defaultProps = {
  exact: true
};

ProtectedRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
};
