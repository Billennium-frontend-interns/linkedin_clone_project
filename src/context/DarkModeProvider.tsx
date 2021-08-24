import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

interface DarkModeProviderProps {
  children: React.ReactNode;
}

const useProviderDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return { isDarkMode, setIsDarkMode };
};

type DarkModeContextData = ReturnType<typeof useProviderDarkMode>;

export const DarkModeContext = createContext<DarkModeContextData | null>(null);

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const value = useProviderDarkMode();
  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};

export const useDarkMode: () => DarkModeContextData = () => {
  const darkMode = useContext(DarkModeContext);
  if (!darkMode) {
    throw new Error('useDarkMode must be used inside DarkModeProvider');
  }
  return darkMode;
};

DarkModeProvider.propTypes = {
  children: PropTypes.element.isRequired
};
