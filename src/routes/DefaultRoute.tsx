import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

export const DefaultRoute = () => {
  const user = useContext(AuthContext);

  return (
    <Route
      path="/"
      render={() => {
        if (user === undefined) {
          return <p>Loading...</p>;
        }

        if (user) {
          return <Redirect to="/feed" />;
        }

        return <Redirect to="/" />;
      }}
    />
  );
};
