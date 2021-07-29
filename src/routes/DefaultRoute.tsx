import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { AuthContext } from '../context/AuthProvider';

export const DefaultRoute: React.FC = () => {
  const user = useContext(AuthContext);

  return (
    <Route
      path="/"
      render={() => {
        if (user === undefined) {
          return <CircularProgress />;
        }

        if (user) {
          return <Redirect to="/feed" />;
        }

        return <Redirect to="/" />;
      }}
    />
  );
};
