import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Welcome.scss';

export const Welcome: React.FC = () => (
  <main className="welcomePage">
    <section className="container">
      <div className="hero">
        <h1 className="hero__h1">Linked</h1>
        <LinkedInIcon className="hero__icon" />
      </div>
      <h2 className="welcomeTxt">Welcome to your professional community</h2>
      <div className="btns">
        <Link className="btns__item" data-testid="signIn" to="/signIn">
          <Button className="primary" variant="outlined" color="primary" size="large">
            Sign in
          </Button>
        </Link>
        <Link className="btns__item" data-testid="signUp" to="/signUp">
          <Button className="secondary" variant="contained" color="primary" size="large">
            Sign up
          </Button>
        </Link>
      </div>
    </section>
  </main>
);
