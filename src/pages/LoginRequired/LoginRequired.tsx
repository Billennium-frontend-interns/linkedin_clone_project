import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { Link } from 'react-router-dom';
import './LoginRequired.scss';

export const LoginRequired: React.FC = () => (
  <article className="loginRequired">
    <h1 className="loginRequired__title">To visit this page you need to login first!</h1>
    <SentimentVeryDissatisfiedIcon className="loginRequired__icon" />
    <div className="loginRequired__wrapper">
      <p className="loginRequired__hint">Already have an account?</p>
      <Link to="/signin" className="loginRequired__link">
        Sign in!
      </Link>
    </div>
    <div className="loginRequired__wrapper">
      <p className="loginRequired__hint">Don&apos;t have an account?</p>
      <Link to="/signup" className="loginRequired__link">
        Sign up!
      </Link>
    </div>
  </article>
);
