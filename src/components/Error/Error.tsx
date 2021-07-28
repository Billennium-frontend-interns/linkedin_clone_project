import React from 'react';
import PropTypes from 'prop-types';

interface ErrorProps {
  isError: boolean;
  children: React.ReactElement;
  className?: string;
  testid?: string;
}

export const Error: React.FC<ErrorProps> = ({ isError, children, className, testid }) => {
  if (isError) {
    return (
      <p className={className} data-testid={testid}>
        Error has occurred please try again...
      </p>
    );
  }

  return children;
};

Error.propTypes = {
  isError: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  testid: PropTypes.string
};
