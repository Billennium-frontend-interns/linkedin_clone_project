import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { SearchHint } from '../SearchHint/SearchHint';
import { User } from '../../shared/interfaces/UserInterfaces';
import { useDarkMode } from '../../context/DarkModeProvider';
import './Search.scss';

interface SearchProps {
  testid?: string;
  getHints?: (set: React.Dispatch<React.SetStateAction<User[][]>>, value: string) => void;
  setIsSearchOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen?: boolean;
}

export const Search: React.FC<SearchProps> = ({ testid, getHints, setIsSearchOpen, isSearchOpen }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchHints, setSearchHints] = useState<User[][]>([]);
  const { isDarkMode } = useDarkMode();
  const container = useRef() as React.MutableRefObject<HTMLInputElement>;
  const params = useParams();

  const closeInputOutside = (ref: React.MutableRefObject<HTMLInputElement>) => {
    if (setIsSearchOpen) {
      useEffect(() => {
        const handleOutsideClick = (event: Event) => {
          if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
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

  useEffect(() => {
    setSearchInput('');
  }, [params]);

  closeInputOutside(container);

  return (
    <div
      className={classNames(
        'search',
        { 'search--hidden': isSearchOpen },
        { 'search--dark': isDarkMode },
        { 'search--hidden--dark': isSearchOpen && isDarkMode }
      )}
      data-testid={testid}
    >
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
          minLength={2}
          debounceTimeout={200}
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
          <SearchHint
            key={hint.id}
            displayName={hint.displayName}
            id={hint.id}
            avatar={hint.avatar}
            headline={hint.headline}
          />
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
