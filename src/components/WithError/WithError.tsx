import React from 'react';
import PropTypes from 'prop-types';

interface ErrorProps {
  isError: boolean;
  errorMessage: string;
  children?: React.ReactElement;
  className?: string;
  testid?: string;
}

export const WithError: React.FC<ErrorProps> = ({ isError, errorMessage, children, className, testid }) => {
  if (isError) {
    return (
      <p className={className} data-testid={testid}>
        {errorMessage}
      </p>
    );
  }

  if (!children) {
    return null;
  }

  return children;
};

WithError.propTypes = {
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  children: PropTypes.element,
  className: PropTypes.string,
  testid: PropTypes.string
};
