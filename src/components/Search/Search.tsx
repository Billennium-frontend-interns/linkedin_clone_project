import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { SearchHint } from '../SearchHint/SearchHint';
import './Search.scss';

interface SearchProps {
  testid?: string;
  hintsFunction?: (set: React.Dispatch<React.SetStateAction<string[]>>, value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ testid, hintsFunction }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchHints, setSearchHints] = useState<string[]>([]);

  useEffect(() => {
    if (hintsFunction) {
      hintsFunction(setSearchHints, searchInput);
    }
  }, [searchInput]);

  return (
    <div className="search" data-testid={testid}>
      <div className="search__container">
        <SearchIcon className="search__icon" />
        <input
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          data-testid={`${testid}Input`}
          placeholder="Search..."
          className="search__input"
          type="text"
        />
      </div>
      <ul className="search__hints">
        {searchHints.map(hint => (
          <SearchHint key={hint} hint={hint} />
        ))}
      </ul>
    </div>
  );
};

Search.defaultProps = {
  testid: undefined
};

Search.propTypes = {
  testid: PropTypes.string,
  hintsFunction: PropTypes.func.isRequired
};
