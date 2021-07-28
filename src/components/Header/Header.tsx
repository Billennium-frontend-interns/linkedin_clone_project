import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PropTypes from 'prop-types';
import { Search } from '../Search/Search';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';

interface HeaderProps {
  testid?: string;
}

export const Header: React.FC<HeaderProps> = ({ testid }) => (
  <header className="header" data-testid={testid}>
    <div className="header__search">
      <LinkedInIcon color="primary" className="header__logo" />
      <Search testid="searchHeader" />
    </div>
    <Navigation testid="navigationHeader" />
  </header>
);

Header.defaultProps = {
  testid: undefined
};

Header.propTypes = {
  testid: PropTypes.string
};
