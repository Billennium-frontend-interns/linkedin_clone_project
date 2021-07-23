import React from 'react';
import PropTypes from 'prop-types';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import './NavigationIcon.scss';

interface NavigationIconProps {
  Icon: OverridableComponent<any>;
  title: string;
  path?: string;
}

export const NavigationIcon: React.FC<NavigationIconProps> = ({ Icon, title, path }) => {
  const location = useLocation();

  return (
    <div className={classNames('navigationIcon', { 'navigationIcon--active': path === location.pathname })}>
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
