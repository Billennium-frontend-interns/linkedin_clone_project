import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import './Search.scss';

export const Search: React.FC<{ testId?: string }> = ({ testId }) => (
  <div className="search">
    <SearchIcon className="search__icon" />
    <input data-testid={testId} placeholder="Search..." className="search__input" type="text" />
  </div>
);

Search.propTypes = {
  testId: PropTypes.string.isRequired
};
