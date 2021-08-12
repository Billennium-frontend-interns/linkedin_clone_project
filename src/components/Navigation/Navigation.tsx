import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { navigationItems } from '../../constants/Navigation';
import { Dropdown } from '../Dropdown/Dropdown';
import { NavigationIcon } from '../NavigationIcon/NavigationIcon';
import { NotificationContext } from '../../context/NotificationProvider';
import './Navigation.scss';

interface NavigationProps {
  testid?: string;
  isSearchOpen?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ testid, isSearchOpen }) => {
  const [amount, setAmount] = useState<number>();
  const notifications = useContext(NotificationContext);

  useEffect(() => {
    setAmount(notifications?.data.filter(data => data.data().seen === false).length);
  }, [notifications]);

  return (
    <nav className={classNames('navigation', { 'navigation--hidden': isSearchOpen })} data-testid={testid}>
      <ul className="navigation__wrapper">
        {navigationItems.map(({ title, path, icon, content, badge }) => (
          <li key={title}>
            {path ? (
              <Link className="navigation__link" to={path}>
                <NavigationIcon testid={`${testid}Link${title}`} title={title} path={path} Icon={icon} />
              </Link>
            ) : (
              <Dropdown
                DropdownOpener={
                  badge ? (
                    <NavigationIcon
                      badgeContent={amount}
                      testid={`${testid}DropdownOpener`}
                      title={title}
                      Icon={icon}
                    />
                  ) : (
                    <NavigationIcon testid={`${testid}DropdownOpener`} title={title} Icon={icon} />
                  )
                }
                content={content}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
Navigation.defaultProps = {
  testid: undefined,
  isSearchOpen: false
};

Navigation.propTypes = {
  testid: PropTypes.string,
  isSearchOpen: PropTypes.bool
};
