import React from 'react';
import PropTypes from 'prop-types';

export const StateContext = React.createContext(null);

export const StateProvider: React.FC = ({ children }) => (
  <StateContext.Provider value={null}>{children}</StateContext.Provider>
);

StateProvider.propTypes = {
  children: PropTypes.element.isRequired
};
