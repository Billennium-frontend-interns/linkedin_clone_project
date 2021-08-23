import React, { useState, useContext } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Search } from '../Search/Search';
import { Navigation } from '../Navigation/Navigation';
import { userHints } from '../../constants/UserHints';
import { DarkModeContext } from '../../context/DarkModeProvider';
import './Header.scss';

interface HeaderProps {
  testid?: string;
}

export const Header: React.FC<HeaderProps> = ({ testid }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode] = useContext(DarkModeContext);

  return (
    <header className={classnames('header', { 'header--dark': isDarkMode })} data-testid={testid}>
      <div className="header__search">
        <Link to="/feed">
          <LinkedInIcon
            color="primary"
            className={classnames('header__logo', { 'header__logo--hidden': isSearchOpen })}
          />
        </Link>
        <Search
          setIsSearchOpen={setIsSearchOpen}
          isSearchOpen={isSearchOpen}
          testid="searchHeader"
          getHints={userHints}
        />
      </div>
      <Navigation testid="navigationHeader" isSearchOpen={isSearchOpen} />
    </header>
  );
};

Header.defaultProps = {
  testid: undefined
};

Header.propTypes = {
  testid: PropTypes.string
};
