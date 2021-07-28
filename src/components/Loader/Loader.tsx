import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

interface LoaderProps {
  isLoading: boolean;
  children: React.ReactElement;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return <CircularProgress />;
  }

  return children;
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
};
