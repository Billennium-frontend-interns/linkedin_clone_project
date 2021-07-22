import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Search.scss';

export const Search: React.FC = () => (
  <div className="search">
    <SearchIcon className="search__icon" />
    <input placeholder="Search..." className="search__input" type="text" />
  </div>
);
