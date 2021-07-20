import React from 'react';
import './Logo.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

interface LogoProps {
  variant: 'small' | 'medium' | 'big';
}

const Logo: React.FC<LogoProps> = ({ variant }: LogoProps) => (
  <span className={`logo logo--${variant}`}>
    <h1>Linked</h1>
    <LinkedInIcon className="logo__icon" />
  </span>
);

export default Logo;
