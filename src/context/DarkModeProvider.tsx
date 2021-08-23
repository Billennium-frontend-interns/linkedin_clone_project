import React, { useState, createContext, SetStateAction, Dispatch } from 'react';
import PropTypes from 'prop-types';

interface DarkModeProviderProps {
  children: React.ReactNode;
}

export const DarkModeContext = createContext<(boolean | Dispatch<SetStateAction<boolean>>)[]>([]);

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return <DarkModeContext.Provider value={[isDarkMode, setIsDarkMode]}>{children}</DarkModeContext.Provider>;
};

DarkModeProvider.propTypes = {
  children: PropTypes.element.isRequired
};
