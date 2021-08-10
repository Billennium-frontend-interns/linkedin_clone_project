import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Welcome.scss';

export const Welcome: React.FC = () => (
  <main className="welcomePage">
    <section className="hero">
      <h1 className="hero__title">
        <span>Linked</span>
        <LinkedInIcon className="hero__icon" />
      </h1>
      <h2 className="hero__sub-title">Welcome to your professional community</h2>
      <div className="hero__links">
        <Link className="hero__link" to="/signIn">
          <Button data-testid="signIn" className="primary" variant="outlined" color="primary" size="large">
            Sign in
          </Button>
        </Link>
        <Link className="hero__link" to="/signUp">
          <Button data-testid="signUp" className="secondary" variant="contained" color="primary" size="large">
            Sign up
          </Button>
        </Link>
      </div>
    </section>
  </main>
);
