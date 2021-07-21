import React, { useContext } from 'react';
import './Header.scss';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavigationIcon } from '../NavigationIcon/NavigationIcon';
import { AuthContext } from '../../context/AuthProvider';

export const Header: React.FC = () => {
  const user = useContext(AuthContext);

  return (
    <header className="header">
      <nav className="header__left">
        <LinkedInIcon className="header__logo" color="primary" />
        <div className="header__search">
          <SearchIcon />
          <input className="header__input" placeholder="Search" type="text" />
        </div>
      </nav>

      <nav className="header__right">
        <NavigationIcon path="/feed" Icon={HomeIcon} title="Home" />
        <NavigationIcon path="/network" Icon={SupervisorAccountIcon} title="My Network" />
        <NavigationIcon path="/notification" Icon={NotificationsIcon} title="Notification" />
        <NavigationIcon avatar={user?.photoURL || ''} title="me ▼" />
      </nav>
    </header>
  );
};
