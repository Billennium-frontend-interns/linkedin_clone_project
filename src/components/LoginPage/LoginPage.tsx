import React, { useState } from 'react';
import '../../shared/styles/formstyles.scss';
import './LoginPage.scss';
import { Button, TextField } from '@material-ui/core';
import Logo from '../../shared/components/Logo/Logo';

const loginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="loginpage__container">
      <span className="loginpage__logo">
        <Logo variant="medium" />
      </span>
      <form className="form__wrapper" onSubmit={handleSubmit}>
        <h1 className="loginpage__signinText">Sign in</h1>
        <TextField className="form__input" label="E-mail" onChange={event => setEmail(event.target.value)} />
        <TextField
          className="form__input"
          label="Password"
          type="password"
          onChange={event => setPassword(event.target.value)}
        />
        <Button className="form__submit" variant="contained" color="primary">
          Sign in
        </Button>
      </form>
      <h4>Don&apos;t have an account?</h4>
      <button className="signup__button" type="button">
        Sign up!
      </button>
    </div>
  );
};

export default loginPage;
