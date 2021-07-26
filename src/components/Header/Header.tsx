import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Search } from '../Search/Search';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';

export const Header: React.FC = () => (
  <header className="header">
    <div className="header__search">
      <LinkedInIcon color="primary" className="header__logo" />
      <Search testId="searchInput" />
    </div>
    <Navigation testId="navigationIcon" />
  </header>
);
