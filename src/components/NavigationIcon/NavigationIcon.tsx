import React from 'react';
import PropTypes from 'prop-types';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import cx from '@mateusz_lisowski/merge-classnames';
import { useLocation } from 'react-router-dom';
import './NavigationIcon.scss';

interface NavigationIconProps {
  Icon: OverridableComponent<any>;
  title: string;
  path?: string;
}

export const NavigationIcon: React.FC<NavigationIconProps> = ({ Icon, title, path }) => {
  const location = useLocation();

  return (
    <div className={cx([{ 'navigationIcon--active': location.pathname === path }, 'navigationIcon'])}>
      <Icon className="navigationIcon__icon" />
      <p className="navigationIcon__title">{title}</p>
    </div>
  );
};

NavigationIcon.defaultProps = {
  path: ''
};

NavigationIcon.propTypes = {
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string
};
