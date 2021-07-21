import React from 'react';
import { navigationItems } from '../../constants/Navigation';
import { NavigationIcon } from '../NavigationIcon/NavigationIcon';
import { NavigationIconLink } from '../NavigationIconLink/NavigationIconLink';
import './Navigation.scss';

export const Navigation: React.FC = () => (
  <nav className="navigation">
    <ul className="navigation__ul">
      {navigationItems.map(({ title, path, icon }) => (
        <li>
          {path ? (
            <NavigationIconLink title={title} path={path} Icon={icon} />
          ) : (
            <NavigationIcon title={title} Icon={icon} />
          )}
        </li>
      ))}
    </ul>
  </nav>
);
