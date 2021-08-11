import React, { useState, useEffect, useContext } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PropTypes from 'prop-types';
import { Search } from '../Search/Search';
import { Navigation } from '../Navigation/Navigation';
import { userHints } from '../../constants/UserHints';
import { NotificationContext } from '../../context/NotificationProvider';
import './Header.scss';

interface HeaderProps {
  testid?: string;
}

export const Header: React.FC<HeaderProps> = ({ testid }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [amount, setAmount] = useState<number>();
  const notifications = useContext(NotificationContext);

  useEffect(() => {
    setAmount(notifications?.data.filter(data => data.data().seen === false).length);
  }, [notifications]);

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
        {amount}
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
