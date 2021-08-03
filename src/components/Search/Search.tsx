import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { SearchHint } from '../SearchHint/SearchHint';
import './Search.scss';

type userHint = {
  displayName: string;
  id: string;
};
interface SearchProps {
  testid?: string;
  getHints?: (set: React.Dispatch<React.SetStateAction<userHint[][]>>, value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ testid, getHints }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchHints, setSearchHints] = useState<userHint[][]>([]);

  useEffect(() => {
    if (getHints) {
      getHints(setSearchHints, searchInput);
    }
  }, [searchInput]);

  return (
    <div className="search" data-testid={testid}>
      <div className="search__container">
        <SearchIcon className="search__icon" />
        <input
          value={searchInput}
          onChange={event => setSearchInput(event.target.value)}
          data-testid={`${testid}Input`}
          placeholder="Search..."
          className="search__input"
          type="text"
        />
      </div>
      <ul className="search__hints">
        {searchHints.map(hint => (
          <SearchHint key={hint[0].id} displayName={hint[0].displayName} id={hint[0].id} />
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
  getHints: PropTypes.func.isRequired
};
