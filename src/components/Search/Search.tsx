import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import './Search.scss';
import { SearchHint } from '../SearchHint/SearchHint';

interface SearchProps {
  testId?: string;
  hintsFunction?: (set: React.Dispatch<React.SetStateAction<string[]>>, value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ testId, hintsFunction }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchHints, setSearchHints] = useState<string[]>([]);

  useEffect(() => {
    if (hintsFunction) {
      hintsFunction(setSearchHints, searchInput);
    }
  }, [searchInput]);

  return (
    <div className="search">
      <div className="search__container">
        <SearchIcon className="search__icon" />
        <input
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          data-testid={testId}
          placeholder="Search..."
          className="search__input"
          type="text"
        />
      </div>
      <ul className="search__hints">
        {searchHints.map(hint => (
          <SearchHint hint={hint} />
        ))}
      </ul>
    </div>
  );
};

Search.propTypes = {
  testId: PropTypes.string.isRequired,
  hintsFunction: PropTypes.func.isRequired
};
