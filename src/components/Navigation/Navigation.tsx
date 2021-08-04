import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { HeaderDropdown } from '../DropdownsContent/HeaderDropdown';
import { navigationItems } from '../../constants/Navigation';
import { Dropdown } from '../Dropdown/Dropdown';
import { NavigationIcon } from '../NavigationIcon/NavigationIcon';
import './Navigation.scss';

interface NavigationProps {
  testid?: string;
  isSearchOpen?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ testid, isSearchOpen }) => (
  <nav className={classNames('navigation', { 'navigation--hidden': isSearchOpen })} data-testid={testid}>
    <ul className="navigation__wrapper">
      {navigationItems.map(({ title, path, icon }) => (
        <li key={path}>
          {path ? (
            <Link className="navigation__link" to={path}>
              <NavigationIcon testid={`${testid}Link${title}`} title={title} path={path} Icon={icon} />
            </Link>
          ) : (
            <Dropdown DropdownOpener={<NavigationIcon testid={`${testid}DropdownOpener`} title={title} Icon={icon} />}>
              <HeaderDropdown testid={`${testid}Dropdown`} />
            </Dropdown>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

Navigation.defaultProps = {
  testid: undefined,
  isSearchOpen: false
};

Navigation.propTypes = {
  testid: PropTypes.string,
  isSearchOpen: PropTypes.bool
};
