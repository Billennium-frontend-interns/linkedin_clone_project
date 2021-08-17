import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DebounceInput } from 'react-debounce-input';
import { SearchHint } from '../SearchHint/SearchHint';
import { userHint } from '../../shared/interfaces/UserInterfaces';
import './Search.scss';

interface SearchProps {
  testid?: string;
  getHints?: (set: React.Dispatch<React.SetStateAction<userHint[][]>>, value: string) => void;
  setIsSearchOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen?: boolean;
}

export const Search: React.FC<SearchProps> = ({ testid, getHints, setIsSearchOpen, isSearchOpen }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchHints, setSearchHints] = useState<userHint[][]>([]);
  const container = useRef() as React.MutableRefObject<HTMLInputElement>;

  const closeInputOutside = (ref: React.MutableRefObject<HTMLInputElement>) => {
    if (setIsSearchOpen) {
      useEffect(() => {
        const handleOutsideClick = (event: any) => {
          if (ref.current && !ref.current.contains(event.target)) {
            setIsSearchOpen(false);
            document.removeEventListener('click', handleOutsideClick);
          }
        };
        if (isSearchOpen) {
          document.addEventListener('click', handleOutsideClick);
        }
      }, [isSearchOpen, ref]);
    }
  };

  useEffect(() => {
    if (getHints) {
      getHints(setSearchHints, searchInput);
    }
  }, [searchInput]);

  closeInputOutside(container);

  return (
    <div className={classNames('search', { 'search--hidden': isSearchOpen })} data-testid={testid}>
      <div ref={container} className="search__container">
        <SearchIcon
          onClick={() => {
            if (setIsSearchOpen) {
              setIsSearchOpen(true);
            }
          }}
          className={classNames('search__icon', { 'search__icon--hidden': isSearchOpen })}
        />
        <DebounceInput
          minLength={3}
          debounceTimeout={500}
          value={searchInput}
          onChange={event => setSearchInput(event.target.value)}
          data-testid={`${testid}Input`}
          placeholder="Search..."
          className={classNames('search__input', { 'search__input--hidden': isSearchOpen })}
          type="text"
        />
      </div>
      <ul className={classNames('search__hints', { 'search__hints--hidden': isSearchOpen })}>
        {searchHints.map(([hint]) => (
          <SearchHint key={hint.id} displayName={hint.displayName} id={hint.id} avatar={hint.avatar} />
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
