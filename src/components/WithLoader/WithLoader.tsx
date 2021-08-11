import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

interface LoaderProps {
  isLoading: boolean;
  children?: React.ReactElement;
  className?: string;
  testid?: string;
}

export const WithLoader: React.FC<LoaderProps> = ({ isLoading, children, className, testid }) => {
  if (isLoading) {
    return (
      <div className={className} data-testid={testid}>
        <CircularProgress />
      </div>
    );
  }

  if (!children) {
    return null;
  }

  return children;
};

WithLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  testid: PropTypes.string
};
