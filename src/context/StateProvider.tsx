import React from 'react';
import PropTypes from 'prop-types';

interface StateProviderProps {
  children: React.ReactNode;
}

export const StateContext = React.createContext(null);

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => (
  <StateContext.Provider value={null}>{children}</StateContext.Provider>
);

StateProvider.propTypes = {
  children: PropTypes.element.isRequired
};
