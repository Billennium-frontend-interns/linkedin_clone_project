import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import './Search.scss';
import db from '../../firebase';
import { SearchHint } from '../SearchHint/SearchHint';

export const Search: React.FC<{ testId?: string }> = ({ testId }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchHints, setSearchHints] = useState<{ id: string; displayName: string }[]>([]);

  useEffect(() => {
    db.collection('users')
      .orderBy('displayName', 'asc')
      .onSnapshot(snapshot => {
        setSearchHints(
          snapshot.docs
            .map(doc => ({ id: doc.id, displayName: doc.data().displayName }))
            .filter(doc => doc.displayName.startsWith(searchInput) && searchInput)
            .slice(0, 5)
        );
      });
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
        {searchHints.map(({ id, displayName }) => (
          <SearchHint key={id} hint={displayName} />
        ))}
      </ul>
    </div>
  );
};

Search.propTypes = {
  testId: PropTypes.string.isRequired
};
