import { Link } from 'react-router-dom';
import React from 'react';
import { navigationItems } from '../../constants/Navigation';
import { NavigationIcon } from '../NavigationIcon/NavigationIcon';
import './Navigation.scss';

export const Navigation: React.FC = () => (
  <nav className="navigation">
    <ul className="navigation__wrapper">
      {navigationItems.map(({ title, path, icon }) => (
        <li>
          {path ? (
            <Link className="navigation__link" to={path}>
              <NavigationIcon title={title} path={path} Icon={icon} />
            </Link>
          ) : (
            <NavigationIcon title={title} Icon={icon} />
          )}
        </li>
      ))}
    </ul>
  </nav>
);
