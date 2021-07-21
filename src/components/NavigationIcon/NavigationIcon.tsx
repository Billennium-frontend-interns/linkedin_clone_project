import React from 'react';
import PropTypes from 'prop-types';
import './NavigationIcon.scss';
import { Avatar, SvgIconTypeMap } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

interface NavigationIconProps {
  path?: string | null;
  avatar?: string | undefined;
  Icon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> | null;
  title: string;
}

export const NavigationIcon: React.FC<NavigationIconProps> = ({ path, avatar, Icon, title }) => {
  const location = useLocation();

  if (path) {
    return (
      <Link to={path}>
        <div className={`navigationIcon ${path === location.pathname ? 'navigationIcon--active' : ''}`}>
          {Icon ? <Icon className="navigationIcon__icon" /> : <Avatar src={avatar} className="navigationIcon__icon" />}
          <h3 className="navigationIcon__title">{title}</h3>
        </div>
      </Link>
    );
  }

  return (
    <div className="navigationIcon">
      {Icon ? <Icon className="navigationIcon__icon" /> : <Avatar src={avatar} className="navigationIcon__icon" />}
      <h3 className="navigationIcon__title">{title}</h3>
    </div>
  );
};

NavigationIcon.defaultProps = {
  path: null,
  avatar: '',
  Icon: null
};

NavigationIcon.propTypes = {
  path: PropTypes.string,
  avatar: PropTypes.string,
  Icon: PropTypes.func,
  title: PropTypes.string.isRequired
};
