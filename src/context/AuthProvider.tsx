import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import { WithLoader } from '../components/WithLoader/WithLoader';
import { auth } from '../firebase';
import '../styles/GlobalLoader.scss';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<firebase.default.User | undefined | null>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.default.User | null>(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <WithLoader isLoading className="globalLoader" />;
  }

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};
