import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchHint } from '../SearchHint/SearchHint';
import './Search.scss';

interface SearchProps {
  testid?: string;
  getHints?: (set: React.Dispatch<React.SetStateAction<string[]>>, value: string) => void;
  setIsSearchOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen?: boolean;
}

export const Search: React.FC<SearchProps> = ({ testid, getHints, setIsSearchOpen, isSearchOpen }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchHints, setSearchHints] = useState<string[]>([]);

  useEffect(() => {
    if (getHints) {
      getHints(setSearchHints, searchInput);
    }
  }, [searchInput]);

  return (
    <div className={classNames('search', { 'search--hide': isSearchOpen })} data-testid={testid}>
      <div className="search__container">
        <SearchIcon
          onClick={() => {
            if (setIsSearchOpen) {
              setIsSearchOpen(!isSearchOpen);
            }
          }}
          className="search__icon"
        />
        <input
          value={searchInput}
          onChange={event => setSearchInput(event.target.value)}
          data-testid={`${testid}Input`}
          placeholder="Search..."
          className={classNames('search__input', { 'search__input--hide': isSearchOpen })}
          type="text"
        />
      </div>
      <ul className={classNames('search__hints', { 'search__hints--hide': isSearchOpen })}>
        {searchHints.map(hint => (
          <SearchHint key={hint} hint={hint} />
        ))}
      </ul>
    </div>
  );
};

Search.defaultProps = {
  testid: undefined,
  setIsSearchOpen: undefined,
  isSearchOpen: false
};

Search.propTypes = {
  testid: PropTypes.string,
  getHints: PropTypes.func.isRequired,
  setIsSearchOpen: PropTypes.func,
  isSearchOpen: PropTypes.bool
};
