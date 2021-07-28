import React from 'react';
import PropTypes from 'prop-types';

interface ErrorProps {
  isError: boolean;
  children: React.ReactElement;
  className?: string;
}

export const Error: React.FC<ErrorProps> = ({ isError, children }) => {
  if (isError) {
    return <p className="error">Error has occurred please try again...</p>;
  }

  return children;
};

Error.propTypes = {
  isError: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string
};
