import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HeaderDropdown } from '../../constants/HeaderDropdown';
import { navigationItems } from '../../constants/Navigation';
import { Dropdown } from '../Dropdown/Dropdown';
import { NavigationIcon } from '../NavigationIcon/NavigationIcon';
import './Navigation.scss';

export const Navigation: React.FC<{ testId?: string }> = ({ testId }) => (
  <nav className="navigation">
    <ul className="navigation__wrapper">
      {navigationItems.map(({ title, path, icon }) => (
        <li>
          {path ? (
            <Link className="navigation__link" to={path}>
              <NavigationIcon data-testid={testId} title={title} path={path} Icon={icon} />
            </Link>
          ) : (
            <Dropdown DropdownOpener={<NavigationIcon title={title} Icon={icon} />}>
              <HeaderDropdown />
            </Dropdown>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

Navigation.propTypes = {
  testId: PropTypes.string.isRequired
};
