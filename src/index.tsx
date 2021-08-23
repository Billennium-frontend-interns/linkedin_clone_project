import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { GlobalErrorBoundary } from './components/GlobalErrorBoundary/GlobalErrorBoundary';
import { DarkModeProvider } from './context/DarkModeProvider';

ReactDOM.render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <DarkModeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DarkModeProvider>
    </GlobalErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
