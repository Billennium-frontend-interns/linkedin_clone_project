import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Logo.scss';

export interface LogoProps {
  variant: 'small' | 'medium' | 'big';
}

export const Logo: React.FC<LogoProps> = ({ variant }: LogoProps) => (
  <p className={`logo logo--${variant}`}>
    <span className="logo__text">Linked</span>
    <LinkedInIcon className="logo__icon" />
  </p>
);
