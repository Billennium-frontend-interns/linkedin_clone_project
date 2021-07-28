import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

interface LoaderProps {
  isLoading: boolean;
  children: React.ReactElement;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }

  return children;
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string
};
