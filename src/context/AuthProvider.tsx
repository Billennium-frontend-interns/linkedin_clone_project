import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<firebase.default.User | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.default.User | null>(null);

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return unsubscriber;
  }, []);

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};
