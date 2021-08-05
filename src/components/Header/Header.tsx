import React, { useState } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PropTypes from 'prop-types';
import { Search } from '../Search/Search';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';
import { userHints } from '../../constants/UserHints';

interface HeaderProps {
  testid?: string;
}

export const Header: React.FC<HeaderProps> = ({ testid }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="header" data-testid={testid}>
      <div className="header__search">
        <LinkedInIcon color="primary" className="header__logo" />
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
