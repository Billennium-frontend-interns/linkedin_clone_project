import React from 'react';
import { ErrorFallback } from '../../pages/ErrorFallback/ErrorFallback';

interface ErrorBoundaryProps {
  children: React.ReactElement;
}

export class GlobalErrorBoundary extends React.Component<ErrorBoundaryProps> {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    hasError: false
  };

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown): void {
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render(): React.ReactElement {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorFallback />;
    }

    return children;
  }
}
