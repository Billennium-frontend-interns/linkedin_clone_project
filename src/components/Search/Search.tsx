import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import './Search.scss';

interface SearchProps {
  testid?: string;
}

export const Search: React.FC<SearchProps> = ({ testid }) => (
  <div className="search" data-testid={testid}>
    <SearchIcon className="search__icon" />
    <input data-testid={`${testid}Input`} placeholder="Search..." className="search__input" type="text" />
  </div>
);

Search.defaultProps = {
  testid: undefined
};

Search.propTypes = {
  testid: PropTypes.string
};
