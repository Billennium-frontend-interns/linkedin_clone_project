import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { GlobalErrorBoundary } from './components/GlobalErrorBoundary/GlobalErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GlobalErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
