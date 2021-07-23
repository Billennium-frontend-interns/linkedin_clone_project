import React from 'react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../../constants/Navigation';
import { Dropdown } from '../Dropdown/Dropdown';
import { NavigationIcon } from '../NavigationIcon/NavigationIcon';
import './Navigation.scss';

export const Navigation: React.FC = () => (
  <nav className="navigation">
    <ul className="navigation__wrapper">
      {navigationItems.map(({ title, path, icon }) => (
        <li>
          {path ? (
            <Link className="navigation__link" to={path}>
              <NavigationIcon data-testid="navigationIcon" title={title} path={path} Icon={icon} />
            </Link>
          ) : (
            <Dropdown DropdownOpener={<NavigationIcon data-testid="navigationDropdown" title={title} Icon={icon} />} />
          )}
        </li>
      ))}
    </ul>
  </nav>
);
