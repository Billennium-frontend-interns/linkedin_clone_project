import React from 'react';
import PropTypes from 'prop-types';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import './NavigationIcon.scss';

interface NavigationIconLinkProps {
  Icon: OverridableComponent<any>;
  title: string;
}

export const NavigationIcon: React.FC<NavigationIconLinkProps> = ({ Icon, title }) => (
  <div className="navigationIcon">
    <Icon className="navigationIcon__icon" />
    <h3 className="navigationIcon__title">{title}</h3>
  </div>
);

NavigationIcon.propTypes = {
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
