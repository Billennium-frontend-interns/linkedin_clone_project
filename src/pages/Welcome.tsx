import React from 'react';
import { Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Welcome.scss';

export const Welcome: React.FC = () => {
  const handleSignIn = () => null;
  const handleSignUp = () => null;
  return (
    <main className="welcome-page">
      <div className="wrapper">
        <section className="wrapper__h1">
          <h1>Linked</h1>
          <LinkedInIcon className="wrapper__h1--icon" />
        </section>
        <h2 className="wrapper__welcome-txt">Welcome to your professional community</h2>
        <section className="wrapper__btns">
          <Button
            className="wrapper__btns--welcome-button"
            onClick={handleSignIn}
            variant="outlined"
            color="primary"
            size="large"
          >
            Sign in
          </Button>
          <Button
            className="wrapper__btns--welcome-button"
            onClick={handleSignUp}
            variant="contained"
            color="primary"
            size="large"
          >
            Sign up
          </Button>
        </section>
      </div>
    </main>
  );
};
