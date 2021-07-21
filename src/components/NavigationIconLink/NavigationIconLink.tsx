import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import cx from '@mateusz_lisowski/merge-classnames';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import './NavigationIconLink.scss';

interface NavigationIconLinkProps {
  path: string;
  Icon: OverridableComponent<any>;
  title: string;
}

export const NavigationIconLink: React.FC<NavigationIconLinkProps> = ({ path, Icon, title }) => {
  const location = useLocation();

  return (
    <Link
      className={cx([{ 'navigationIconLink--active': location.pathname === path }, 'navigationIconLink'])}
      to={path}
    >
      <Icon className="navigationIconLink__icon" />
      <h3 className="navigationIconLink__title">{title}</h3>
    </Link>
  );
};

NavigationIconLink.propTypes = {
  path: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
