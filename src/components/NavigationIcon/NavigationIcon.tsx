import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Badge } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { AuthContext } from '../../context/AuthProvider';
import './NavigationIcon.scss';

interface NavigationIconProps {
  Icon: OverridableComponent<any>;
  title: string;
  path?: string;
  testid?: string;
  badgeContent?: number;
}

export const NavigationIcon: React.FC<NavigationIconProps> = ({ Icon, title, path, testid, badgeContent }) => {
  const location = useLocation();
  const user = useContext(AuthContext);

  return (
    <div
      data-testid={testid}
      className={classNames('navigationIcon', { 'navigationIcon--active': path === location.pathname })}
    >
      {badgeContent ? (
        <Badge badgeContent={badgeContent} color="primary">
          <Icon className="navigationIcon__icon" src={user?.photoURL} />
        </Badge>
      ) : (
        <Icon className="navigationIcon__icon" src={user?.photoURL} />
      )}

      <p className="navigationIcon__title">{title}</p>
    </div>
  );
};

NavigationIcon.defaultProps = {
  path: '',
  testid: undefined,
  badgeContent: 0
};

NavigationIcon.propTypes = {
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  testid: PropTypes.string,
  badgeContent: PropTypes.number
};
