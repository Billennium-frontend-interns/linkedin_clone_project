import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Logo.scss';

export interface LogoProps {
  variant: 'small' | 'medium' | 'big';
}

export const Logo: React.FC<LogoProps> = ({ variant }: LogoProps) => (
  <span className={`logo logo--${variant}`}>
    <h1>Linked</h1>
    <LinkedInIcon className="logo__icon" />
  </span>
);
